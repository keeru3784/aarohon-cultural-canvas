
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

// Mock Facebook, Instagram, YouTube icons as components
const Facebook = () => <span className="animate-bounce-gentle">📘</span>;
const Instagram = () => <span className="animate-float">📷</span>;
const Youtube = () => <span className="animate-pulse-glow">📺</span>;

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
    <div className="min-h-screen bg-secondary">
      {/* Navigation */}
      <nav className="bg-card/95 backdrop-blur-sm shadow-2xl sticky top-0 z-50 border-b-4 border-primary animate-slide-in-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center animate-primary-pulse hover-float group-hover:animate-rotate-slow">
                <span className="text-secondary font-bold text-xl animate-glow-pulse">আ</span>
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-primary hover-glow transition-all duration-300">
                  Aarohon
                </h1>
                <p className="text-sm text-muted-foreground animate-fade-in-up stagger-1">Socio-Cultural Club</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative group animate-fade-in-up stagger-${index + 1} hover-shake`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full animate-primary-pulse"></span>
                </Link>
              ))}
              <Button className="primary-gradient hover:opacity-90 text-secondary font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-110 animate-primary-pulse hover-float">
                Join Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary hover:bg-primary/20 hover-shake"
              >
                {isMenuOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card/95 backdrop-blur-sm border-t-2 border-primary animate-slide-in-left shadow-xl">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 px-4 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-md hover:bg-primary/10 animate-fade-in-up stagger-${index + 1} hover-float`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full primary-gradient hover:opacity-90 text-secondary font-semibold py-3 rounded-full transition-all duration-300 animate-primary-pulse">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="cultural-gradient text-secondary py-16 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/20 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/20 rounded-full animate-bounce-gentle stagger-3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2 animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center animate-primary-pulse hover-float group-hover:animate-rotate-slow">
                  <span className="text-primary font-bold text-lg animate-glow-pulse">আ</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold hover-glow">Aarohon Socio-Cultural Club</h3>
              </div>
              <p className="text-secondary/90 mb-6 leading-relaxed animate-fade-in-up stagger-1">
                Celebrating Culture, Connecting People. Join us in preserving and promoting Bengali heritage while building a stronger community through worship for humanity.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110 animate-scale-in stagger-1">
                  <Facebook />
                </Button>
                <Button variant="outline" size="icon" className="border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110 animate-scale-in stagger-2">
                  <Instagram />
                </Button>
                <Button variant="outline" size="icon" className="border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110 animate-scale-in stagger-3">
                  <Youtube />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-slide-in-right stagger-1">
              <h4 className="font-playfair font-semibold text-xl mb-6 text-secondary animate-secondary-glow">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item, index) => (
                  <li key={item.name} className={`animate-fade-in-up stagger-${index + 1}`}>
                    <Link to={item.href} className="text-secondary/90 hover:text-secondary transition-all duration-300 hover:pl-2 hover-glow">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right stagger-2">
              <h4 className="font-playfair font-semibold text-xl mb-6 text-secondary animate-secondary-glow">Contact Us</h4>
              <div className="space-y-4">
                <p className="text-secondary/90 flex items-center hover-float">
                  <MapPin className="w-5 h-5 mr-3 animate-bounce-gentle" />
                  Kolkata, West Bengal
                </p>
                <p className="text-secondary/90 flex items-center hover-float">
                  <Mail className="w-5 h-5 mr-3 animate-primary-pulse" />
                  info@aarohonclub.org
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary/30 mt-12 pt-8 text-center animate-fade-in-up stagger-4">
            <p className="text-secondary/80 hover-glow">
              © 2024 Aarohon Socio-Cultural Club. All rights reserved. | Worship for Humanity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
