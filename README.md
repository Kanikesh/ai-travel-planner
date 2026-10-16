# 🌍 WanderAI - AI Travel Planner

A modern, responsive travel planning web application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Live Local Server
The development server is running at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Status |
|---|---|---|
| **Frontend Framework** | Next.js 14 (App Router) | ✅ Complete & Running |
| **Language** | TypeScript | ✅ Strictly typed |
| **Styling** | Tailwind CSS & Glassmorphism | ✅ Responsive & Polished |
| **Icons** | Lucide React | ✅ Integrated |
| **AI Itinerary Engine** | OpenAI API (GPT-4o / GPT-3.5) | ⏳ Next Step (Mock Active) |
| **Maps & Attractions** | Google Maps JavaScript API | ⏳ Next Step (Preview Active) |
| **Database** | MongoDB Atlas with Mongoose | ⏳ Next Step (Schema Ready) |

---

## 📁 Project Structure

```
ai-trip-planner/
├── .env.example                # Template for OpenAI, Google Maps & MongoDB keys
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # TypeScript path alias (@/*) and configuration
├── tailwind.config.ts          # Custom colors, travel gradients, and breakpoints
├── postcss.config.mjs          # PostCSS configuration
├── next.config.mjs             # Next.js settings (Unsplash image domain support)
└── src/
    ├── app/
    │   ├── globals.css         # Tailwind directives and custom scrollbars
    │   ├── layout.tsx          # Root layout with fonts & metadata
    │   └── page.tsx            # Main page uniting hero, form, & itinerary view
    ├── components/
    │   ├── Navbar.tsx          # Responsive navigation bar with mobile drawer
    │   ├── HeroSection.tsx     # Hero banner with quick-action CTA buttons
    │   ├── DestinationGrid.tsx # Trending destination cards (Kyoto, Paris, Bali, etc.)
    │   ├── TripForm.tsx        # Budget, days, companion, interests & generate button
    │   ├── ItineraryView.tsx   # Day-by-day plan, budget breakdown, & map preview
    │   ├── TechStackRoadmap.tsx# Beginner guide explaining how APIs will connect
    │   └── Footer.tsx          # Brand footer with tech stack indicators
    ├── data/
    │   └── sampleTrips.ts      # Rich, realistic sample itineraries for testing
    └── types/
        └── trip.ts             # TypeScript interfaces for trips, days, and places
```

---

## 🧪 Testing the Frontend with Sample Data

1. **Browse Featured Destinations**: Click "Use in Planner" on any destination card (Kyoto, Bali, Paris, Rome, Swiss Alps) to auto-fill the form.
2. **Instant Sample Preview**: Click **"Preview"** or **"Test with Sample Data (Kyoto)"** to immediately inspect a 7-day schedule with morning/afternoon/evening activities and dining suggestions.
3. **Customize Preferences**: Adjust trip duration (1-14 days), budget tier (Budget, Moderate, Luxury), travel companions, and vibe interests.
4. **Hit "Generate My Trip Itinerary"**: Watch the simulated AI generation synthesize your customized schedule.
5. **Interactive Map Simulator**: Explore attraction pins, coordinates, and ratings designed for Google Maps integration.
