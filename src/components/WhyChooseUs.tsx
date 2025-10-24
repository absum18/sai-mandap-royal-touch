import { TrendingUp, Clock, Crown } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Latest Trending Themes",
      description: "Stay ahead with contemporary designs and traditional elegance"
    },
    {
      icon: Clock,
      title: "Professional Setup & Timely Service",
      description: "Punctual execution with attention to every detail"
    },
    {
      icon: Crown,
      title: "Royal Touch in Every Event",
      description: "Premium quality materials and craftsmanship guaranteed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with Sai Mandap Light & Decoration
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
