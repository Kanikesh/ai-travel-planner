'use client';

import React from 'react';
import { Compass, Heart, Github, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">WanderAI</span>
              <p className="text-xs text-slate-500">Intelligent Day-by-Day Travel Architect</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>OpenAI Ready</span>
            <span>•</span>
            <span>Google Maps Ready</span>
            <span>•</span>
            <span>MongoDB Ready</span>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1">
            <span>Built with care for effortless travel planning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
