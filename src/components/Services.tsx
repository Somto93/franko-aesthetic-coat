import { Card, CardContent } from "@/components/ui/card";
import workersFacility from "@/assets/workers-facility.jpg";
import { Paintbrush, Building, Palette, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Building Painting",
      description: "Complete exterior and interior painting for residential and commercial buildings.",
    },
    {
      icon: Paintbrush,
      title: "Professional Application",
      description: "Expert painters ensuring perfect finish and long-lasting results.",
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Professional advice on color selection and design to transform your space.",
    },
    {
      icon: Wrench,
      title: "Surface Preparation",
      description: "Thorough preparation ensuring optimal paint adhesion and durability.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">Our Services</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialist painting and redesign services delivered by professional painters
            </p>
          </div>

          {/* Feature Image */}
          <div className="relative overflow-hidden rounded-lg shadow-gold mb-16 animate-fade-in-up">
            <img
              src={workersFacility}
              alt="Professional Team"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center p-8 md:p-12">
              <div className="max-w-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Team
                </h3>
                <p className="text-lg text-foreground">
                  Our experienced painters are dedicated to delivering exceptional results on every project, 
                  big or small. We believe in the transformative power of quality painting.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
