import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Visit Our Sanctuary</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ready to embark on your wellness journey? We're here to welcome you to our peaceful haven.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>1234 Wellness Boulevard</p>
                <p>Serenity Heights, CA 90210</p>
                <p className="text-muted text-sm mt-2">
                  Located in the heart of the city's wellness district, with valet parking available.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p>(555) 123-4567</p>
                  <p className="text-sm text-muted">24/7 booking line</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p>hello@serenityspa.com</p>
                  <p className="text-sm text-muted">We reply within 2 hours</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
            <h3 className="text-2xl mb-4">Ready to Book?</h3>
            <p className="text-muted mb-6">
              Experience the ultimate in relaxation and rejuvenation. Book your appointment today 
              and take the first step toward complete wellness.
            </p>
            
            <div className="space-y-4">
              <Button size="lg" className="w-full">
                Book Online Now
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Call to Schedule
              </Button>
            </div>

            <div className="mt-8 p-4 bg-offwhite rounded-lg shadow-sm">
              <h4 className="font-medium mb-2">First Visit Special</h4>
              <p className="text-sm text-muted">
                Enjoy 20% off your first treatment when you book within the next 30 days. 
                Mention code SERENITY20 when booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}