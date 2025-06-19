
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Heart, BookOpen, Stethoscope } from "lucide-react";

const SocialImpact = () => {
  const communityPrograms = [
    {
      title: "Food Distribution Drive",
      date: "Monthly",
      participants: "50+ families",
      description: "Regular distribution of food packets to underprivileged families in the community.",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=400&h=300&fit=crop",
      impact: "600+ meals distributed monthly"
    },
    {
      title: "Cultural Heritage Preservation",
      date: "Ongoing",
      participants: "100+ community members",
      description: "Teaching traditional Bengali art, music, and dance to preserve our cultural heritage.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      impact: "25+ cultural sessions conducted"
    },
    {
      title: "Community Clean-up Drives",
      date: "Quarterly",
      participants: "30+ volunteers",
      description: "Environmental initiatives to keep our neighborhoods clean and green.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      impact: "5+ locations cleaned annually"
    }
  ];

  const educationInitiatives = [
    {
      title: "Free Tutoring Program",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Providing free tutoring services to underprivileged children in basic subjects.",
      beneficiaries: "40+ students",
      duration: "Year-round"
    },
    {
      title: "Digital Literacy Classes",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Teaching basic computer skills and digital literacy to adults and seniors.",
      beneficiaries: "25+ adults",
      duration: "Weekend sessions"
    },
    {
      title: "Scholarship Program",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Merit-based scholarships for deserving students from economically weak backgrounds.",
      beneficiaries: "10+ students annually",
      duration: "Academic year"
    }
  ];

  const healthInitiatives = [
    {
      title: "Health Awareness Camps",
      icon: <Stethoscope className="w-8 h-8" />,
      description: "Organizing health check-up camps and awareness sessions about preventive healthcare.",
      beneficiaries: "200+ people",
      frequency: "Bi-annually"
    },
    {
      title: "Mental Health Support",
      icon: <Heart className="w-8 h-8" />,
      description: "Counseling sessions and mental health awareness programs for community members.",
      beneficiaries: "50+ individuals",
      frequency: "Monthly"
    },
    {
      title: "Medicine Distribution",
      icon: <Stethoscope className="w-8 h-8" />,
      description: "Providing essential medicines to families who cannot afford them.",
      beneficiaries: "30+ families",
      frequency: "As needed"
    }
  ];

  const charityWork = [
    {
      title: "Emergency Relief Fund",
      amount: "₹2,50,000+",
      description: "Financial assistance provided to families during medical emergencies and natural disasters.",
      cases: "15+ cases supported"
    },
    {
      title: "Educational Support Fund",
      amount: "₹1,50,000+",
      description: "Funding for books, uniforms, and educational materials for underprivileged children.",
      cases: "50+ children supported"
    },
    {
      title: "Community Development",
      amount: "₹3,00,000+",
      description: "Investment in community infrastructure and facilities improvement projects.",
      cases: "5+ projects completed"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Beneficiary Parent",
      message: "Aarohon's tutoring program has helped my daughter improve her grades significantly. The volunteers are dedicated and caring.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c88ff0be?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "Community Member",
      message: "During my family's medical emergency, Aarohon's support was invaluable. They truly care about the community.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
              Social Impact
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Making a meaningful difference in our community through dedicated social work, education, health initiatives, and charitable activities.
            </p>
          </div>
        </section>

        {/* Community Programs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Community Programs
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {communityPrograms.map((program, index) => (
                <Card key={program.title} className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/20 hover:border-primary overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-all duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary group-hover:text-primary/80 transition-colors">
                      {program.title}
                    </CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-primary/30">
                        <Calendar className="w-3 h-3 mr-1" />
                        {program.date}
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        <Users className="w-3 h-3 mr-1" />
                        {program.participants}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-primary">Impact: {program.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Initiatives */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Education Initiatives
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Empowering communities through education and skill development programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationInitiatives.map((initiative, index) => (
                <Card key={initiative.title} className="text-center p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-4 flex justify-center">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {initiative.description}
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-full">
                      {initiative.beneficiaries}
                    </Badge>
                    <Badge variant="outline" className="block w-full border-primary/30">
                      {initiative.duration}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Health Initiatives */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Health Initiatives
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Promoting health and wellness in our community through various healthcare programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {healthInitiatives.map((initiative, index) => (
                <Card key={initiative.title} className="text-center p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-4 flex justify-center">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foregroup mb-4">
                    {initiative.description}
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-full">
                      {initiative.beneficiaries}
                    </Badge>
                    <Badge variant="outline" className="block w-full border-primary/30">
                      {initiative.frequency}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Charity Work */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Charitable Activities
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Financial support and assistance provided to those in need within our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {charityWork.map((charity, index) => (
                <Card key={charity.title} className="p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">{charity.amount}</div>
                    <h3 className="text-xl font-playfair font-bold text-primary">
                      {charity.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-center">
                    {charity.description}
                  </p>
                  <Badge variant="secondary" className="w-full justify-center">
                    {charity.cases}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Community Stories
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Hear from the people whose lives have been touched by our initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4 italic">
                        "{testimonial.message}"
                      </p>
                      <div>
                        <h4 className="font-bold text-primary">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Be part of our social impact initiatives and help us make a difference in more lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/membership" 
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
              >
                Become a Volunteer
              </a>
              <a 
                href="mailto:aarohan.blr@gmail.com" 
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                Support Our Cause
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SocialImpact;
