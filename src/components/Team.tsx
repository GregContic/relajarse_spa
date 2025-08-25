import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";


const teamMembers = [
  {
    name: "Adrianna Balangue",
    role: "Master Therapist",
    specialization: "Deep Tissue & Hot Stone Massage",
    experience: "12 years",
  certifications: ["Licensed Massage Therapist", "Aromatherapy Specialist"],
  image: '/assets/adrianna.jpeg'
  },
  {
    name: "Dr. Vonessa Evasco",
    role: "Lead Esthetician",
    specialization: "Advanced Skincare & Anti-Aging",
    experience: "8 years",
  certifications: ["Licensed Esthetician", "Chemical Peel Specialist"],
  image: '/assets/vonessa.jpeg'
  },
  {
    name: "Aries Bantasan",
    role: "Wellness Specialist",
    specialization: "Reflexology & Energy Healing",
    experience: "10 years",
  certifications: ["Certified Reflexologist", "Reiki Master"],
  image: '/assets/aries.jpeg'
  },
  {
    name: "Deborah Telino",
    role: "Senior Therapist",
    specialization: "Prenatal & Couples Massage",
    experience: "7 years",
  certifications: ["Prenatal Massage Certified", "Couples Therapy Specialist"],
  image: '/assets/deborah.jpeg'
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-3 text-header tracking-wide">Meet Our Expert Team</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg font-body">
            Our skilled therapists and wellness experts are dedicated to providing you with personalized care and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl rounded-2xl p-6 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <div className="w-28 h-28 bg-gradient-to-br from-primary/30 to-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <span className="text-3xl sm:text-4xl font-heading text-primary">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>
                <CardTitle className="text-lg font-heading text-text">{member.name}</CardTitle>
                <p className="text-sm text-primary/800 mt-1">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3 text-text/90 italic">{member.specialization}</p>
                <div className="flex justify-center mb-4">
                  <Badge variant="secondary" className="px-3 py-1 rounded-full bg-primary/10 text-primary">{member.experience} experience</Badge>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="inline-block bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground">
                      {cert}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}