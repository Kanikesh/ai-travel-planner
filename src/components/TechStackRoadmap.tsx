'use client';

import React from 'react';
import { Sparkles, MapPin, Database, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const TechStackRoadmap: React.FC = () => {
  const steps = [
    {
      phase: 'Step 1 (Completed Now)',
      title: 'Modern Frontend & Interactive UI',
      icon: Cpu,
      color: 'sky',
      badge: 'Active & Interactive',
      description: 'Next.js 14 App Router, TypeScript, Tailwind CSS, responsive cards, destination selection, and mock itinerary generator.',
      status: 'complete'
    },
    {
      phase: 'Step 2 (Active Now)',
      title: 'OpenAI API Integration',
      icon: Sparkles,
      color: 'amber',
      badge: 'Integrated & Active',
      description: 'Connected GPT models via Next.js server route (/api/generate-trip) with strict JSON output matching our TypeScript Itinerary interface.',
      status: 'complete'
    },
    {
      phase: 'Step 3 (Next)',
      title: 'Google Maps & Places API',
      icon: MapPin,
      color: 'emerald',
      badge: 'Slot Prepared',
      description: 'Embed Google Maps JavaScript SDK, plot attraction markers dynamically, fetch place photos, user ratings, and route walking distances.',
      status: 'upcoming'
    },
    {
      phase: 'Step 4 (Next)',
      title: 'MongoDB Atlas Database',
      icon: Database,
      color: 'indigo',
      badge: 'Schema Designed',
      description: 'Store and retrieve user-saved trips, shareable trip URLs, and favorite travel plans using Mongoose schemas on MongoDB Atlas cloud.',
      status: 'upcoming'
    }
  ];

  return (
    <section id="tech-architecture" className="py-12 sm:py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How WanderAI Comes to Life
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            We follow a clean step-by-step engineering roadmap. The complete responsive frontend is ready now, designed seamlessly for easy API wiring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  step.status === 'complete'
                    ? 'bg-slate-800/90 border-sky-500/50 shadow-lg shadow-sky-500/10'
                    : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      step.status === 'complete' ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      step.status === 'complete'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'bg-slate-700 text-slate-400'
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider block mb-1">
                    {step.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center gap-1.5 text-xs">
                  {step.status === 'complete' ? (
                    <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Ready & Tested
                    </span>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5" /> Next Integration
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
