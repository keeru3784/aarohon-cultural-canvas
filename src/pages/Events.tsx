
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Durga Puja 2025",
      date: "October 15-19, 2025",
      location: "Community Center, Kolkata",
      description: "Join us for the grand celebration of Maa Durga with traditional rituals, cultural programs, and community feast.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600",
      attendees: "500+"
    },
    {
      title: "Kali Puja Celebration",
      date: "November 1, 2025",
      location: "Local Temple Grounds",
      description: "Experience the spiritual celebration of Maa Kali with evening prayers and cultural performances.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600",
      attendees: "300+"
    },
    {
      title: "Cultural Night",
      date: "December 10, 2025",
      location: "City Auditorium",
      description: "An evening of music, dance, and poetry celebrating Bengali arts and literature.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600",
      attendees: "200+"
    }
  ];

  const pastEvents = [
    {
      title: "Durga Puja 2024",
      date: "October 2024",
      description: "A magnificent celebration with over 600 attendees",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400"
    },
    {
      title: "Food Distribution Drive",
      date: "September 2024",
      description: "Community service reaching 150+ families",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400"
    },
    {
      title: "Educational Workshop",
      date: "August 2024",
      description: "Skills development program for local youth",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-cultural-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 animate-fade-in-up">
              Our Events
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up stagger-1">
              From grand cultural celebrations to meaningful community service initiatives
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-bengali-red text-center mb-16 animate-fade-in-up">
              Upcoming Events
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={event.title} className={`overflow-hidden border-2 border-bengali-gold/20 hover:border-bengali-gold transition-all duration-300 hover:shadow-xl group animate-scale-in stagger-${index + 1}`}>
                  <div className="relative h-48">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bengali-red/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-bengali-gold text-bengali-red px-3 py-1 rounded-full text-sm font-semibold">
                      Upcoming
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-bengali-red mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        Expected: {event.attendees}
                      </div>
                    </div>
                    <Button className="w-full bg-cultural-gradient hover:opacity-90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-bengali-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-bengali-red text-center mb-16 animate-fade-in-up">
              Past Events Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <Card key={event.title} className={`overflow-hidden border-2 border-bengali-gold/20 hover:border-bengali-gold transition-all duration-300 hover:shadow-xl group cursor-pointer animate-scale-in stagger-${index + 1}`}>
                  <div className="relative h-48">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bengali-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-playfair font-bold text-lg">{event.title}</h3>
                      <p className="text-sm">{event.date}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-playfair font-bold text-bengali-red mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{event.date}</p>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
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
      </div>
    </Layout>
  );
};

export default Events;
