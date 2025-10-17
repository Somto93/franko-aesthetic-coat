import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      type: "Head Office",
      address: "Umuduruorji Acharaji-Akah Beside Umuaka Timbre Market Along Orlu-Owerri Road, Umuaka Njaba LGA, Imo State, Nigeria",
      phones: ["+234 806 925 1915", "+234 701 061 4310"],
    },
    {
      type: "Branch Office",
      address: "Central School Umuaka (Umuaka Football Stadium) Beside Cotton Lane Along Orlu-Owerri Road, Umuaka, Imo State, Nigeria",
      phones: ["+234 906 649 5013", "+234 806 925 1915"],
    },
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", handle: "@frankopaintsnigeria", url: "https://facebook.com/frankopaintsnigeria" },
    { icon: Twitter, name: "X (Twitter)", handle: "@frankopaints", url: "https://twitter.com/frankopaints" },
    { icon: Instagram, name: "Instagram", handle: "@frankopaintsnigeria", url: "https://instagram.com/frankopaintsnigeria" },
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

          {/* Office Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-gold transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{office.type}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{office.address}</p>
                      <div className="space-y-2">
                        {office.phones.map((phone, idx) => (
                          <div key={idx} className="flex items-center text-foreground">
                            <Phone className="w-4 h-4 text-primary mr-2" />
                            <a href={`tel:${phone}`} className="hover:text-primary transition-colors">{phone}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Follow Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialMedia.map((social, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <social.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{social.name}</h4>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {social.handle}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
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
