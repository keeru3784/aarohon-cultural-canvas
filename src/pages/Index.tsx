import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Calendar, Users, MapPin, ArrowDown, Image } from "lucide-react";

const Index = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const upcomingEvents = [
    {
      name: "Durga Puja 2025",
      date: "October 15-19, 2025",
      location: "Community Center, Kolkata",
      image: "/assets/landing-page/landing(1).jpg",
      targetDate: new Date("2025-10-15T10:00:00")
    },
    {
      name: "Kali Puja Celebration",
      date: "November 1, 2025",
      location: "Local Temple Grounds",
      image: "/assets/landing-page/landing(2).jpg",
      targetDate: new Date("2025-11-01T18:00:00")
    },
    {
      name: "Cultural Night",
      date: "December 10, 2025",
      location: "City Auditorium",
      image: "/assets/landing-page/landing(3).jpg",
      targetDate: new Date("2025-12-10T19:30:00")
    }
  ];

  // State for each event's countdown
  const [countdowns, setCountdowns] = useState(
    upcomingEvents.map(() => ({ days: 0, hours: 0, minutes: 0, seconds: 0 }))
  );

  const calculateTimeLeft = (targetDate: Date) => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  // Update all countdowns every second
  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdowns = upcomingEvents.map(event => 
        calculateTimeLeft(event.targetDate)
      );
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate events every 5 seconds
  useEffect(() => {
    const eventTimer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length);
    }, 5000);

    return () => clearInterval(eventTimer);
  }, [upcomingEvents.length]);

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
    { 
      name: "Senco Golds", 
      logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=120&fit=crop&crop=center",
      description: "Premium Jewelry Partner"
    },
    { 
      name: "Varun Motors Pvt. Ltd", 
      logo: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=120&h=120&fit=crop&crop=center",
      description: "Automobile Solutions"
    },
    { 
      name: "PNC Cognito School", 
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=120&h=120&fit=crop&crop=center",
      description: "Educational Excellence"
    },
    { 
      name: "Little Villa Preschool Kadugodi", 
      logo: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=120&h=120&fit=crop&crop=center",
      description: "Early Childhood Development"
    },
    { 
      name: "Milaan - The Fertility Specialist", 
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=120&fit=crop&crop=center",
      description: "Healthcare Excellence"
    },
    { 
      name: "Manipal Hospitals", 
      logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=120&h=120&fit=crop&crop=center",
      description: "Healthcare Partner"
    },
    { 
      name: "Axis Bank", 
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&h=120&fit=crop&crop=center",
      description: "Banking Solutions"
    },
    { 
      name: "Medicover Hospitals", 
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=120&fit=crop&crop=center",
      description: "Medical Care"
    },
    { 
      name: "Nancy Yoga Studio", 
      logo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=120&h=120&fit=crop&crop=center",
      description: "Wellness & Fitness"
    },
    { 
      name: "IFB", 
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=120&fit=crop&crop=center",
      description: "Home Appliances"
    },
    { 
      name: "Yuvi Pep", 
      logo: "https://images.unsplash.com/photo-1594736797933-d0801ba2fe65?w=120&h=120&fit=crop&crop=center",
      description: "Food & Beverages"
    },
    { 
      name: "Bisleri Limonata", 
      logo: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=120&h=120&fit=crop&crop=center",
      description: "Refreshment Partner"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 worship-overlay z-10"></div>
        {/* Base background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/assets/landing-page/landing-page-bg.jpg)`
          }}
        ></div>
        {/* Dynamic event background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-2000 animate-scale-in"
          style={{
            backgroundImage: `url(${upcomingEvents[currentEventIndex].image})`
          }}
        ></div>
        <div className="absolute inset-0 mandala-pattern z-20 animate-primary-pulse opacity-50"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/30 rounded-full animate-float stagger-1"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/40 rounded-full animate-bounce-gentle stagger-2"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent/30 rounded-full animate-float stagger-3"></div>
        
        <div className="relative z-30 text-center text-secondary px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-poppins font-bold mb-8 hover:animate-secondary-glow hover-float opacity-70">
              Aarohon
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 animate-primary-pulse rounded-full opacity-50"></div>
            <p className="text-2xl md:text-3xl font-poppins mb-6 animate-fade-in-up stagger-1 animate-secondary-glow opacity-50">
              Worship for Humanity
            </p>
            <p className="text-xl md:text-2xl font-poppins mb-8 animate-fade-in-up stagger-2 opacity-50">
              Celebrating Culture, Connecting People
            </p>
            <p className="text-lg md:text-xl mb-16 text-secondary/95 animate-fade-in-up stagger-3 leading-relaxed opacity-50">
              Join us in preserving Bengali heritage while building a stronger, more connected community through worship and cultural celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-primary-pulse text-lg hover-float secondary-shadow">
                VIEW UPCOMING EVENTS
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-primary-pulse text-lg hover-float primary-shadow">
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
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full animate-bounce-gentle stagger-2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-poppins font-bold text-primary mb-6 animate-fade-in-up animate-secondary-glow">
              Upcoming Events
            </h2>
            <div className="w-32 h-2 bg-primary mx-auto mb-8 animate-primary-pulse rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Join us for our upcoming cultural celebrations and community gatherings that bring our heritage to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Event Carousel */}
            <div className="animate-slide-in-left">
              <Card className="overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-2xl animate-primary-pulse hover-float primary-shadow">
                <div className="relative h-80">
                  <img 
                    src={upcomingEvents[currentEventIndex].image} 
                    alt={upcomingEvents[currentEventIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 worship-overlay"></div>
                  <div className="absolute bottom-6 left-6 text-secondary">
                    <h3 className="text-3xl font-poppins font-bold mb-3 animate-secondary-glow">
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
                        ? 'bg-primary animate-primary-pulse scale-125' 
                        : 'bg-primary/40 hover:bg-primary/70 animate-float'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Dynamic Countdown Timer for Current Event */}
            <div className="animate-slide-in-right">
              <div className="text-center">
                <h3 className="text-4xl font-poppins font-bold text-primary mb-4 animate-secondary-glow">
                  {upcomingEvents[currentEventIndex].name}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">Countdown Timer</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Days', value: countdowns[currentEventIndex]?.days || 0 },
                    { label: 'Hours', value: countdowns[currentEventIndex]?.hours || 0 },
                    { label: 'Minutes', value: countdowns[currentEventIndex]?.minutes || 0 },
                    { label: 'Seconds', value: countdowns[currentEventIndex]?.seconds || 0 },
                  ].map((item, index) => (
                    <div key={item.label} className={`bg-primary p-8 rounded-xl text-secondary text-center transition-all duration-500 hover:scale-105 animate-primary-pulse stagger-${index + 1} hover-float primary-shadow`}>
                      <div className="text-4xl md:text-5xl font-bold font-poppins mb-3 animate-secondary-glow">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm font-poppins uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* All Events Quick Overview */}
                <div className="mt-12 space-y-4">
                  <h4 className="text-2xl font-poppins font-bold text-primary mb-6">All Upcoming Events</h4>
                  {upcomingEvents.map((event, index) => (
                    <div key={event.name} className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                      index === currentEventIndex 
                        ? 'border-primary bg-primary/10' 
                        : 'border-primary/30 hover:border-primary/60'
                    }`}
                    onClick={() => setCurrentEventIndex(index)}>
                      <div className="flex justify-between items-center">
                        <div className="text-left">
                          <h5 className="font-poppins font-bold text-primary">{event.name}</h5>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {countdowns[index]?.days || 0}d {countdowns[index]?.hours || 0}h
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {countdowns[index]?.minutes || 0}m {countdowns[index]?.seconds || 0}s
                          </div>
                        </div>
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
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-primary mb-8 animate-secondary-glow">
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
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-primary-pulse text-lg hover-float primary-shadow">
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
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-poppins font-bold text-primary mb-6 animate-fade-in-up animate-secondary-glow">
              2024 Highlights
            </h2>
            <div className="w-32 h-2 bg-primary mx-auto mb-8 animate-primary-pulse rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Relive the sacred moments from our past celebrations and community activities that showcase our worship for humanity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryHighlights.map((item, index) => (
              <Card key={item.title} className={`group overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-2xl cursor-pointer animate-scale-in stagger-${(index % 3) + 1} hover-float primary-shadow`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 worship-overlay opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 animate-fade-in-up">
                    <h3 className="font-poppins font-bold text-xl mb-2 animate-secondary-glow">{item.title}</h3>
                    <p className="flex items-center text-sm">
                      <Image className="w-4 h-4 mr-2 animate-bounce-gentle" />
                      {item.count}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-bold text-xl text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
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
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/20 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full animate-bounce-gentle stagger-3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-poppins font-bold text-secondary mb-6 animate-fade-in-up animate-secondary-glow">
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
                <div className="text-5xl md:text-6xl font-poppins font-bold text-secondary mb-4 animate-secondary-glow">
                  {stat.value}
                </div>
                <div className="text-secondary/95 font-poppins text-xl group-hover:text-secondary transition-colors duration-300">
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
      <section className="py-24 bg-gradient-to-br from-bengali-cream to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-poppins font-bold text-primary mb-6 animate-fade-in-up">
              Our Sponsors & Partners
            </h2>
            <div className="w-32 h-2 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Proudly supported by these amazing organizations who share our vision of worship for humanity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
            {sponsors.map((sponsor, index) => (
              <div key={sponsor.name} className={`group animate-scale-in stagger-${(index % 6) + 1}`}>
                <div className="bg-white rounded-full w-32 h-32 mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 group-hover:-translate-y-2 border-4 border-white hover:border-primary/20 overflow-hidden">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-poppins font-bold text-primary text-sm mb-1 group-hover:text-bengali-gold transition-colors duration-300">
                    {sponsor.name}
                  </h3>
                  <p className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                    {sponsor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg hover-float shadow-lg">
              View All Sponsors
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary border-t-4 border-secondary/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full animate-rotate-slow"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6 animate-fade-in-up animate-secondary-glow">
            Stay Connected
          </h2>
          <p className="text-xl text-secondary/90 mb-12 animate-fade-in-up stagger-1 leading-relaxed">
            Subscribe to our newsletter for updates on upcoming events, worship activities, and community news
          </p>
          <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto animate-fade-in-up stagger-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-secondary/30 bg-secondary/10 backdrop-blur-sm rounded-full focus:outline-none focus:border-secondary transition-all duration-300 text-lg hover:border-secondary/60 text-secondary placeholder-secondary/70"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 animate-primary-pulse text-lg hover-float primary-shadow">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
