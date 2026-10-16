'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Itinerary, DayPlan } from '@/types/trip';
import {
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  Sparkles,
  Share2,
  Bookmark,
  CheckCircle,
  SunMedium,
  Luggage,
  Info,
  Utensils,
  ChevronRight,
  ExternalLink,
  Compass,
  Star,
  Layers,
  ArrowLeft
} from 'lucide-react';

interface ItineraryViewProps {
  itinerary: Itinerary;
  onReset: () => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({
  itinerary,
  onReset,
}) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [savedNotification, setSavedNotification] = useState(false);
  const [selectedMapPin, setSelectedMapPin] = useState<number | null>(0);

  const activeDay: DayPlan | undefined = itinerary.days[activeDayIndex] || itinerary.days[0];

  const handleSaveDemo = () => {
    setSavedNotification(true);
    setTimeout(() => {
      setSavedNotification(false);
    }, 4000);
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Food':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Culinary':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Culture':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Nature':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Adventure':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Relaxation':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Nightlife':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Beaches':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'Shopping':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Photography':
        return 'bg-violet-100 text-violet-800 border-violet-200';
      default:
        return 'bg-sky-100 text-sky-800 border-sky-200';
    }
  };

  return (
    <section id="itinerary-result" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Status bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-sky-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Plan Another Trip / Edit Preferences</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Sample vs Real AI data indicator badge */}
            {itinerary.isSampleData ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Sample Itinerary Loaded</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Real AI Itinerary (OpenAI)</span>
              </span>
            )}

            {/* Save Trip Button (Mock MongoDB Integration) */}
            <button
              onClick={handleSaveDemo}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition flex items-center gap-2 shadow-sm"
            >
              <Bookmark className="w-4 h-4 text-sky-400" />
              <span>Save Trip</span>
            </button>
          </div>
        </div>

        {/* MongoDB Mock Toast */}
        {savedNotification && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm flex items-start gap-3 shadow-md animate-in slide-in-from-top-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Trip Saved! (MongoDB Atlas Simulation)</p>
              <p className="text-xs text-emerald-700 mt-0.5">
                In Phase 2, this will persist the document directly into your MongoDB Atlas <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">trips</code> collection using Mongoose.
              </p>
            </div>
          </div>
        )}

        {/* Hero Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-10 border border-slate-200">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src={itinerary.heroImage}
              alt={itinerary.tripTitle}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/90 backdrop-blur-md">
                {itinerary.durationDays} Days Itinerary
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md capitalize">
                {itinerary.budgetCategory} Budget
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md capitalize">
                For {itinerary.companion}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              {itinerary.tripTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-3xl line-clamp-3">
              {itinerary.summary}
            </p>
          </div>
        </div>

        {/* 3-Column Info Cards (Budget, Weather, Essentials) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Estimated Budget Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-2">
                <DollarSign className="w-5 h-5" />
                <span>Estimated Budget Breakdown</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                {itinerary.estimatedCost.totalRange}
              </div>
              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Accommodation:</span>
                  <span className="font-semibold text-slate-800 text-right">{itinerary.estimatedCost.breakdown.accommodation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Food & Dining:</span>
                  <span className="font-semibold text-slate-800 text-right">{itinerary.estimatedCost.breakdown.food}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Activities:</span>
                  <span className="font-semibold text-slate-800 text-right">{itinerary.estimatedCost.breakdown.activities}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Transport:</span>
                  <span className="font-semibold text-slate-800 text-right">{itinerary.estimatedCost.breakdown.transportation}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              *Estimates based on current travel averages
            </div>
          </div>

          {/* Weather & Best Practices */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-2">
              <SunMedium className="w-5 h-5" />
              <span>Weather & Conditions</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              {itinerary.weatherAdvice}
            </p>
            <div className="border-t border-slate-100 pt-3">
              <div className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-sky-500" />
                <span>Key Travel Tips</span>
              </div>
              <ul className="space-y-1.5">
                {itinerary.travelTips.map((tip, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Packing Essentials */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-2">
              <Luggage className="w-5 h-5" />
              <span>Recommended Packing List</span>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              Items tailored specifically for this destination and season:
            </p>
            <ul className="space-y-2">
              {itinerary.packingEssentials.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Day-by-Day Interactive Schedule */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
                <Calendar className="w-4 h-4" />
                <span>Day-by-Day Itinerary</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Detailed Activity Timeline
              </h2>
            </div>

            {/* Day Selector Navigation Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 max-w-full">
              {itinerary.days.map((day, idx) => (
                <button
                  key={day.dayNumber}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    activeDayIndex === idx
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  Day {day.dayNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Active Day Content */}
          {activeDay && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-800">
                  Day {activeDay.dayNumber} Theme
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  {activeDay.theme}
                </h3>
              </div>

              {/* Time Blocks (Morning, Afternoon, Evening) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Morning Block */}
                <div className="rounded-2xl p-5 border border-slate-200/80 bg-gradient-to-b from-sky-50/40 to-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Morning ({activeDay.morning.time})
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${getTagColor(activeDay.morning.tag)}`}>
                        {activeDay.morning.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {activeDay.morning.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      {activeDay.morning.location}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {activeDay.morning.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-100 text-xs text-sky-900">
                    <span className="font-bold">✨ Top Highlight:</span> {activeDay.morning.highlight}
                  </div>
                </div>

                {/* Afternoon Block */}
                <div className="rounded-2xl p-5 border border-slate-200/80 bg-gradient-to-b from-indigo-50/40 to-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Afternoon ({activeDay.afternoon.time})
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${getTagColor(activeDay.afternoon.tag)}`}>
                        {activeDay.afternoon.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {activeDay.afternoon.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                      {activeDay.afternoon.location}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {activeDay.afternoon.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-100 text-xs text-indigo-900">
                    <span className="font-bold">✨ Top Highlight:</span> {activeDay.afternoon.highlight}
                  </div>
                </div>

                {/* Evening Block */}
                <div className="rounded-2xl p-5 border border-slate-200/80 bg-gradient-to-b from-purple-50/40 to-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Evening ({activeDay.evening.time})
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${getTagColor(activeDay.evening.tag)}`}>
                        {activeDay.evening.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {activeDay.evening.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                      {activeDay.evening.location}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {activeDay.evening.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-100 text-xs text-purple-900">
                    <span className="font-bold">✨ Top Highlight:</span> {activeDay.evening.highlight}
                  </div>
                </div>
              </div>

              {/* Recommended Culinary Experience of the Day */}
              <div className="mt-6 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      Day {activeDay.dayNumber} Must-Try Local Cuisine
                    </div>
                    <div className="font-bold text-slate-900 text-base">
                      {activeDay.recommendedDish.name}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      {activeDay.recommendedDish.description}
                    </div>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-medium text-amber-900 whitespace-nowrap">
                  📍 Recommended Spot: <span className="font-bold">{activeDay.recommendedDish.bestSpot}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Google Maps Integration Preview Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                <MapPin className="w-4 h-4" />
                <span>Google Maps API Integration Ready</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Interactive Attractions & Geo Coordinates
              </h3>
            </div>
            <div className="text-xs font-medium px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Map Coordinates Ready for Next Step</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Simulator Canvas */}
            <div className="lg:col-span-2 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 shadow-inner flex flex-col justify-between p-4">
              {/* Simulated Map Styling */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-mono flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-sky-400" />
                  <span>Map Target: {itinerary.destination}</span>
                </div>
                <span className="text-[11px] font-mono text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800">
                  Google Maps JavaScript SDK Component Slot
                </span>
              </div>

              {/* Simulated Markers on Map */}
              <div className="relative z-10 my-auto flex flex-wrap items-center justify-center gap-4 py-8">
                {itinerary.attractionPins.map((pin, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMapPin(idx)}
                    className={`group/pin flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 transform ${
                      selectedMapPin === idx
                        ? 'bg-rose-500 text-white scale-110 shadow-lg shadow-rose-500/50 ring-4 ring-rose-400/30'
                        : 'bg-white/90 hover:bg-white text-slate-900 scale-100 hover:scale-105 shadow-md'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${selectedMapPin === idx ? 'text-white' : 'text-rose-600'}`} />
                    <span className="text-xs font-bold">{pin.name}</span>
                    <span className="text-[10px] opacity-75">★ {pin.rating}</span>
                  </button>
                ))}
              </div>

              <div className="relative z-10 flex items-center justify-between text-slate-400 text-xs">
                <span>Coordinates: {itinerary.attractionPins[0]?.lat.toFixed(4)}, {itinerary.attractionPins[0]?.lng.toFixed(4)}</span>
                <span>Zoom Level: 12x</span>
              </div>
            </div>

            {/* Attractions List Sidebar */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Curated Attractions ({itinerary.attractionPins.length} Places)
              </h4>
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {itinerary.attractionPins.map((pin, idx) => {
                  const isSelected = selectedMapPin === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedMapPin(idx)}
                      className={`cursor-pointer p-3 rounded-xl border transition ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50 shadow-sm ring-1 ring-sky-500'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{pin.name}</span>
                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          {pin.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                        <span>{pin.category}</span>
                        <span className="font-mono text-[10px]">({pin.lat.toFixed(3)}, {pin.lng.toFixed(3)})</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
