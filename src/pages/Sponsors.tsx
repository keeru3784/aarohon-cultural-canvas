
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Sponsors = () => {
  const platinumSponsors = [
    {
      name: "Heritage Foods",
      logo: "🍽️",
      description: "Premium food partner supporting our cultural events",
      website: "#"
    },
    {
      name: "Bengal Textiles",
      logo: "🧵",
      description: "Traditional clothing and textile sponsor",
      website: "#"
    }
  ];

  const goldSponsors = [
    {
      name: "Cultural Arts Foundation",
      logo: "🎨",
      description: "Supporting arts and cultural initiatives",
      website: "#"
    },
    {
      name: "Community Bank",
      logo: "🏦",
      description: "Financial services and community support",
      website: "#"
    },
    {
      name: "Local Business Association",
      logo: "🏢",
      description: "Network of local businesses supporting community",
      website: "#"
    }
  ];

  const silverSponsors = [
    {
      name: "Tech Solutions",
      logo: "💻",
      description: "Technology and digital services",
      website: "#"
    },
    {
      name: "Green Gardens",
      logo: "🌱",
      description: "Landscaping and decoration services",
      website: "#"
    },
    {
      name: "City Transport",
      logo: "🚌",
      description: "Transportation services for events",
      website: "#"
    },
    {
      name: "Media Partners",
      logo: "📺",
      description: "Promotion and media coverage",
      website: "#"
    }
  ];

  const promoters = [
    {
      name: "Kolkata Cultural Center",
      logo: "🏛️",
      description: "Promoting Bengali culture nationwide",
      website: "#"
    },
    {
      name: "Educational Trust",
      logo: "📚",
      description: "Supporting educational initiatives",
      website: "#"
    },
    {
      name: "Welfare Society",
      logo: "❤️",
      description: "Community welfare and social work",
      website: "#"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
              Sponsors & Promoters
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We are grateful to our sponsors and promoters who share our vision and support our mission to celebrate culture and connect people.
            </p>
          </div>
        </section>

        {/* Platinum Sponsors */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-gray-300 text-gray-800 px-6 py-2 text-lg font-bold mb-4">
                PLATINUM SPONSORS
              </Badge>
              <h2 className="text-4xl font-playfair font-bold text-primary">
                Premier Partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {platinumSponsors.map((sponsor, index) => (
                <Card key={sponsor.name} className="group hover:shadow-2xl transition-all duration-500 border-4 border-gray-300 hover:border-gray-400">
                  <CardContent className="p-12 text-center">
                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {sponsor.logo}
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
                      {sponsor.name}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {sponsor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gold Sponsors */}
        <section className="py-20 bg-yellow-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-400 text-yellow-900 px-6 py-2 text-lg font-bold mb-4">
                GOLD SPONSORS
              </Badge>
              <h2 className="text-4xl font-playfair font-bold text-primary">
                Valued Partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {goldSponsors.map((sponsor, index) => (
                <Card key={sponsor.name} className="group hover:shadow-xl transition-all duration-500 border-2 border-yellow-300 hover:border-yellow-400">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {sponsor.logo}
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                      {sponsor.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {sponsor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Silver Sponsors */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-gray-400 text-gray-800 px-6 py-2 text-lg font-bold mb-4">
                SILVER SPONSORS
              </Badge>
              <h2 className="text-4xl font-playfair font-bold text-primary">
                Supporting Partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {silverSponsors.map((sponsor, index) => (
                <Card key={sponsor.name} className="group hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-gray-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {sponsor.logo}
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                      {sponsor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sponsor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Promoters */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Our Promoters
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Organizations that actively promote our cause and help us reach a wider community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {promoters.map((promoter, index) => (
                <Card key={promoter.name} className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/20 hover:border-primary">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {promoter.logo}
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-3">
                      {promoter.name}
                    </h3>
                    <p className="text-m uted-foreground">
                      {promoter.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join our community of supporters and help us preserve Bengali culture while making a positive impact on society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:aarohan.blr@gmail.com" 
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
              >
                Become a Sponsor
              </a>
              <a 
                href="/contact" 
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sponsors;
