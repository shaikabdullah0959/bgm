import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/bgm-logo.png" 
                alt="Boushahri Group Medical Logo"
                className="w-10 h-10 rounded-lg border border-white/20 bg-white"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-wide">BOUSHAHRI</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-white">Group Medical</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner in the growing medical sector in Kuwait. 
              Delivering excellence in healthcare solutions and medical technologies since 1978.
            </p>
            <div className="flex gap-4 pt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link to="#" key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300">
                  <Icon className="w-4 h-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/divisions" className="hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                  Divisions
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Medical Equipment</li>
              <li>Pharmaceuticals</li>
              <li>Turnkey Projects</li>
              <li>Digital Health Solutions</li>
              <li>Photography Services</li>
              <li>Customer Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-secondary shrink-0 group-hover:animate-bounce" />
                <span>Salmiya, Block 9, Salem Al Mubarak Street<br/>Old Souk P.O.Box 547 Safat 13006, Kuwait</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-secondary shrink-0 group-hover:rotate-12 transition-transform" />
                <span>+965 25710736</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@boushahrigm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Boushahri Group Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
