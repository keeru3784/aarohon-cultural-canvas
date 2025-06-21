import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Social Impact", href: "/social-impact" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 transition-all duration-300 hover:bg-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <img
                  src="/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png"
                  alt="Aarohon Logo"
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="text-xl font-playfair font-bold text-primary transition-all duration-300 group-hover:text-bengali-gold">
                  Aarohon
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group ${
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-bengali-gold/10 hover:text-primary"
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname !== item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-bengali-gold/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  {isOpen ? (
                    <X className="h-4 w-4 transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="h-4 w-4 transition-transform duration-300" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden border-t border-border/50 transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-bengali-gold/10 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: isOpen ? `slide-in-left 0.3s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png"
                  alt="Aarohon Logo"
                  className="h-8 w-8"
                />
                <span className="text-lg font-playfair font-bold text-primary">
                  Aarohon Socio-Cultural Club
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Preserving Bengali culture and building community connections in Bangalore.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-muted-foreground hover:text-primary">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="text-muted-foreground hover:text-primary">
                    Membership
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  Email: aarohan.blr@gmail.com
                </li>
                <li className="text-muted-foreground">
                  Phone: +91 98765 43210
                </li>
                <li className="text-muted-foreground">
                  Bangalore, Karnataka
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8">
            <p className="text-center text-muted-foreground">
              © 2024 Aarohon Socio-Cultural Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
