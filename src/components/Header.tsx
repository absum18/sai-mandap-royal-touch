import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const phoneNumber = "9974349932";
  const whatsappNumber = "919974349932";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleQuote = () => {
    const message = encodeURIComponent("Hello! I would like to get a quote for event decoration.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Sai Mandap Light & Decoration
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Sunil Nayka</span> - {phoneNumber}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Samodiya Fariya, Eru Chaar Rasta, Navsari
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              onClick={handleQuote}
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
