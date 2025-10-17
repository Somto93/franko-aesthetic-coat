import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Franko Paint" className="h-16 w-16 object-contain" />
                <div>
                  <span className="text-xl font-bold text-primary">Franko Paints</span>
                  <p className="text-xs text-muted-foreground italic">The Creative Beauty of Paints</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Providing high-quality painting services and products across Nigeria.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Products", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Our Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Building Painting</li>
                <li>Professional Application</li>
                <li>Color Consultation</li>
                <li>Surface Preparation</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Franko Paints and Painting Services Nigeria. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
