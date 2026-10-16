'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, Bookmark, Menu, X, Plane } from 'lucide-react';

interface NavbarProps {
  onPlanTripClick: () => void;
  onExploreClick: () => void;
  onSampleClick: () => void;
  onRoadmapClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPlanTripClick,
  onExploreClick,
  onSampleClick,
  onRoadmapClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-indigo-700 bg-clip-text text-transparent">
                WanderAI
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">
                Trip Planner
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={onExploreClick}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-sky-500" />
              Destinations
            </button>
            <button
              onClick={onSampleClick}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Sample Itineraries
            </button>
            <button
              onClick={onRoadmapClick}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition flex items-center gap-1.5"
            >
              <Bookmark className="w-4 h-4 text-indigo-500" />
              Tech Architecture
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onPlanTripClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              <Plane className="w-4 h-4" />
              Plan My Trip
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <button
            onClick={() => {
              onExploreClick();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-sky-50 flex items-center gap-3"
          >
            <MapPin className="w-5 h-5 text-sky-500" />
            Featured Destinations
          </button>
          <button
            onClick={() => {
              onSampleClick();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-sky-50 flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            Sample Itineraries
          </button>
          <button
            onClick={() => {
              onRoadmapClick();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-sky-50 flex items-center gap-3"
          >
            <Bookmark className="w-5 h-5 text-indigo-500" />
            Tech Architecture & Next Steps
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                onPlanTripClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-center shadow-md flex items-center justify-center gap-2"
            >
              <Plane className="w-5 h-5" />
              Plan My Trip
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
