
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Minimize2, Mail, ExternalLink } from 'lucide-react';
import { GoogleGenAI, Type, FunctionDeclaration, Tool, Content } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS, SERVICES } from '../constants';

const SYSTEM_INSTRUCTION = `
You are an intelligent portfolio assistant for ${PERSONAL_INFO.name}.
Your goal is to help visitors by answering questions about ${PERSONAL_INFO.name}'s background, skills, projects, and services.

Here is the context about ${PERSONAL_INFO.name}:
- Role: ${PERSONAL_INFO.role}
- About: ${PERSONAL_INFO.about}
- Email: ${PERSONAL_INFO.email}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- Upwork: ${PERSONAL_INFO.upwork}
- GitHub: ${PERSONAL_INFO.github}
- WhatsApp: ${PERSONAL_INFO.whatsapp}
- Experience: ${JSON.stringify(EXPERIENCE)}
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Services: ${JSON.stringify(SERVICES)}

LEAD COLLECTION PROCESS (STRICT):
If a user indicates they want to hire ${PERSONAL_INFO.name}, get in touch, or send a message, you MUST follow these steps in order:

1. **Collect Information**: Politely ask for their Name, Email Address, and the Message/Inquiry. You can collect these one by one or all at once.
2. **Review & Confirm**: Once you have Name, Email, and Message, present them back to the user to verify they are correct.
   - Example: "Thanks! Just to confirm: Name: John Doe, Email: john@example.com, Message: I want a website. Is this correct?"
3. **Action**: ONLY after the user confirms (e.g., says "yes", "looks good"), call the "sendEmail" tool.
   - When calling the tool, you MUST include a "chat_transcript" that summarizes the key points of our conversation or the full context so ${PERSONAL_INFO.name} knows what we discussed.

Do not call the "sendEmail" tool before obtaining explicit confirmation from the user.
Keep your responses professional, concise, and friendly.
`;

const emailTool: FunctionDeclaration = {
  name: "sendEmail",
  description: "Prepares an email to the portfolio owner with the visitor's contact details, message, and conversation transcript.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      name: { type: Type.STRING, description: "The visitor's full name" },
      email: { type: Type.STRING, description: "The visitor's email address" },
      message: { type: Type.STRING, description: "The content of the message or inquiry" },
      chat_transcript: { type: Type.STRING, description: "A detailed summary or transcript of the conversation context." }
    },
    required: ["name", "email", "message", "chat_transcript"],
  },
};

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  action?: {
    label: string;
    url: string;
    primary: boolean;
  };
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Hi! I'm ${PERSONAL_INFO.name.split(' ')[0]}'s AI assistant. How can I help you today?` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Content[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Gemini
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Prepare the chat request
      const currentHistory = [...history];
      currentHistory.push({ role: 'user', parts: [{ text: userMessage }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: currentHistory,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [emailTool] }],
        }
      });

      const parts = response.candidates?.[0]?.content?.parts || [];
      const modelResponseText = parts.find(p => p.text)?.text || '';
      const functionCalls = parts.filter(p => p.functionCall).map(p => p.functionCall);

      let finalText = modelResponseText;

      // Handle function calls (sendEmail)
      if (functionCalls && functionCalls.length > 0) {
        const functionResponses = [];
        
        for (const call of functionCalls) {
          if (call && call.name === 'sendEmail') {
             // Simulate sending email logic and trigger mailto
             const args = call.args as any;
             console.log("🚀 PREPARING EMAIL LEAD");
             
             // Construct mailto link
             const subject = `Portfolio Lead: ${args.name}`;
             const body = `Name: ${args.name}\nEmail: ${args.email}\n\nMessage:\n${args.message}\n\n[Chat Context]\n${args.chat_transcript}`;
             const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
             
             // We add a button to the chat instead of auto-opening to avoid popup blockers
             setMessages(prev => [...prev, { 
                 role: 'model', 
                 text: `I've drafted the email for you. Please click the button below to open your email client and send it.`,
                 action: {
                     label: "Send Email",
                     url: mailtoUrl,
                     primary: true
                 }
             }]);

             functionResponses.push({
               functionResponse: {
                 name: 'sendEmail',
                 response: { result: 'success', message: 'Email draft button presented to user.' },
                 id: call.id
               }
             });
          }
        }

        // Send function response back to model
        if (functionResponses.length > 0) {
            // Add the model's tool call turn to history
            currentHistory.push({
                role: 'model',
                parts: parts // includes the functionCall
            });

            // Add the function response turn
            currentHistory.push({
                role: 'user',
                parts: functionResponses
            });

            // Get final confirmation from model
            const finalResponse = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: currentHistory,
                config: { systemInstruction: SYSTEM_INSTRUCTION }
            });
            
            finalText = finalResponse.text || "";
            // Update history with the final turn
            currentHistory.push({ role: 'model', parts: [{ text: finalText }] });
        }
      } else {
          // Standard text response
          currentHistory.push({ role: 'model', parts: [{ text: finalText }] });
      }

      setHistory(currentHistory);
      if (finalText) {
        setMessages(prev => [...prev, { role: 'model', text: finalText }]);
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-accent hover:bg-brand-accentHover text-brand-dark rounded-full shadow-lg shadow-brand-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in-up"
        aria-label="Open Chat"
      >
        <MessageCircle size={28} />
      </button>
    );
  }

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ease-in-out shadow-2xl bg-brand-card border border-white/10 overflow-hidden flex flex-col
        ${isMinimized 
            ? 'bottom-6 right-6 w-72 h-14 rounded-full' 
            : 'bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] rounded-2xl'
        }`}
    >
      {/* Header */}
      <div 
        className={`bg-brand-dark border-b border-white/5 p-4 flex items-center justify-between cursor-pointer ${isMinimized ? 'h-full' : ''}`}
        onClick={() => isMinimized && setIsMinimized(false)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
             <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Portfolio AI</h3>
            {!isMinimized && <p className="text-xs text-brand-muted">Online</p>}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
            {!isMinimized && (
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }}
                    className="p-1.5 hover:bg-white/5 rounded-md text-brand-muted transition-colors"
                >
                    <Minimize2 size={16} />
                </button>
            )}
            <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }}
                className="p-1.5 hover:bg-white/5 rounded-md text-brand-muted transition-colors"
            >
                <X size={16} />
            </button>
        </div>
      </div>

      {/* Messages */}
      {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {messages.map((msg, idx) => (
                    <div 
                        key={idx} 
                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                        <div 
                            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                msg.role === 'user' 
                                    ? 'bg-brand-accent text-brand-dark font-medium rounded-br-none' 
                                    : 'bg-[#1e1e1e] text-gray-200 border border-white/5 rounded-bl-none'
                            }`}
                        >
                            {msg.text}
                        </div>
                        
                        {/* Action Button (if present) */}
                        {msg.action && (
                            <a 
                                href={msg.action.url}
                                target={msg.action.primary ? "_self" : "_blank"}
                                rel="noreferrer"
                                className={`mt-2 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-lg ${
                                    msg.action.primary 
                                        ? 'bg-brand-accent text-brand-dark hover:bg-brand-accentHover' 
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                <Mail size={14} />
                                {msg.action.label}
                            </a>
                        )}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-[#1e1e1e] border border-white/5 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                            <Loader2 size={16} className="animate-spin text-brand-accent" />
                            <span className="text-xs text-brand-muted">Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-brand-dark border-t border-white/5">
                <div className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask me anything..."
                        className="w-full bg-[#1e1e1e] text-white placeholder-gray-500 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent border border-white/5"
                        disabled={isLoading}
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isLoading}
                        className="absolute right-1.5 top-1.5 p-1.5 bg-brand-accent text-brand-dark rounded-full hover:bg-brand-accentHover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <div className="text-center mt-2">
                    <p className="text-[10px] text-brand-muted">Powered by Gemini 3.0 Pro</p>
                </div>
            </div>
          </>
      )}
    </div>
  );
};
