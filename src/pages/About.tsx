
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-bengali-red mb-4 animate-fade-in-up">
              About Aarohon
            </h1>
            <div className="w-24 h-1 bg-bengali-gold mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
              Discover the story behind our commitment to preserving Bengali culture and building community connections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600" 
                alt="Bengali Cultural Heritage"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-playfair font-bold text-bengali-red mb-6">
                Our Foundation & Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established with the noble vision of creating a cultural bridge that connects generations, Aarohon Socio-Cultural Club serves as a beacon for Bengali heritage preservation and community development. Our journey began with a simple yet powerful belief: culture is the thread that weaves communities together.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we stand as a testament to the power of collective effort, bringing together individuals and families who share a passion for our rich Bengali traditions while embracing modern community development initiatives.
              </p>
              <Button className="bg-cultural-gradient hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Join Our Community
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Cultural Preservation", description: "Maintaining and celebrating Bengali traditions through festivals and events", icon: "🎭" },
              { title: "Community Service", description: "Making a positive impact through education, health, and charity initiatives", icon: "🤝" },
              { title: "Social Connection", description: "Building lasting relationships and fostering community spirit", icon: "❤️" }
            ].map((item, index) => (
              <Card key={item.title} className={`text-center border-2 border-bengali-gold/20 hover:border-bengali-gold transition-all duration-300 hover:shadow-xl animate-scale-in stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-playfair font-bold text-bengali-red mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
