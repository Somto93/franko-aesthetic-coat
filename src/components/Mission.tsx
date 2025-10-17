import { Target, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Focus",
      description: "We use only the best quality paints and materials for all our services.",
    },
    {
      icon: Users,
      title: "Professional Services",
      description: "Expert painters providing specialist painting and redesign services.",
    },
    {
      icon: Target,
      title: "Customer Transformation",
      description: "Believing in the power of fresh paint to completely transform any space.",
    },
    {
      icon: TrendingUp,
      title: "Industry Leadership",
      description: "Delivering top-tier solutions and surpassing industry benchmarks.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">Our Mission</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 animate-fade-in-up">
            <Card className="bg-card border-border shadow-gold">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                  Franko Paint tends to provide{" "}
                  <span className="text-primary font-semibold">high-quality, professional painting services</span>{" "}
                  and products, focusing on customer satisfaction and transforming buildings through expert application.
                  We aim to be a{" "}
                  <span className="text-primary font-semibold">leader in the industry</span>{" "}
                  by offering specialist painting and redesign services for buildings, with a focus on quality and customer experience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
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

export default Mission;
