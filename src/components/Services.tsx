import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "Signature Massage",
    description: "A customized full-body massage using our signature blend of essential oils to release tension and restore balance.",
    duration: "90 min",
    price: "$280",
    image: "https://images.unsplash.com/photo-1737352777897-e22953991a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3NTYxMDUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true
  },
  {
    title: "Diamond Facial",
    description: "Our premium anti-aging facial featuring diamond microdermabrasion and peptide-rich serums for radiant, youthful skin.",
    duration: "75 min",
    price: "$320",
    image: "https://images.unsplash.com/photo-1664549760921-2198b054a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2MTA1MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: false
  },
  {
    title: "Couples Retreat",
    description: "Share a tranquil experience with your loved one in our private couples suite with synchronized treatments.",
    duration: "120 min",
    price: "$580",
    image: "https://images.unsplash.com/photo-1599875039954-843cb065a3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHNwYSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzU2MDg3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Signature Services</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Experience our carefully curated treatments designed to provide the ultimate in relaxation and rejuvenation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{service.title}</CardTitle>
                  <div className="text-right">
                    <div className="font-semibold">{service.price}</div>
                    <div className="text-sm text-muted">{service.duration}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}