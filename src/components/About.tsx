import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">A Sanctuary of Wellness</h2>
            <p className="text-muted mb-6 leading-relaxed">
              At Serenity Spa, we believe that true luxury lies in the art of complete relaxation. 
              Our tranquil sanctuary offers a perfect escape from the demands of everyday life, 
              where time seems to slow down and your well-being becomes our sole focus.
            </p>
            <p className="text-muted mb-6 leading-relaxed">
              Founded with a vision to create an oasis of calm, we combine ancient wellness traditions 
              with modern techniques to deliver transformative experiences that nurture both body and spirit.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">15+</div>
                <div className="text-sm text-muted">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">50+</div>
                <div className="text-sm text-muted">Treatment Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">10k+</div>
                <div className="text-sm text-muted">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">98%</div>
                <div className="text-sm text-muted">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1599875039954-843cb065a3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHNwYSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzU2MDg3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Spa wellness area"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}