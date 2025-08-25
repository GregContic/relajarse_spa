import { Button } from "./ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

function SerenitySpaLogo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <svg
          width="44"
          height="44"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle representing completeness and harmony */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary/30"
          />

          {/* Lotus petals */}
          <path
            d="M20 8C22.5 10 24 13 24 16C24 19 22.5 22 20 24C17.5 22 16 19 16 16C16 13 17.5 10 20 8Z"
            fill="currentColor"
            className="text-primary/60"
          />
          <path
            d="M32 20C30 17.5 27 16 24 16C21 16 18 17.5 16 20C18 22.5 21 24 24 24C27 24 30 22.5 32 20Z"
            fill="currentColor"
            className="text-primary/40"
          />
          <path
            d="M20 32C17.5 30 16 27 16 24C16 21 17.5 18 20 16C22.5 18 24 21 24 24C24 27 22.5 30 20 32Z"
            fill="currentColor"
            className="text-primary/60"
          />
          <path
            d="M8 20C10 22.5 13 24 16 24C19 24 22 22.5 24 20C22 17.5 19 16 16 16C13 16 10 17.5 8 20Z"
            fill="currentColor"
            className="text-primary/40"
          />

          {/* Center circle representing inner peace */}
          <circle
            cx="20"
            cy="20"
            r="4"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-xl text-header tracking-wide">
          R E L A J A R S E
        </h1>
        <p className="text-xs text-muted tracking-widest uppercase">
          SPA
        </p>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
  <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <SerenitySpaLogo />

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-header hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-64 bg-offwhite shadow-xl">
            <div className="flex flex-col p-6 pt-20">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-3 text-text hover:text-primary transition-colors border-b border-border last:border-b-0"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-6 space-y-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}