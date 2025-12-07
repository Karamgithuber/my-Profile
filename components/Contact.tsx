import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Linkedin, Github, MessageCircle, Send, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Contact Us</h2>
          <p className="text-brand-text text-sm">Get in touch with me via social media or send me an email.</p>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
           <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#0077b5] text-white px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity">
              <Linkedin size={18} /> LinkedIn
           </a>
           <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#24292e] text-white px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity">
              <Github size={18} /> GitHub
           </a>
           <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity">
              <MessageCircle size={18} /> WhatsApp
           </a>
        </div>

        <div className="border-t border-dashed border-white/20 mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#121212] border border-white/5 rounded-2xl p-8">
             <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
             <p className="text-brand-muted text-sm mb-8">My inbox is always open. Whether you have a question or just want to talk more about your projects! Feel free to mail me about any relevant job updates.</p>

             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-brand-accent text-xs font-medium uppercase tracking-wide">First Name *</label>
                      <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder-white/20" placeholder="First Name" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-brand-accent text-xs font-medium uppercase tracking-wide">Last Name</label>
                      <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder-white/20" placeholder="Last Name" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-brand-accent text-xs font-medium uppercase tracking-wide">Email *</label>
                   <input type="email" className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder-white/20" placeholder="Email" />
                </div>

                <div className="space-y-2">
                   <label className="text-brand-accent text-xs font-medium uppercase tracking-wide">Message *</label>
                   <textarea rows={5} className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder-white/20 resize-none" placeholder="Message"></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                   <span className="text-xs text-brand-muted flex items-center gap-2">
                      <Clock size={14} /> Avg. response: 1-2 Hours (Working Hours, GMT+7)
                   </span>
                   <button type="submit" className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
                      <Send size={18} /> Send
                   </button>
                </div>
             </form>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-4">
             <div className="bg-[#121212] border border-white/5 rounded-xl p-6">
                <div className="flex items-start gap-4">
                   <Phone className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                   <div>
                      <h4 className="text-brand-accent text-sm font-medium mb-1">Contact</h4>
                      <p className="text-white text-sm font-semibold">Talk to us and see how we can work</p>
                      <p className="text-brand-muted mt-2 text-sm">{PERSONAL_INFO.phone}</p>
                   </div>
                </div>
             </div>

             <div className="bg-[#121212] border border-white/5 rounded-xl p-6">
                <div className="flex items-start gap-4">
                   <Mail className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                   <div>
                      <h4 className="text-brand-accent text-sm font-medium mb-1">Email</h4>
                      <p className="text-white text-sm font-semibold">We're usually replying within 1-2 Hours</p>
                      <p className="text-brand-muted mt-2 text-sm">{PERSONAL_INFO.email}</p>
                   </div>
                </div>
             </div>

             <div className="bg-[#121212] border border-white/5 rounded-xl p-6">
                <div className="flex items-start gap-4">
                   <Clock className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                   <div>
                      <h4 className="text-brand-accent text-sm font-medium mb-1">Working Hours</h4>
                      <p className="text-white text-sm font-semibold">Mon to Sat - 12 am to 12 pm</p>
                      <p className="text-brand-muted text-sm">Sunday - 11 am to 5 pm</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};