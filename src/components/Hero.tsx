import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mandap.jpg";

const Hero = () => {
  const whatsappNumber = "919974349932";

  const handleBookNow = () => {
    const message = encodeURIComponent("Hello! I would like to book Sai Mandap for my event.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
          Bringing Royal Touch to<br />Every Celebration!
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Mandap, Stage, and Light Decoration with the Latest Trending Themes
        </p>
        <Button 
          size="lg"
          onClick={handleBookNow}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Book Your Event Now
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
