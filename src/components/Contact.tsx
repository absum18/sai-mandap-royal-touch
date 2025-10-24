import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumber = "9974349932";
  const address = "Samodiya Fariya, Eru Chaar Rasta, Navsari, Gujarat";
  const mapUrl = "https://maps.app.goo.gl/BdWjNXKfJaXSApPD7";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="py-20 bg-card" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make your event unforgettable? Contact us today!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">Sunil Nayka</p>
                <a href={`tel:${phoneNumber}`} className="text-primary font-semibold hover:underline">
                  {phoneNumber}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground">{address}</p>
              </div>
            </div>

            <Button 
              onClick={handleCall}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now to Book
            </Button>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sai Mandap Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
