import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4">Serenity Spa</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your sanctuary of wellness and tranquility in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary-foreground/80" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-primary-foreground/80" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary-foreground/80" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-primary-foreground/80" />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">Massage Therapy</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Facial Treatments</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Body Treatments</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Couples Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Gift Cards</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Membership</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Policies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe for wellness tips and exclusive offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 text-text rounded-l-md"
              />
              <button className="bg-offwhite text-primary px-4 py-2 rounded-r-md hover:opacity-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Serenity Spa. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}