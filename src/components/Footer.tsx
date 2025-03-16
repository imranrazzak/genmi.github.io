
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display text-2xl font-semibold text-genmi-600">GenMI</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Exploring the future of generative AI applications in genomics and medical imaging.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-muted-foreground hover:text-genmi-600 text-sm transition-colors">Home</Link>
              <Link to="/team" className="text-muted-foreground hover:text-genmi-600 text-sm transition-colors">Team</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-genmi-600 text-sm transition-colors">Projects</Link>
              <Link to="/publications" className="text-muted-foreground hover:text-genmi-600 text-sm transition-colors">Publications</Link>
              <Link to="/news" className="text-muted-foreground hover:text-genmi-600 text-sm transition-colors">News</Link>
              <Link to="/activities" className="text-muted-foreground hover:text-genmi-600 text-sm transition-colors">Activities</Link>
              <Link to="/about" className="text-muted-foreground hover:text-genmi-600 text-sm transition-colors">About Us</Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:info@genmi-research.org" className="flex items-center space-x-2 text-muted-foreground hover:text-genmi-600 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@genmi-research.org</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 AI Research Blvd, Suite 400<br />Innovation City, IC 98765</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} GenMI Research Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-genmi-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-genmi-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
