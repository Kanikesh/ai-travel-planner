import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WanderAI - AI Travel Planner & Itinerary Generator',
  description: 'Generate customized day-by-day travel itineraries in seconds with AI, curated attractions, local dining, and budget estimations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
