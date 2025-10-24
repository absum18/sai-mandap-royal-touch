import { Crown, Sparkles, Flower2, Lamp, Armchair, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Crown,
    title: "Mandap Ceremonies",
    description: "Traditional and contemporary mandap designs with royal aesthetics"
  },
  {
    icon: Star,
    title: "Cultural Events",
    description: "Vibrant decorations for festivals and cultural celebrations"
  },
  {
    icon: Sparkles,
    title: "Receptions",
    description: "Elegant reception stage setups with premium finishes"
  },
  {
    icon: Lamp,
    title: "Light Decoration",
    description: "Stunning lighting arrangements to create magical ambiance"
  },
  {
    icon: Flower2,
    title: "Flower Decor",
    description: "Exquisite floral designs with fresh and artificial flowers"
  },
  {
    icon: Armchair,
    title: "Stage & Furniture",
    description: "Complete stage setup with chairs, tables, and seating arrangements"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive decoration solutions for all your special occasions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
