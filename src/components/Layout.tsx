
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

// Mock Facebook, Instagram, YouTube icons as components
const Facebook = () => <span>📘</span>;
const Instagram = () => <span>📷</span>;
const Youtube = () => <span>📺</span>;

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Our Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Social Impact", href: "/social-impact" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-bengali-cream">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-bengali-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-cultural-gradient rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-xl">আ</span>
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-bengali-red">
                  Aarohon
                </h1>
                <p className="text-sm text-muted-foreground">Socio-Cultural Club</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-bengali-red transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bengali-red transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button className="bg-cultural-gradient hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                Join Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-bengali-red"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-bengali-gold animate-slide-in-left">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 px-3 text-foreground hover:text-bengali-red transition-colors duration-200 font-medium rounded-md hover:bg-bengali-gold/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-cultural-gradient hover:opacity-90 text-white font-semibold py-2 rounded-full transition-all duration-300">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-bengali-red text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-bengali-gold rounded-full flex items-center justify-center">
                  <span className="text-bengali-red font-bold text-lg">আ</span>
                </div>
                <h3 className="text-xl font-playfair font-bold">Aarohon Socio-Cultural Club</h3>
              </div>
              <p className="text-bengali-cream/90 mb-4">
                Celebrating Culture, Connecting People. Join us in preserving and promoting Bengali heritage while building a stronger community.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-bengali-gold text-bengali-gold hover:bg-bengali-gold hover:text-bengali-red">
                  <Facebook />
                </Button>
                <Button variant="outline" size="icon" className="border-bengali-gold text-bengali-gold hover:bg-bengali-gold hover:text-bengali-red">
                  <Instagram />
                </Button>
                <Button variant="outline" size="icon" className="border-bengali-gold text-bengali-gold hover:bg-bengali-gold hover:text-bengali-red">
                  <Youtube />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-bengali-cream/90 hover:text-bengali-gold transition-colors duration-200">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-2">
                <p className="text-bengali-cream/90 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Kolkata, West Bengal
                </p>
                <p className="text-bengali-cream/90 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@aarohonclub.org
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-bengali-gold/30 mt-8 pt-8 text-center">
            <p className="text-bengali-cream/80">
              © 2024 Aarohon Socio-Cultural Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
