'use client';

import React from 'react';
import Image from 'next/image';
import { FEATURED_DESTINATIONS } from '@/data/sampleTrips';
import { FeaturedDestination } from '@/types/trip';
import { Clock, DollarSign, MapPin, ArrowRight, Sparkles } from 'lucide-react';

interface DestinationGridProps {
  onSelectDestination: (dest: FeaturedDestination) => void;
  onQuickLoadSample: (id: string) => void;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({
  onSelectDestination,
  onQuickLoadSample,
}) => {
  return (
    <section id="destinations-section" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Trending Destinations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Handcrafted Getaways
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl text-sm sm:text-base">
              Select any destination to instantly populate the travel planner form or test pre-built sample itineraries.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Interactive Sample Data Included</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-slate-200/80"
            >
              {/* Image banner with overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-300" />
                    {dest.recommendedDays} Days
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-md capitalize flex items-center gap-0.5">
                    <DollarSign className="w-3 h-3 text-emerald-300" />
                    {dest.typicalBudget}
                  </span>
                </div>

                {/* Best Season */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/90 text-slate-800 shadow-sm backdrop-blur-md">
                    {dest.bestSeason}
                  </span>
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-bold tracking-tight">{dest.name}</h3>
                  <p className="text-xs text-slate-200 mt-0.5">{dest.country}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {dest.tagline}
                </p>

                {/* Tag Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Use in Planner</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition" />
                  </button>

                  {(dest.id === 'kyoto-japan' || dest.id === 'bali-indonesia') && (
                    <button
                      onClick={() => onQuickLoadSample(dest.id)}
                      title="Load complete sample itinerary instantly"
                      className="py-2.5 px-3 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-800 font-medium text-xs sm:text-sm transition flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Preview</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
