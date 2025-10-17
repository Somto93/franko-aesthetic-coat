import { Card, CardContent } from "@/components/ui/card";
import paintProducts from "@/assets/paint-products.jpg";
import workerWoman from "@/assets/worker-woman.jpg";
import { Sparkles, Droplet, Shield } from "lucide-react";

const Products = () => {
  const products = [
    { name: "Franko Emulsion Paint", icon: Droplet },
    { name: "Franko Texture Paint", icon: Sparkles },
    { name: "Franko Mineral Stone Paint", icon: Shield },
    { name: "Franko Gloss Paint", icon: Sparkles },
    { name: "Franko Silk/Sateen Paint", icon: Droplet },
    { name: "Franko Matte Paint", icon: Shield },
    { name: "Franko Screeding POP Paint", icon: Sparkles },
    { name: "Franko Putty Paint", icon: Droplet },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">Our Products</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality paints manufactured with precision and care
            </p>
          </div>

          {/* Product Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-lg shadow-gold animate-fade-in-up">
              <img
                src={paintProducts}
                alt="Franko Paint Products"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Premium Range</h3>
                  <p className="text-foreground">Professional quality for every project</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-gold animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <img
                src={workerWoman}
                alt="Quality Assurance"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Quality Tested</h3>
                  <p className="text-foreground">Every batch meets our high standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
