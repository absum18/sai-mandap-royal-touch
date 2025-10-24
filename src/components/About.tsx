import aboutImage from "@/assets/about-mandap.jpg";

const About = () => {
  return (
    <section className="py-20 bg-card" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Sai Mandap
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sai Mandap Light & Decoration offers elegant event setups, stunning floral designs, 
              and royal-themed mandaps for weddings, cultural events, and receptions across Navsari.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience and a passion for creating memorable celebrations, we bring 
              the latest trending themes and professional craftsmanship to every event. Our team is 
              dedicated to transforming your special moments into unforgettable experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <p className="text-primary font-semibold">Professional Team</p>
              </div>
              <div className="bg-secondary/10 px-6 py-3 rounded-lg">
                <p className="text-secondary font-semibold">Timely Service</p>
              </div>
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <p className="text-primary font-semibold">Latest Themes</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3" />
            <img 
              src={aboutImage} 
              alt="Decorated Mandap" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
