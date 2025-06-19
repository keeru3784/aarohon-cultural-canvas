
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Heart, Gift, QrCode, CreditCard } from "lucide-react";

const Membership = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    familyMembers: ""
  });

  const membershipBenefits = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Priority Event Access",
      description: "Get early access to all cultural events and festivals"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Network",
      description: "Connect with like-minded Bengali families in the area"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Social Impact Participation",
      description: "Be part of our charitable and social work initiatives"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Member Events",
      description: "Access to member-only gatherings and cultural programs"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would send to backend
    console.log("Membership form submitted:", formData);
    alert("Thank you for your membership application! We will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      familyMembers: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Join Aarohon
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Become a member of our vibrant community and help us preserve Bengali culture while making a positive impact in society.
            </p>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Membership Benefits
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Enjoy exclusive benefits and be part of a community that values culture, tradition, and social responsibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {membershipBenefits.map((benefit, index) => (
                <Card key={benefit.title} className="text-center p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Member Registration
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6">
                Fill out the form below to become a member of Aarohon Socio-Cultural Club.
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary text-center">
                  Registration Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-primary font-semibold">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="mt-2 border-primary/30 focus:border-primary"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-primary font-semibold">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="mt-2 border-primary/30 focus:border-primary"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-primary font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-2 border-primary/30 focus:border-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-primary font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-2 border-primary/30 focus:border-primary"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="familyMembers" className="text-primary font-semibold">
                      Number of Family Members
                    </Label>
                    <Input
                      id="familyMembers"
                      type="number"
                      value={formData.familyMembers}
                      onChange={(e) => handleInputChange("familyMembers", e.target.value)}
                      className="mt-2 border-primary/30 focus:border-primary"
                      placeholder="How many family members?"
                      min="1"
                    />
                  </div>

                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary/90 text-secondary px-12 py-3 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Submit Registration
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Support Our Cause
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6">
                Your donations help us organize cultural events and support our social impact initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* QR Code Payment */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    <QrCode className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-primary">
                    Quick Payment
                  </CardTitle>
                  <p className="text-muted-foreground">Scan QR code to donate instantly</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-primary/5 p-8 rounded-lg mb-6">
                    <div className="w-48 h-48 bg-primary/10 border-2 border-primary/30 rounded-lg mx-auto flex items-center justify-center">
                      <div className="text-primary text-4xl">QR</div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      UPI Payment QR Code
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Instant Transfer Available
                  </Badge>
                </CardContent>
              </Card>

              {/* Bank Details */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    <CreditCard className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-primary">
                    Bank Transfer
                  </CardTitle>
                  <p className="text-muted-foreground">Direct bank transfer details</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Account Details</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Account Name:</strong> Aarohon Socio-Cultural Club</p>
                        <p><strong>Account Number:</strong> [To be provided]</p>
                        <p><strong>IFSC Code:</strong> [To be provided]</p>
                        <p><strong>Bank Name:</strong> [To be provided]</p>
                        <p><strong>Branch:</strong> Bangalore</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className="border-primary/30">
                        Contact us for bank details
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                For any queries regarding membership or donations, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:aarohan.blr@gmail.com"
                  className="bg-primary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Email: aarohan.blr@gmail.com
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-secondary transition-all duration-300"
                >
                  Contact Details
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Membership;
