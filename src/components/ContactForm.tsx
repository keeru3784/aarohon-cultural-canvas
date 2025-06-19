
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/sonner";
import emailjs from '@emailjs/browser';
import { Mail, Send, User, Phone, MessageSquare } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form submission started", data);

    try {
      // EmailJS configuration - you'll need to set these up
      const serviceId = 'your_service_id'; // User needs to configure this
      const templateId = 'your_template_id'; // User needs to configure this
      const publicKey = 'your_public_key'; // User needs to configure this

      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        to_email: 'aarohan.blr@gmail.com',
      };

      console.log("Sending email with params:", templateParams);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", response);

      toast("Message sent successfully!", {
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast("Failed to send message", {
        description: "Please try again or contact us directly at aarohan.blr@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl">
      <CardHeader className="text-center bg-primary/5">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-secondary" />
          </div>
        </div>
        <CardTitle className="text-3xl font-playfair font-bold text-primary">
          Send us a Message
        </CardTitle>
        <p className="text-muted-foreground">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your first name" 
                        {...field}
                        className="border-primary/30 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your last name" 
                        {...field}
                        className="border-primary/30 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com" 
                        {...field}
                        className="border-primary/30 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="tel"
                        placeholder="Your phone number" 
                        {...field}
                        className="border-primary/30 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="What is this regarding?" 
                      {...field}
                      className="border-primary/30 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px] border-primary/30 focus:border-primary resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold py-3 text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-secondary mr-2"></div>
                  Sending Message...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </div>
              )}
            </Button>
          </form>
        </Form>

        {/* Email Configuration Notice */}
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-primary font-medium">
            📧 Email Configuration Required
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            To enable email functionality, you need to set up EmailJS with your service ID, template ID, and public key in the ContactForm component.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
