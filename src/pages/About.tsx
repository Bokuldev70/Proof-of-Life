import React from 'react';
import { Sparkles, Coffee, Wine, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Header Section */}
      <section className="bg-yellow py-24 md:py-32 border-b-8 border-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDIwaDQwdjIwSDB6IiBmaWxsPSIjMUEyQjNDIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-navy mb-8 leading-tight drop-shadow-[4px_4px_0px_rgba(224,77,54,1)]">
            Meet the Delusionals
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 font-medium max-w-2xl mx-auto leading-relaxed">
            We're 43, we're tired, we're thriving, and we have absolutely no idea what we're doing. But we're doing it together.
          </p>
        </div>
      </section>

      {/* Host Profiles */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Host 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-12 w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-pink rounded-full transform translate-x-4 translate-y-4 border-4 border-navy transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img
                src="https://picsum.photos/seed/host1/600/600"
                alt="Host 1"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-navy shadow-[8px_8px_0px_0px_rgba(26,43,60,1)] grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 z-20 bg-cream border-4 border-navy rounded-full p-4 shadow-[4px_4px_0px_0px_rgba(26,43,60,1)] transform rotate-12">
                <Coffee className="w-8 h-8 text-tomato" />
              </div>
            </div>
            
            <h2 className="text-4xl font-serif font-black text-navy mb-4">Sarah</h2>
            <p className="text-tomato font-bold uppercase tracking-widest text-sm mb-6">The "Planner"</p>
            
            <p className="text-navy/80 font-medium leading-relaxed max-w-md mb-8">
              Sarah is a recovering perfectionist who still color-codes her calendar but has accepted that her house will never look like a Pinterest board. She runs a creative agency, has three kids who think she's deeply uncool, and believes iced coffee is a personality trait.
            </p>
            
            <div className="bg-cream border-2 border-navy p-6 shadow-[4px_4px_0px_0px_rgba(26,43,60,1)] w-full max-w-md text-left">
              <h3 className="font-bold uppercase tracking-widest text-xs text-teal mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Current Obsessions
              </h3>
              <ul className="space-y-2 text-sm font-medium text-navy/80">
                <li>• Expensive skincare that probably does nothing</li>
                <li>• Avoiding group chats</li>
                <li>• Buying books she'll never read</li>
              </ul>
            </div>
          </div>

          {/* Host 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-12 w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-teal rounded-full transform -translate-x-4 translate-y-4 border-4 border-navy transition-transform group-hover:-translate-x-6 group-hover:translate-y-6"></div>
              <img
                src="https://picsum.photos/seed/host2/600/600"
                alt="Host 2"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-navy shadow-[8px_8px_0px_0px_rgba(26,43,60,1)] grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-cream border-4 border-navy rounded-full p-4 shadow-[4px_4px_0px_0px_rgba(26,43,60,1)] transform -rotate-12">
                <Wine className="w-8 h-8 text-pink" />
              </div>
            </div>
            
            <h2 className="text-4xl font-serif font-black text-navy mb-4">Jessica</h2>
            <p className="text-pink font-bold uppercase tracking-widest text-sm mb-6">The "Chaos Coordinator"</p>
            
            <p className="text-navy/80 font-medium leading-relaxed max-w-md mb-8">
              Jessica thrives in the mess. She's a serial entrepreneur who starts a new business every time she gets bored. She has two teenagers, a husband who is very patient, and a dog that runs the household. She believes everything can be solved with a good cry and a better glass of wine.
            </p>
            
            <div className="bg-cream border-2 border-navy p-6 shadow-[4px_4px_0px_0px_rgba(26,43,60,1)] w-full max-w-md text-left">
              <h3 className="font-bold uppercase tracking-widest text-xs text-tomato mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4" /> Current Obsessions
              </h3>
              <ul className="space-y-2 text-sm font-medium text-navy/80">
                <li>• Reality TV drama</li>
                <li>• Over-committing to DIY projects</li>
                <li>• Finding the perfect red lipstick</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-navy text-cream py-24 border-t-8 border-pink relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 text-yellow">
            How It Started
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto text-left">
            <p>
              We met in the trenches of early motherhood, bonding over the shared realization that nobody actually knows what they're doing. We spent hours sitting in parked cars while babies slept, dissecting our marriages, our careers, and our fading youth.
            </p>
            <p>
              Fast forward fifteen years. We're 43. We've built businesses, raised kids, navigated marriage slumps, and survived a global pandemic. And we realized the conversations we were having—the raw, unfiltered, sometimes delusional ones—were the exact conversations other women our age were desperate for.
            </p>
            <p>
              So we bought some microphones. We didn't know how to edit audio, we didn't have a studio, but we had a lot to say. <strong className="text-pink">Proof of Life</strong> is our weekly check-in. It's us telling each other exactly what's going on, and inviting you to listen in.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
