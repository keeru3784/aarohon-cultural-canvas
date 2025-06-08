
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
        <div className="absolute inset-0 mandala-pattern z-20 animate-primary-pulse"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/30 rounded-full animate-float stagger-1"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/40 rounded-full animate-bounce-gentle stagger-2"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent/30 rounded-full animate-float stagger-3"></div>
        
        <div className="relative z-30 text-center text-secondary px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 animate-secondary-glow hover-float">
              Aarohon
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 animate-primary-pulse rounded-full"></div>
            <p className="text-2xl md:text-3xl font-lato mb-6 animate-fade-in-up stagger-1 animate-secondary-glow">
              Worship for Humanity
            </p>
            <p className="text-xl md:text-2xl font-lato mb-8 animate-fade-in-up stagger-2">
              Celebrating Culture, Connecting People
            </p>
            <p className="text-lg md:text-xl mb-16 text-secondary/95 animate-fade-in-up stagger-3 leading-relaxed">
              Join us in preserving Bengali heritage while building a stronger, more connected community through worship and cultural celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-primary-pulse text-lg hover-float secondary-shadow">
                VIEW UPCOMING EVENTS
              </Button>
              <Button variant="outline" size="lg" className="border-3 border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-shake">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-30">
          <ArrowDown className="w-10 h-10 text-secondary animate-secondary-glow" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full animate-bounce-gentle stagger-2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6 animate-fade-in-up animate-secondary-glow">
              Upcoming Event
            </h2>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 animate-primary-pulse rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Join us for our upcoming cultural celebrations and community gatherings that bring our heritage to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Event Carousel */}
            <div className="animate-slide-in-left">
              <Card className="overflow-hidden border-4 border-secondary/30 hover:border-secondary transition-all duration-500 hover:shadow-2xl animate-primary-pulse hover-float primary-shadow">
                <div className="relative h-80">
                  <img 
                    src={upcomingEvents[currentEventIndex].image} 
                    alt={upcomingEvents[currentEventIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 worship-overlay"></div>
                  <div className="absolute bottom-6 left-6 text-secondary">
                    <h3 className="text-3xl font-playfair font-bold mb-3 animate-secondary-glow">
                      {upcomingEvents[currentEventIndex].name}
                    </h3>
                    <p className="flex items-center mb-2 text-lg">
                      <Calendar className="w-5 h-5 mr-3 animate-bounce-gentle" />
                      {upcomingEvents[currentEventIndex].date}
                    </p>
                    <p className="flex items-center text-lg">
                      <MapPin className="w-5 h-5 mr-3 animate-primary-pulse" />
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
                        ? 'bg-secondary animate-primary-pulse scale-125' 
                        : 'bg-secondary/40 hover:bg-secondary/70 animate-float'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="animate-slide-in-right">
              <div className="text-center">
                <h3 className="text-4xl font-playfair font-bold text-primary mb-12 animate-secondary-glow">
                  Next Event Countdown
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Days', value: countdownTime.days },
                    { label: 'Hours', value: countdownTime.hours },
                    { label: 'Minutes', value: countdownTime.minutes },
                    { label: 'Seconds', value: countdownTime.seconds },
                  ].map((item, index) => (
                    <div key={item.label} className={`primary-gradient p-8 rounded-xl text-secondary text-center transition-all duration-500 hover:scale-105 animate-primary-pulse stagger-${index + 1} hover-float primary-shadow`}>
                      <div className="text-4xl md:text-5xl font-bold font-playfair mb-3 animate-secondary-glow">
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
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-8 animate-secondary-glow">
                About Aarohon
              </h2>
              <div className="w-32 h-2 bg-primary mb-8 animate-primary-pulse rounded-full"></div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up stagger-1">
                Aarohon celebrates Bengali festivals, fosters community spirit through worship, cultural events, and social work across Whitetheld & Kadugodi.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up stagger-2">
                Our mission extends beyond cultural celebrations to encompass worship for humanity, education, and community welfare through traditional values and modern initiatives.
              </p>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up stagger-3">
                From grand festival celebrations like Durga Puja and Kali Puja to educational programs and community service, Aarohon serves as a bridge between tradition and progress.
              </p>
              <Button className="primary-gradient hover:opacity-90 text-secondary font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-primary-pulse text-lg hover-float primary-shadow">
                Learn More About Us
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png" 
                  alt="Bengali Cultural Heritage - Worship for Humanity"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 animate-primary-pulse primary-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary rounded-full flex items-center justify-center animate-float shadow-xl primary-shadow">
                  <span className="text-4xl animate-bounce-gentle">🎭</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6 animate-fade-in-up animate-secondary-glow">
              2024 Highlights
            </h2>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 animate-primary-pulse rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Relive the sacred moments from our past celebrations and community activities that showcase our worship for humanity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryHighlights.map((item, index) => (
              <Card key={item.title} className={`group overflow-hidden border-4 border-secondary/30 hover:border-secondary transition-all duration-500 hover:shadow-2xl cursor-pointer animate-scale-in stagger-${(index % 3) + 1} hover-float primary-shadow`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 worship-overlay opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 animate-fade-in-up">
                    <h3 className="font-playfair font-bold text-xl mb-2 animate-secondary-glow">{item.title}</h3>
                    <p className="flex items-center text-sm">
                      <Image className="w-4 h-4 mr-2 animate-bounce-gentle" />
                      {item.count}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-3 border-primary text-primary hover:bg-primary hover:text-secondary font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-float">
              View Complete Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-24 cultural-gradient relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/20 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full animate-bounce-gentle stagger-3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-secondary mb-6 animate-fade-in-up animate-secondary-glow">
              Community Impact
            </h2>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 animate-primary-pulse rounded-full"></div>
            <p className="text-xl text-secondary/95 max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Making a difference in our community through cultural preservation, worship for humanity, and social initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {communityStats.map((stat, index) => (
              <div key={stat.label} className={`text-center animate-fade-in-up stagger-${index + 1} hover-float group`}>
                <div className="w-24 h-24 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce-gentle group-hover:animate-rotate-slow transition-all duration-500 group-hover:scale-110 secondary-shadow">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-playfair font-bold text-secondary mb-4 animate-secondary-glow">
                  {stat.value}
                </div>
                <div className="text-secondary/95 font-lato text-xl group-hover:text-secondary transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button variant="outline" size="lg" className="border-3 border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-float">
              Learn About Our Social Work
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6 animate-fade-in-up animate-secondary-glow">
              Our Sponsors & Partners
            </h2>
            <div className="w-32 h-2 bg-primary mx-auto mb-8 animate-primary-pulse rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Proudly supported by these amazing organizations who share our vision of worship for humanity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {sponsors.map((sponsor, index) => (
              <div key={sponsor.name} className={`text-center group animate-scale-in stagger-${(index % 3) + 1} hover-float`}>
                <div className="w-24 h-24 bg-card border-4 border-secondary/30 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:border-secondary transition-all duration-500 group-hover:scale-125 shadow-xl animate-primary-pulse secondary-shadow">
                  {sponsor.logo}
                </div>
                <h3 className="font-lato font-semibold text-primary group-hover:text-primary transition-colors duration-300 group-hover:animate-secondary-glow">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-3 border-primary text-primary hover:bg-primary hover:text-secondary font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-float">
              View All Sponsors
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card border-t-4 border-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 animate-fade-in-up animate-secondary-glow">
            Stay Connected
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up stagger-1 leading-relaxed">
            Subscribe to our newsletter for updates on upcoming events, worship activities, and community news
          </p>
          <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto animate-fade-in-up stagger-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-secondary/30 rounded-full focus:outline-none focus:border-secondary transition-all duration-300 text-lg hover:border-secondary/60"
            />
            <Button className="primary-gradient hover:opacity-90 text-secondary font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-primary-pulse text-lg hover-float primary-shadow">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
