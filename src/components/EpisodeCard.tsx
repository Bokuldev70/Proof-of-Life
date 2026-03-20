import React from 'react';
import { PlayCircle, Clock, Calendar } from 'lucide-react';
import { cn } from '../utils';

export interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  imageUrl: string;
  listenLink: string;
}

interface EpisodeCardProps {
  key?: React.Key;
  episode: Episode;
  className?: string;
  featured?: boolean;
}

export function EpisodeCard({ episode, className, featured = false }: EpisodeCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col md:flex-row bg-cream border-4 border-navy overflow-hidden transition-all duration-300",
        featured ? "shadow-[12px_12px_0px_0px_rgba(26,43,60,1)] hover:shadow-[8px_8px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[4px] hover:translate-y-[4px]" : "shadow-[8px_8px_0px_0px_rgba(26,43,60,1)] hover:shadow-[4px_4px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[4px] hover:translate-y-[4px]",
        className
      )}
    >
      {/* Image Container */}
      <div className={cn("relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-navy", featured ? "md:w-1/2" : "md:w-1/3")}>
        <div className="absolute inset-0 bg-pink/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
        <img
          src={episode.imageUrl}
          alt={episode.title}
          className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {featured && (
          <div className="absolute top-4 left-4 z-20 bg-yellow text-navy px-4 py-1 font-bold uppercase tracking-widest text-xs border-2 border-navy shadow-[2px_2px_0px_0px_rgba(26,43,60,1)]">
            Latest Episode
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className={cn("flex flex-col justify-between p-6 md:p-8", featured ? "md:w-1/2" : "md:w-2/3")}>
        <div>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-teal mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {episode.date}
            </span>
            <span className="flex items-center gap-1 text-pink">
              <Clock className="w-4 h-4" />
              {episode.duration}
            </span>
          </div>

          <h3 className={cn("font-serif font-bold text-navy mb-4 leading-tight group-hover:text-tomato transition-colors", featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl")}>
            {episode.title}
          </h3>

          <p className="text-navy/80 font-medium leading-relaxed mb-8 line-clamp-3">
            {episode.description}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={episode.listenLink}
            className="inline-flex items-center justify-center gap-2 bg-tomato text-cream px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-pink transition-colors border-2 border-navy shadow-[4px_4px_0px_0px_rgba(26,43,60,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
          >
            <PlayCircle className="w-5 h-5" />
            Listen Now
          </a>
        </div>
      </div>
    </article>
  );
}
