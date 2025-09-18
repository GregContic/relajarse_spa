import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#3C4C37', color: '#FAF9F6' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4">Serenity Spa</h3>
            <p className="mb-4" style={{ color: 'rgba(250,249,246,0.85)' }}>
              Your sanctuary of wellness and tranquility in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:opacity-90" />
              <Instagram className="w-5 h-5 cursor-pointer hover:opacity-90" />
              <Twitter className="w-5 h-5 cursor-pointer hover:opacity-90" />
              <Mail className="w-5 h-5 cursor-pointer hover:opacity-90" />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-95">Massage Therapy</a></li>
              <li><a href="#" className="hover:opacity-95">Facial Treatments</a></li>
              <li><a href="#" className="hover:opacity-95">Body Treatments</a></li>
              <li><a href="#" className="hover:opacity-95">Couples Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-95">About Us</a></li>
              <li><a href="#" className="hover:opacity-95">Gift Cards</a></li>
              <li><a href="#" className="hover:opacity-95">Membership</a></li>
              <li><a href="#" className="hover:opacity-95">Policies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="mb-4" style={{ color: 'rgba(250,249,246,0.85)' }}>
              Subscribe for wellness tips and exclusive offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 text-text rounded-l-md"
              />
              <button className="px-4 py-2 rounded-r-md hover:opacity-95" style={{ backgroundColor: '#FAF9F6', color: '#3C4C37' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(250,249,246,0.18)', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: 'rgba(250,249,246,0.78)' }}>
          <p>&copy; 2025 Serenity Spa. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}