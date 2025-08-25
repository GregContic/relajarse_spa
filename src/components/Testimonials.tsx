import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Adams",
    location: "Beverly Hills, CA",
    rating: 5,
    text: "Absolutely divine experience! The Diamond Facial left my skin glowing for weeks. The attention to detail and luxurious atmosphere made this the perfect escape from city life."
  },
  {
    name: "Robert Chen",
    location: "Manhattan, NY",
    rating: 5,
    text: "My wife and I had the couples retreat package for our anniversary. Elena and Michael were incredible - perfectly synchronized treatments in the most serene environment."
  },
  {
    name: "Maria Santos",
    location: "Miami, FL",
    rating: 5,
    text: "I've been coming to Serenity Spa for over 3 years. Dr. Chen's expertise with my sensitive skin is unmatched. This place truly understands luxury wellness."
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}