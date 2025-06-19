
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const managingCommittee = [
    {
      name: "Kaustav Chaki",
      designation: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      phone: "Contact Available"
    },
    {
      name: "Anirban Ghosh",
      designation: "General Secretary",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      phone: "Contact Available"
    },
    {
      name: "Member Name",
      designation: "Treasurer",
      image: "https://images.unsplash.com/photo-1494790108755-2616c88ff0be?w=300&h=300&fit=crop&crop=face",
      phone: "Contact Available"
    },
    {
      name: "Member Name",
      designation: "Cultural Secretary",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      phone: "Contact Available"
    }
  ];

  const volunteers = [
    {
      name: "Volunteer 1",
      designation: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Volunteer 2",
      designation: "Media Team",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Volunteer 3",
      designation: "Logistics",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Volunteer 4",
      designation: "Community Outreach",
      image: "https://images.unsplash.com/photo-1494790108755-2616c88ff0be?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
              Our Team
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who make Aarohon's mission possible through their commitment to cultural preservation and community service.
            </p>
          </div>
        </section>

        {/* Managing Committee */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Managing Committee
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managingCommittee.map((member, index) => (
                <Card key={member.name} className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/20 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/30 group-hover:border-primary transition-all duration-300"
                      />
                      <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/30">
                      {member.designation}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {member.phone}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteers */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Our Volunteers
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                The heart of our organization - dedicated volunteers who contribute their time and energy to make every event a success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {volunteers.map((volunteer, index) => (
                <Card key={volunteer.name} className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/20 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={volunteer.image}
                        alt={volunteer.name}
                        className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                      {volunteer.name}
                    </h3>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {volunteer.designation}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Recognition & Awards
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Community Excellence Award</h3>
                <p className="text-muted-foreground">Recognition for outstanding community service and cultural preservation efforts.</p>
              </Card>
              
              <Card className="text-center p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Cultural Heritage Award</h3>
                <p className="text-muted-foreground">Acknowledged for promoting Bengali culture and traditions in the community.</p>
              </Card>
              
              <Card className="text-center p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-2">Social Impact Award</h3>
                <p className="text-muted-foreground">Recognized for significant contributions to education and community welfare.</p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
