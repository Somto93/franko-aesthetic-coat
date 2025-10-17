import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+234 XXX XXX XXXX",
      action: "Call Us",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@frankopaint.com",
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nigeria",
      action: "Get Directions",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space? Contact us today for a consultation
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground mb-4">{info.details}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-secondary to-card border-border shadow-gold animate-fade-in-up">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the creative beauty of professional painting. Let our expert team transform your space 
                with premium quality paints and exceptional service.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold">
                Request a Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
