import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe, Clock, User } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      primary: "aarohan.blr@gmail.com",
      secondary: "info@aarohansocio.in",
      description: "General inquiries and information"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      primary: "Anirban Ghosh",
      secondary: "Contact Number Available",
      description: "Direct contact for urgent matters"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website",
      primary: "www.aarohansocio.in",
      secondary: "Official Website",
      description: "Visit our website for latest updates"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      primary: "Whitefield & Kadugodi",
      secondary: "Bangalore, Karnataka",
      description: "Our primary service areas"
    }
  ];

  const keyContacts = [
    {
      name: "Kaustav Chaki",
      role: "President",
      responsibilities: "Overall management and strategic decisions",
      availability: "Available for major inquiries and partnerships",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anirban Ghosh",
      role: "General Secretary",
      responsibilities: "Day-to-day operations and communications",
      availability: "Primary contact for general inquiries",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const inquiryTypes = [
    {
      title: "Membership Inquiries",
      description: "Information about joining Aarohon",
      contact: "aarohan.blr@gmail.com",
      icon: "👥"
    },
    {
      title: "Event Participation",
      description: "Participating in cultural events",
      contact: "Contact Anirban Ghosh",
      icon: "🎭"
    },
    {
      title: "Sponsorship & Partnerships",
      description: "Business partnerships and sponsorships",
      contact: "aarohan.blr@gmail.com",
      icon: "🤝"
    },
    {
      title: "Volunteer Opportunities",
      description: "Getting involved in community service",
      contact: "info@aarohansocio.in",
      icon: "❤️"
    },
    {
      title: "Media & Press",
      description: "Media inquiries and press coverage",
      contact: "aarohan.blr@gmail.com",
      icon: "📰"
    },
    {
      title: "Technical Support",
      description: "Website and technical assistance",
      contact: "info@aarohansocio.in",
      icon: "💻"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Contact Us
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for any inquiries, membership information, or to learn more about our cultural and social initiatives.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Have a question or want to get involved? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="text-center p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    {info.title}
                  </h3>
                  <p className="font-semibold text-muted-foreground mb-1">
                    {info.primary}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {info.secondary}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Contacts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Key Contacts
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Reach out to our leadership team for specific inquiries and assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {keyContacts.map((contact, index) => (
                <Card key={contact.name} className="p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="text-center pb-6">
                    <img 
                      src={contact.image} 
                      alt={contact.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/30"
                    />
                    <CardTitle className="text-2xl font-playfair text-primary">
                      {contact.name}
                    </CardTitle>
                    <p className="text-primary/70 font-semibold">{contact.role}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Responsibilities:</h4>
                        <p className="text-muted-foreground text-sm">
                          {contact.responsibilities}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Availability:</h4>
                        <p className="text-muted-foreground text-sm">
                          {contact.availability}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Types */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                What Can We Help With?
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Different types of inquiries and the best way to reach us for each.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inquiryTypes.map((inquiry, index) => (
                <Card key={inquiry.title} className="p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="text-center p-0">
                    <div className="text-4xl mb-4">{inquiry.icon}</div>
                    <h3 className="text-lg font-playfair font-bold text-primary mb-3">
                      {inquiry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {inquiry.description}
                    </p>
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-primary">
                        Contact: {inquiry.contact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours & Additional Info */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 border-2 border-primary/20">
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    <Clock className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-primary">
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Email Inquiries:</span>
                    <span className="text-muted-foreground">24-48 hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Phone Calls:</span>
                    <span className="text-muted-foreground">Same day</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Urgent Matters:</span>
                    <span className="text-muted-foreground">Within hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Membership:</span>
                    <span className="text-muted-foreground">1-2 days</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-2 border-primary/20">
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    <User className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-primary">
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Service Areas:</h4>
                    <p className="text-muted-foreground">Whitefield & Kadugodi, Bangalore</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Event Locations:</h4>
                    <p className="text-muted-foreground">Community centers and local venues</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Meetings:</h4>
                    <p className="text-muted-foreground">By appointment only</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm text-primary font-semibold">
                      Contact us to schedule a meeting
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              We're here to help and would love to hear from you. Use the form above or reach out directly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:aarohan.blr@gmail.com"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
              >
                Send Email
              </a>
              <a 
                href="/membership"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                Join Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
