import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Calendar } from "lucide-react";
import * as React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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

  const { ref, inView } = useScrollReveal();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" role="region" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/assets/hero-bg.jpg"
            alt="Elegant massage table with towels"
            className="w-full h-full object-cover"
          />
  {/* stronger gradient overlay for better contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/6 to-black/70" aria-hidden />
      </div>
      
    <div ref={ref as any} className={`relative z-10 max-w-4xl mx-auto px-4 will-change-transform reveal ${inView ? 'is-revealed' : ''}`} style={{ animationDelay: '120ms' }}>
  <div className="mx-4 sm:mx-0 text-center liquid-glass px-6 py-6 sm:px-10 sm:py-8 relative">
  <div aria-hidden className="absolute inset-0 rounded-md pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.14))' }} />
    <div className="relative z-10">
          <div className="mb-2">
            <div
              className="text-lg sm:text-2xl md:text-4xl font-cursive tracking-wide leading-tight"
                style={{ fontFamily: `Great Vibes, 'Brush Script MT', cursive`, fontSize: 'clamp(18px, 3.4vw, 48px)', color: '#FAF9F6' }}
            >
              Escape to Serenity
            </div>
          </div>
          <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 tracking-wide leading-tight font-heading lux-hero font-semibold md:font-bold" style={{ color: '#ffefd6' }}>
            Relajarse Spa and Wellness
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-body lux-sub" style={{ color: '#FAF9F6' }}>
            Indulge in the ultimate wellness experience with our luxury spa treatments designed to rejuvenate your mind, body, and soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={(e) => { handleRipple(e); scrollTo('#contact'); }}
            className="ripple min-w-[220px] px-8 py-4 rounded-md hover:scale-105 transition-transform flex items-center justify-center gap-3"
            style={{ backgroundColor: '#3C4C37', color: '#FAF9F6' }}
            aria-label="Book an appointment"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </Button>

          <div className="rounded-md overflow-hidden">
            <div
              className="p-0 rounded-md inline-block"
              style={{
                background: 'linear-gradient(135deg, rgba(10,10,10,0.72), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.20)',
                backdropFilter: 'blur(12px) saturate(120%)',
                WebkitBackdropFilter: 'blur(12px) saturate(120%)',
                borderRadius: '0.5rem',
                display: 'inline-block',
                overflow: 'hidden',
              }}
            >
              <Button
                size="lg"
                variant="ghost"
                onClick={(e) => { handleRipple(e); scrollTo('#services'); }}
                className="ripple min-w-[220px] px-8 py-4 rounded-md bg-transparent flex items-center justify-center gap-3"
                style={{ color: '#FAF9F6', background: 'transparent' }}
                aria-label="View our services"
              >
                <span>View Services</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}