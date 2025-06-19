
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
      <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png"
                  alt="Aarohon Logo"
                  className="h-10 w-10"
                />
                <span className="text-xl font-playfair font-bold text-primary">
                  Aarohon
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item.name}
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
                >
                  {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
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
