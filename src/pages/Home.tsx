import React from 'react';
import { Link } from 'react-router-dom';
import { EpisodeCard, type Episode } from '../components/EpisodeCard';
import { ArrowRight, Headphones, Heart, Sparkles } from 'lucide-react';

const LATEST_EPISODE: Episode = {
  id: '1',
  title: 'Ep 12: The Myth of "Having It All" (And Other Lies We Tell Ourselves)',
  description: 'This week, we\'re diving deep into the delusion of balance. Between running businesses, raising humans, and trying to keep our marriages spicy, something has to give. Spoiler alert: it\'s usually our sanity. Join us for a completely unfiltered conversation about dropping the ball and why we\'re finally okay with it.',
  date: 'Oct 24, 2026',
  duration: '45 min',
  imageUrl: 'https://picsum.photos/seed/podcast1/800/600',
  listenLink: '#listen',
};

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden border-b-8 border-navy">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] opacity-5 mix-blend-multiply pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="flex flex-col items-start space-y-8">
              <div className="inline-flex items-center gap-2 bg-yellow border-2 border-navy px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(26,43,60,1)]">
                <Sparkles className="w-4 h-4 text-navy" />
                <span className="text-navy font-bold uppercase tracking-widest text-xs">New Episode Every Tuesday</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-black text-navy leading-[1.1] tracking-tight">
                Two Delusional Besties <span className="text-tomato italic">Telling Each Other Exactly.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-navy/80 font-medium max-w-xl leading-relaxed">
                A podcast about motherhood, life, entrepreneurship, and marriage. Served with authenticity, humor, and strong best-friend energy.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#listen"
                  className="inline-flex items-center justify-center gap-2 bg-tomato text-cream px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-pink transition-colors border-2 border-navy shadow-[6px_6px_0px_0px_rgba(26,43,60,1)] hover:shadow-[3px_3px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
                >
                  <Headphones className="w-5 h-5" />
                  Start Listening
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-cream text-navy px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-yellow transition-colors border-2 border-navy shadow-[6px_6px_0px_0px_rgba(26,43,60,1)] hover:shadow-[3px_3px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
                >
                  Meet the Hosts
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <div className="absolute inset-0 bg-teal rounded-full transform translate-x-6 translate-y-6 border-4 border-navy"></div>
              <div className="absolute inset-0 bg-pink rounded-full transform -translate-x-4 -translate-y-4 border-4 border-navy"></div>
              <img
                src="https://picsum.photos/seed/besties/800/800"
                alt="Two best friends laughing together"
                className="relative z-10 w-full aspect-square object-cover rounded-full border-4 border-navy shadow-[12px_12px_0px_0px_rgba(26,43,60,1)]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 z-20 bg-yellow border-4 border-navy rounded-full w-32 h-32 flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(26,43,60,1)] transform rotate-12 animate-bounce-slow">
                <div className="text-center">
                  <span className="block text-3xl font-serif font-black text-tomato leading-none">43</span>
                  <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-navy leading-tight mt-1">Years<br/>Young</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Episode Section */}
      <section className="bg-teal py-24 border-b-8 border-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDIwaDQwdjIwSDB6IiBmaWxsPSIjMUEyQjNDIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-cream mb-4 drop-shadow-[4px_4px_0px_rgba(26,43,60,1)]">
                Fresh Out The Oven
              </h2>
              <p className="text-navy font-bold uppercase tracking-widest text-sm">
                Our latest delusional conversation
              </p>
            </div>
            <Link
              to="/episodes"
              className="inline-flex items-center gap-2 text-navy font-bold uppercase tracking-widest text-sm hover:text-cream transition-colors group"
            >
              View All Episodes
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <EpisodeCard episode={LATEST_EPISODE} featured={true} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-pink py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Heart className="w-16 h-16 text-cream mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-serif font-black text-navy mb-6 leading-tight">
            Join the Delusion
          </h2>
          <p className="text-xl text-cream font-medium mb-12 max-w-2xl mx-auto">
            Get our weekly newsletter filled with unfiltered thoughts, behind-the-scenes chaos, and things we're currently obsessing over.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-cream border-4 border-navy px-6 py-4 text-navy font-medium placeholder-navy/50 focus:outline-none focus:ring-4 focus:ring-yellow shadow-[6px_6px_0px_0px_rgba(26,43,60,1)]"
              required
            />
            <button
              type="submit"
              className="bg-yellow text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-cream transition-colors border-4 border-navy shadow-[6px_6px_0px_0px_rgba(26,43,60,1)] hover:shadow-[3px_3px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
