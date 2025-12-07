import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { SKILLS, WEEKLY_STATS } from '../constants';

const ContributionGrid = () => {
    // Generate a mock contribution grid
    const weeks = 52;
    const days = 7;
    const grid = [];
    
    for(let i=0; i<weeks * days; i++) {
        const level = Math.random() > 0.7 ? (Math.random() > 0.5 ? 2 : 1) : 0;
        let color = 'bg-white/5';
        if (level === 1) color = 'bg-brand-accent/40';
        if (level === 2) color = 'bg-brand-accent';
        
        grid.push(
            <div key={i} className={`w-3 h-3 rounded-sm ${color}`}></div>
        );
    }

    return (
        <div className="flex flex-wrap gap-1 justify-center opacity-80 max-w-4xl mx-auto mt-8">
            {grid}
        </div>
    )
}

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex items-end gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-400 to-blue-600"></div>
          <div>
             <h2 className="text-2xl font-bold text-white">Weekly Coding Stats</h2>
             <p className="text-brand-muted text-sm">My estimated activity based on commits and work logs.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {WEEKLY_STATS.map((stat, idx) => (
                <div key={idx} className="bg-brand-card p-4 rounded-xl border border-white/5">
                    <p className="text-xs text-brand-muted uppercase tracking-wide mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                </div>
            ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Languages Bar Chart */}
            <div className="bg-brand-card p-6 rounded-xl border border-white/5">
                <h3 className="text-white font-semibold mb-6">Languages</h3>
                <div className="space-y-4">
                    {SKILLS.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-brand-text">{skill.name}</span>
                                <span className="text-brand-muted">{skill.percentage}%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div 
                                    className="h-2 rounded-full" 
                                    style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* Categories */}
             <div className="bg-brand-card p-6 rounded-xl border border-white/5">
                <h3 className="text-white font-semibold mb-6">Activity Categories</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-brand-text">Coding</span>
                            <span className="text-brand-muted">90%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="h-2 rounded-full bg-blue-500 w-[90%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-brand-text">Code Review / Debugging</span>
                            <span className="text-brand-muted">10%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="h-2 rounded-full bg-purple-500 w-[10%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Contribution Graph */}
        <div className="mt-12">
             <div className="flex items-center gap-2 mb-6">
                <div className="text-2xl font-bold text-white">GitHub Contributions</div>
             </div>
             <div className="bg-brand-card p-6 rounded-xl border border-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-3xl font-bold text-brand-accent">3,920</span>
                        <span className="text-brand-muted text-sm ml-2">contributions in the last year</span>
                    </div>
                </div>
                <ContributionGrid />
                <div className="flex justify-end items-center gap-2 mt-4 text-xs text-brand-muted">
                    <span>Less</span>
                    <div className="w-3 h-3 bg-white/5 rounded-sm"></div>
                    <div className="w-3 h-3 bg-brand-accent/40 rounded-sm"></div>
                    <div className="w-3 h-3 bg-brand-accent rounded-sm"></div>
                    <span>More</span>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};
