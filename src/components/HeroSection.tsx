'use client';

import React from 'react';
import { Sparkles, ArrowDown, MapPin, ShieldCheck, DollarSign, Compass, Star } from 'lucide-react';

interface HeroSectionProps {
  onStartPlanning: () => void;
  onLoadSample: (key: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPlanning,
  onLoadSample,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative blurred background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-300/30 via-indigo-200/30 to-teal-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs sm:text-sm font-medium mb-6 shadow-sm hover:bg-sky-100/80 transition cursor-default">
          <Sparkles className="w-4 h-4 text-sky-500" />
          <span>Next-Gen Travel AI • Instant Day-by-Day Itineraries</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span className="hidden sm:inline-block text-sky-600 font-semibold">Ready to Customize</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
          Your Personal <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">AI Travel Architect</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Skip hours of frustrating research. Tell us your destination, budget, and travel vibe—we craft an optimized, day-by-day vacation schedule complete with attractions, local culinary spots, and budget breakdowns.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartPlanning}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-600 text-white font-semibold text-base shadow-xl shadow-sky-500/25 hover:shadow-2xl hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Build Your Trip Now</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
          </button>

          <button
            onClick={() => onLoadSample('rajasthan-india')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white border border-amber-300 text-slate-800 font-semibold text-base shadow-sm hover:bg-amber-50 hover:border-amber-400 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Preview Rajasthan, India</span>
          </button>
        </div>

        {/* Feature Badges Grid */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/60 border border-slate-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-2">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-800">Smart Scheduling</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Morning to night flows</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/60 border border-slate-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
              <DollarSign className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-800">Cost Transparency</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Detailed budget ranges</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/60 border border-slate-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-800">Maps Integration</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Attraction geo-coordinates</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/60 border border-slate-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
              <Star className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-800">Local Food Gems</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Must-try dishes & spots</span>
          </div>
        </div>
      </div>
    </section>
  );
};
