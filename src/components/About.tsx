import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function About() {
  const left = useScrollReveal();
  const right = useScrollReveal();

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={left.ref as any} className={`space-y-8 reveal reveal--left ${left.inView ? 'is-revealed' : ''}`}>
            <div className="flex items-center gap-4">
              <div className="h-1 w-14 rounded-full" style={{ backgroundColor: 'var(--accent)' }} aria-hidden />
              <span className="text-sm uppercase tracking-wider" style={{ color: 'var(--primary)' }}>Our Philosophy</span>
            </div>

            <h2 className="text-4xl font-heading leading-tight" style={{ color: 'var(--primary)' }}>
              A Sanctuary of Wellness
            </h2>

            <p className="text-lg max-w-prose" style={{ color: 'var(--foreground)' }}>
              At Serenity Spa we blend ancient healing rituals with modern therapeutic techniques to create deeply restorative experiences. Step into a calm space designed to slow your breath, ease tension, and restore balance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(163,177,138,0.06)', border: '1px solid rgba(163,177,138,0.08)' }}>
                <h4 className="text-xl font-medium" style={{ color: 'var(--primary)' }}>Holistic Treatments</h4>
                <p className="mt-2 text-sm" style={{ color: 'var(--foreground)' }}>Tailored sessions combining massage, aromatherapy, and mindful breathing for complete wellness.</p>
              </div>

              <div className="p-4 rounded-xl" style={{ background: 'rgba(230,183,193,0.04)', border: '1px solid rgba(230,183,193,0.06)' }}>
                <h4 className="text-xl font-medium" style={{ color: 'var(--accent)' }}>Luxury Rituals</h4>
                <p className="mt-2 text-sm" style={{ color: 'var(--foreground)' }}>Premium products and sensory design to elevate each treatment into a memorable ritual.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-6 mt-6">
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>15+</div>
                  <div className="text-sm" style={{ color: 'var(--foreground)' }}>Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>10k+</div>
                  <div className="text-sm" style={{ color: 'var(--foreground)' }}>Happy Clients</div>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-auto">
                <a href="#services" className="inline-block rounded-md px-6 py-3 font-medium shadow-sm transition-transform hover:scale-[1.02]" style={{ backgroundColor: '#3C4C37', color: '#FAF9F6' }}>Explore Services</a>
              </div>
            </div>
          </div>

          <div className="relative" ref={right.ref as any}>
            <div className={`liquid-glass overflow-hidden rounded-2xl relative reveal reveal--right ${right.inView ? 'is-revealed' : ''}`} style={{ height: 520 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599875039954-843cb065a3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHNwYSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzU2MDg3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Spa wellness area"
                className="w-full h-full object-cover"
              />

              <div className="absolute left-6 bottom-6 p-4 rounded-lg" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Signature Ritual</div>
                <div className="text-lg font-semibold" style={{ color: 'var(--primary)' }}>Calming Salt Massage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}