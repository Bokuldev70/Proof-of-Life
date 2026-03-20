import React from 'react';
import { EpisodeCard, type Episode } from '../components/EpisodeCard';

const EPISODES: Episode[] = [
  {
    id: '12',
    title: 'Ep 12: The Myth of "Having It All" (And Other Lies We Tell Ourselves)',
    description: 'This week, we\'re diving deep into the delusion of balance. Between running businesses, raising humans, and trying to keep our marriages spicy, something has to give. Spoiler alert: it\'s usually our sanity. Join us for a completely unfiltered conversation about dropping the ball and why we\'re finally okay with it.',
    date: 'Oct 24, 2026',
    duration: '45 min',
    imageUrl: 'https://picsum.photos/seed/podcast12/800/600',
    listenLink: '#listen-12',
  },
  {
    id: '11',
    title: 'Ep 11: Why We Stopped Caring About Being "Nice"',
    description: 'There\'s a difference between being kind and being nice, and at 43, we\'re officially done with the latter. We discuss the exhaustion of people-pleasing, setting boundaries that actually stick, and the liberating feeling of saying "no" without an explanation.',
    date: 'Oct 17, 2026',
    duration: '52 min',
    imageUrl: 'https://picsum.photos/seed/podcast11/800/600',
    listenLink: '#listen-11',
  },
  {
    id: '10',
    title: 'Ep 10: Marriage After 15 Years: The Good, The Bad, and The Boring',
    description: 'Let\'s talk about the reality of long-term marriage. It\'s not all fireworks and romance; sometimes it\'s just arguing over who loaded the dishwasher wrong. We share our biggest relationship hurdles, how we keep the spark alive (sometimes), and why "boring" is actually a compliment.',
    date: 'Oct 10, 2026',
    duration: '48 min',
    imageUrl: 'https://picsum.photos/seed/podcast10/800/600',
    listenLink: '#listen-10',
  },
  {
    id: '9',
    title: 'Ep 09: Entrepreneurship Is Just Expensive Therapy',
    description: 'Running a business is glamorous until you\'re crying over a spreadsheet at 2 AM. We unpack the highs and lows of being female founders, the imposter syndrome that never really goes away, and why we keep doing it anyway.',
    date: 'Oct 03, 2026',
    duration: '55 min',
    imageUrl: 'https://picsum.photos/seed/podcast9/800/600',
    listenLink: '#listen-9',
  },
  {
    id: '8',
    title: 'Ep 08: Raising Teenagers When You Still Feel Like One',
    description: 'How are we supposed to guide these hormonal humans when we still don\'t know what we want to be when we grow up? A hilarious and terrifying look at parenting teens, setting rules we don\'t even understand, and the fear of them finding our old MySpace pages.',
    date: 'Sep 26, 2026',
    duration: '42 min',
    imageUrl: 'https://picsum.photos/seed/podcast8/800/600',
    listenLink: '#listen-8',
  },
];

export function Episodes() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Header Section */}
      <section className="bg-pink py-24 border-b-8 border-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDIwaDQwdjIwSDB6IiBmaWxsPSIjMUEyQjNDIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-navy mb-8 leading-tight drop-shadow-[4px_4px_0px_rgba(242,208,107,1)]">
            The Archives
          </h1>
          <p className="text-xl md:text-2xl text-cream font-medium max-w-2xl mx-auto leading-relaxed">
            Every unfiltered conversation, every delusional thought, every moment we probably should have edited out.
          </p>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-12">
          {EPISODES.map((episode, index) => (
            <EpisodeCard 
              key={episode.id} 
              episode={episode} 
              featured={index === 0} 
            />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="bg-cream text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow transition-colors border-4 border-navy shadow-[6px_6px_0px_0px_rgba(26,43,60,1)] hover:shadow-[3px_3px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px]">
            Load Older Episodes
          </button>
        </div>
      </section>
    </div>
  );
}
