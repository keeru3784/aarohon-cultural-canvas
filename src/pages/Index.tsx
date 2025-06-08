
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
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800"
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
    { title: "Durga Puja 2024", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400", count: "120+ Photos" },
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
        <div className="absolute inset-0 bg-gradient-to-br from-bengali-red/90 to-bengali-blue/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${upcomingEvents[currentEventIndex].image})`
          }}
        ></div>
        <div className="absolute inset-0 mandala-pattern z-20"></div>
        
        <div className="relative z-30 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-float">
              Aarohon
            </h1>
            <div className="w-24 h-1 bg-bengali-gold mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl md:text-2xl font-lato mb-8 animate-fade-in-up stagger-1">
              Celebrating Culture, Connecting People
            </p>
            <p className="text-lg md:text-xl mb-12 text-bengali-cream/90 animate-fade-in-up stagger-2">
              Join us in preserving Bengali heritage while building a stronger, more connected community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
              <Button size="lg" className="bg-bengali-gold hover:bg-bengali-gold/90 text-bengali-red font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 animate-pulse-glow">
                Explore Upcoming Events
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bengali-red font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <ArrowDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-bengali-red mb-4 animate-fade-in-up">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-bengali-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Join us for our upcoming cultural celebrations and community gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Event Carousel */}
            <div className="animate-slide-in-left">
              <Card className="overflow-hidden border-2 border-bengali-gold/20 hover:border-bengali-gold transition-all duration-300 hover:shadow-2xl">
                <div className="relative h-64">
                  <img 
                    src={upcomingEvents[currentEventIndex].image} 
                    alt={upcomingEvents[currentEventIndex].name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bengali-red/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-2">
                      {upcomingEvents[currentEventIndex].name}
                    </h3>
                    <p className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {upcomingEvents[currentEventIndex].date}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {upcomingEvents[currentEventIndex].location}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Event Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {upcomingEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEventIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentEventIndex 
                        ? 'bg-bengali-gold scale-125' 
                        : 'bg-bengali-gold/30 hover:bg-bengali-gold/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="animate-slide-in-right">
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-bengali-red mb-8">
                  Next Event Countdown
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Days', value: countdownTime.days },
                    { label: 'Hours', value: countdownTime.hours },
                    { label: 'Minutes', value: countdownTime.minutes },
                    { label: 'Seconds', value: countdownTime.seconds },
                  ].map((item, index) => (
                    <div key={item.label} className={`bg-cultural-gradient p-6 rounded-lg text-white text-center animate-scale-in stagger-${index + 1}`}>
                      <div className="text-3xl md:text-4xl font-bold font-playfair mb-2">
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
      <section className="py-20 bg-bengali-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-bengali-red mb-6">
                About Aarohon
              </h2>
              <div className="w-24 h-1 bg-bengali-gold mb-6"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Aarohon Socio-Cultural Club stands as a beacon of Bengali heritage and community spirit. Founded with the vision of preserving our rich cultural traditions while fostering modern community development, we bring together families and individuals who share a passion for celebrating our roots.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission extends beyond cultural celebrations to encompass social responsibility, education, and community welfare. Through our various initiatives, we strive to create a positive impact while maintaining the essence of Bengali culture and values.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From grand festival celebrations like Durga Puja and Kali Puja to educational programs and community service, Aarohon serves as a bridge between tradition and progress, ensuring our cultural legacy continues to thrive for future generations.
              </p>
              <Button className="bg-cultural-gradient hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Learn More About Us
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600" 
                  alt="Bengali Cultural Heritage"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-bengali-red/20 to-bengali-gold/20 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-bengali-gold rounded-full flex items-center justify-center animate-float">
                  <span className="text-2xl">🎭</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-bengali-red mb-4 animate-fade-in-up">
              Gallery Highlights
            </h2>
            <div className="w-24 h-1 bg-bengali-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Relive the moments from our past celebrations and community activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryHighlights.map((item, index) => (
              <Card key={item.title} className={`group overflow-hidden border-2 border-bengali-gold/20 hover:border-bengali-gold transition-all duration-300 hover:shadow-xl cursor-pointer animate-scale-in stagger-${(index % 3) + 1}`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bengali-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-playfair font-bold text-lg mb-1">{item.title}</h3>
                    <p className="flex items-center text-sm">
                      <Image className="w-4 h-4 mr-2" />
                      {item.count}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-playfair font-bold text-lg text-bengali-red mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 border-bengali-red text-bengali-red hover:bg-bengali-red hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              View Complete Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-cultural-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 animate-fade-in-up">
              Community Impact
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Making a difference in our community through cultural preservation and social initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={stat.label} className={`text-center animate-fade-in-up stagger-${index + 1}`}>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-float">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-lato text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bengali-red font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Learn About Our Social Work
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-bengali-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-bengali-red mb-4 animate-fade-in-up">
              Our Sponsors & Partners
            </h2>
            <div className="w-24 h-1 bg-bengali-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Proudly supported by these amazing organizations who share our vision
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={sponsor.name} className={`text-center group animate-scale-in stagger-${(index % 3) + 1}`}>
                <div className="w-20 h-20 bg-white border-2 border-bengali-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:border-bengali-gold transition-all duration-300 group-hover:scale-110 shadow-lg">
                  {sponsor.logo}
                </div>
                <h3 className="font-lato font-semibold text-sm text-bengali-red group-hover:text-bengali-gold transition-colors duration-300">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 border-bengali-red text-bengali-red hover:bg-bengali-red hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              View All Sponsors
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white border-t border-bengali-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-bengali-red mb-4 animate-fade-in-up">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up stagger-1">
            Subscribe to our newsletter for updates on upcoming events and community news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up stagger-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-bengali-gold/30 rounded-full focus:outline-none focus:border-bengali-gold transition-colors duration-300"
            />
            <Button className="bg-cultural-gradient hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
