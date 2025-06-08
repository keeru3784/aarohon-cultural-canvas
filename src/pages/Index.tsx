
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Calendar, Users, MapPin, ArrowDown, Image } from "lucide-react";

const Index = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [countdownTime, setCountdownTime] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 15
  });

  const upcomingEvents = [
    {
      name: "Durga Puja 2025",
      date: "October 15-19, 2025",
      location: "Community Center, Kolkata",
      image: "/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png"
    },
    {
      name: "Kali Puja Celebration",
      date: "November 1, 2025",
      location: "Local Temple Grounds",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800"
    },
    {
      name: "Cultural Night",
      date: "December 10, 2025",
      location: "City Auditorium",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800"
    }
  ];

  const galleryHighlights = [
    { title: "Durga Puja 2024", image: "/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png", count: "120+ Photos" },
    { title: "Kali Puja 2024", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", count: "85+ Photos" },
    { title: "Food Distribution", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", count: "60+ Photos" },
    { title: "Cultural Programs", image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400", count: "95+ Photos" },
    { title: "Community Service", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400", count: "40+ Photos" },
    { title: "Educational Initiatives", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", count: "30+ Photos" },
  ];

  const communityStats = [
    { label: "Families Supported", value: "100+", icon: "👨‍👩‍👧‍👦" },
    { label: "Educational Initiatives", value: "3", icon: "📚" },
    { label: "Cultural Events", value: "25+", icon: "🎭" },
    { label: "Volunteers", value: "50+", icon: "🤝" },
  ];

  const sponsors = [
    { name: "Heritage Foods", logo: "🍽️" },
    { name: "Bengal Textiles", logo: "🧵" },
    { name: "Cultural Arts Foundation", logo: "🎨" },
    { name: "Community Bank", logo: "🏦" },
    { name: "Local Business Association", logo: "🏢" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const eventTimer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length);
    }, 5000);

    return () => clearInterval(eventTimer);
  }, [upcomingEvents.length]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 worship-overlay z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-2000 animate-scale-in"
          style={{
            backgroundImage: `url(${upcomingEvents[currentEventIndex].image})`
          }}
        ></div>
        <div className="absolute inset-0 mandala-pattern z-20 animate-pulse-glow"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-bengali-gold/30 rounded-full animate-float stagger-1"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-bengali-red/40 rounded-full animate-bounce-gentle stagger-2"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-bengali-brown/30 rounded-full animate-float stagger-3"></div>
        
        <div className="relative z-30 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 animate-glow-pulse hover-float">
              Aarohon
            </h1>
            <div className="w-32 h-2 bg-bengali-gold mx-auto mb-8 animate-pulse-glow rounded-full"></div>
            <p className="text-2xl md:text-3xl font-lato mb-6 animate-fade-in-up stagger-1 animate-glow-pulse">
              Worship for Humanity
            </p>
            <p className="text-xl md:text-2xl font-lato mb-8 animate-fade-in-up stagger-2">
              Celebrating Culture, Connecting People
            </p>
            <p className="text-lg md:text-xl mb-16 text-bengali-cream/95 animate-fade-in-up stagger-3 leading-relaxed">
              Join us in preserving Bengali heritage while building a stronger, more connected community through worship and cultural celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-4">
              <Button size="lg" className="bg-bengali-gold hover:bg-bengali-gold/90 text-bengali-brown font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-pulse-glow text-lg hover-float">
                VIEW UPCOMING EVENTS
              </Button>
              <Button variant="outline" size="lg" className="border-3 border-white text-white hover:bg-white hover:text-bengali-brown font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-shake">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-30">
          <ArrowDown className="w-10 h-10 text-bengali-gold animate-glow-pulse" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bengali-gold/5 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-bengali-brown/5 rounded-full animate-bounce-gentle stagger-2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-bengali-brown mb-6 animate-fade-in-up animate-glow-pulse">
              Upcoming Event
            </h2>
            <div className="w-32 h-2 bg-bengali-gold mx-auto mb-8 animate-pulse-glow rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Join us for our upcoming cultural celebrations and community gatherings that bring our heritage to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Event Carousel */}
            <div className="animate-slide-in-left">
              <Card className="overflow-hidden border-4 border-bengali-gold/30 hover:border-bengali-gold transition-all duration-500 hover:shadow-2xl animate-pulse-glow hover-float">
                <div className="relative h-80">
                  <img 
                    src={upcomingEvents[currentEventIndex].image} 
                    alt={upcomingEvents[currentEventIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 worship-overlay"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-playfair font-bold mb-3 animate-glow-pulse">
                      {upcomingEvents[currentEventIndex].name}
                    </h3>
                    <p className="flex items-center mb-2 text-lg">
                      <Calendar className="w-5 h-5 mr-3 animate-bounce-gentle" />
                      {upcomingEvents[currentEventIndex].date}
                    </p>
                    <p className="flex items-center text-lg">
                      <MapPin className="w-5 h-5 mr-3 animate-pulse-glow" />
                      {upcomingEvents[currentEventIndex].location}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Event Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {upcomingEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEventIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-500 hover:scale-125 ${
                      index === currentEventIndex 
                        ? 'bg-bengali-gold animate-pulse-glow scale-125' 
                        : 'bg-bengali-gold/40 hover:bg-bengali-gold/70 animate-float'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="animate-slide-in-right">
              <div className="text-center">
                <h3 className="text-4xl font-playfair font-bold text-bengali-brown mb-12 animate-glow-pulse">
                  Next Event Countdown
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Days', value: countdownTime.days },
                    { label: 'Hours', value: countdownTime.hours },
                    { label: 'Minutes', value: countdownTime.minutes },
                    { label: 'Seconds', value: countdownTime.seconds },
                  ].map((item, index) => (
                    <div key={item.label} className={`warm-gradient p-8 rounded-xl text-white text-center transition-all duration-500 hover:scale-105 animate-pulse-glow stagger-${index + 1} hover-float`}>
                      <div className="text-4xl md:text-5xl font-bold font-playfair mb-3 animate-glow-pulse">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm font-lato uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Aarohon Section */}
      <section className="py-24 bg-bengali-cream relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-bengali-brown/10 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-bengali-brown mb-8 animate-glow-pulse">
                About Aarohon
              </h2>
              <div className="w-32 h-2 bg-bengali-gold mb-8 animate-pulse-glow rounded-full"></div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up stagger-1">
                Aarohon celebrates Bengali festivals, fosters community spirit through worship, cultural events, and social work across Whitetheld & Kadugodi.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up stagger-2">
                Our mission extends beyond cultural celebrations to encompass worship for humanity, education, and community welfare through traditional values and modern initiatives.
              </p>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up stagger-3">
                From grand festival celebrations like Durga Puja and Kali Puja to educational programs and community service, Aarohon serves as a bridge between tradition and progress.
              </p>
              <Button className="warm-gradient hover:opacity-90 text-white font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-pulse-glow text-lg hover-float">
                Learn More About Us
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png" 
                  alt="Bengali Cultural Heritage - Worship for Humanity"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 animate-pulse-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-bengali-red/20 to-bengali-gold/20 rounded-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-bengali-gold rounded-full flex items-center justify-center animate-float shadow-xl">
                  <span className="text-4xl animate-bounce-gentle">🎭</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-bengali-gold/5 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-bengali-brown mb-6 animate-fade-in-up animate-glow-pulse">
              2024 Highlights
            </h2>
            <div className="w-32 h-2 bg-bengali-gold mx-auto mb-8 animate-pulse-glow rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Relive the sacred moments from our past celebrations and community activities that showcase our worship for humanity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryHighlights.map((item, index) => (
              <Card key={item.title} className={`group overflow-hidden border-4 border-bengali-gold/30 hover:border-bengali-gold transition-all duration-500 hover:shadow-2xl cursor-pointer animate-scale-in stagger-${(index % 3) + 1} hover-float`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 worship-overlay opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 animate-fade-in-up">
                    <h3 className="font-playfair font-bold text-xl mb-2 animate-glow-pulse">{item.title}</h3>
                    <p className="flex items-center text-sm">
                      <Image className="w-4 h-4 mr-2 animate-bounce-gentle" />
                      {item.count}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-bengali-brown mb-3 group-hover:text-bengali-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-3 border-bengali-brown text-bengali-brown hover:bg-bengali-brown hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-float">
              View Complete Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-24 cultural-gradient relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-bengali-gold/20 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-bengali-red/20 rounded-full animate-bounce-gentle stagger-3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6 animate-fade-in-up animate-glow-pulse">
              Community Impact
            </h2>
            <div className="w-32 h-2 bg-white mx-auto mb-8 animate-pulse-glow rounded-full"></div>
            <p className="text-xl text-white/95 max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Making a difference in our community through cultural preservation, worship for humanity, and social initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {communityStats.map((stat, index) => (
              <div key={stat.label} className={`text-center animate-fade-in-up stagger-${index + 1} hover-float group`}>
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce-gentle group-hover:animate-rotate-slow transition-all duration-500 group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4 animate-glow-pulse">
                  {stat.value}
                </div>
                <div className="text-white/95 font-lato text-xl group-hover:text-bengali-gold transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button variant="outline" size="lg" className="border-3 border-white text-white hover:bg-white hover:text-bengali-brown font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-float">
              Learn About Our Social Work
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-bengali-cream relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-bengali-brown mb-6 animate-fade-in-up animate-glow-pulse">
              Our Sponsors & Partners
            </h2>
            <div className="w-32 h-2 bg-bengali-gold mx-auto mb-8 animate-pulse-glow rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Proudly supported by these amazing organizations who share our vision of worship for humanity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {sponsors.map((sponsor, index) => (
              <div key={sponsor.name} className={`text-center group animate-scale-in stagger-${(index % 3) + 1} hover-float`}>
                <div className="w-24 h-24 bg-white border-4 border-bengali-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:border-bengali-gold transition-all duration-500 group-hover:scale-125 shadow-xl animate-pulse-glow">
                  {sponsor.logo}
                </div>
                <h3 className="font-lato font-semibold text-bengali-brown group-hover:text-bengali-gold transition-colors duration-300 group-hover:animate-glow-pulse">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-3 border-bengali-brown text-bengali-brown hover:bg-bengali-brown hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-float">
              View All Sponsors
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white border-t-4 border-bengali-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-bengali-gold/5 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-bengali-brown mb-6 animate-fade-in-up animate-glow-pulse">
            Stay Connected
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up stagger-1 leading-relaxed">
            Subscribe to our newsletter for updates on upcoming events, worship activities, and community news
          </p>
          <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto animate-fade-in-up stagger-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-bengali-gold/30 rounded-full focus:outline-none focus:border-bengali-gold transition-all duration-300 text-lg hover:border-bengali-gold/60"
            />
            <Button className="warm-gradient hover:opacity-90 text-white font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-pulse-glow text-lg hover-float">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
