
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import SocialImpact from "./pages/SocialImpact";
import Sponsors from "./pages/Sponsors";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/social-impact" element={<SocialImpact />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
