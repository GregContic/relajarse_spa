import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Calendar } from "lucide-react";
import * as React from "react";

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRipple = (e: any) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.className = 'ripple-effect';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" role="region" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBpbnRlcmlvciUyMHdlbGxuZXNzfGVufDF8fHx8MTc1NjEwNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury spa interior"
          className="w-full h-full object-cover"
        />
  {/* gradient overlay for better contrast (reduced blur for clearer image) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/28" aria-hidden />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fadeInUp will-change-transform" style={{ animationDelay: '120ms' }}>
  <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-7xl mb-6 tracking-wide leading-tight font-heading lux-hero">
          Escape to Serenity
        </h1>
  <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-body lux-sub">
          Indulge in the ultimate wellness experience with our luxury spa treatments designed to rejuvenate your mind, body, and soul.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={(e) => { handleRipple(e); scrollTo('#contact'); }}
            className="ripple min-w-[220px] bg-primary text-offwhite px-8 py-4 rounded-md shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-3"
            aria-label="Book an appointment"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            onClick={(e) => { handleRipple(e); scrollTo('#services'); }}
            className="ripple min-w-[220px] px-8 py-4 rounded-md glass-medium text-white hover:brightness-105 transition flex items-center justify-center gap-3"
            aria-label="View our services"
          >
            <span>View Services</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}