import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "9974349932";

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              Sai Mandap Light & Decoration
            </h3>
            <p className="text-background/80 leading-relaxed">
              Creating magical moments with royal decorations for weddings and events across Navsari.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                Sunil Nayka - {phoneNumber}
              </p>
              <p className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-1" />
                Samodiya Fariya, Eru Chaar Rasta, Navsari
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sunil.nayka3855?igsh=eGp6YjMweWZ3c3pv" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} Sai Mandap Light & Decoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
