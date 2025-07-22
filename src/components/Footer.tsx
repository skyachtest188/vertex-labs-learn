import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { BookOpen, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: "Web Development", href: "/courses" },
      { name: "Data Science", href: "/courses" },
      { name: "AI & Machine Learning", href: "/courses" },
      { name: "Mobile Development", href: "/courses" },
      { name: "Cloud Computing", href: "/courses" },
      { name: "Cybersecurity", href: "/courses" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "/contact" },
      { name: "Press", href: "/contact" },
      { name: "Blog", href: "/contact" },
      { name: "Success Stories", href: "/about" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/contact" },
      { name: "Student Portal", href: "/enrollment" },
      { name: "Technical Support", href: "/contact" },
      { name: "Course Materials", href: "/courses" },
      { name: "Community Forum", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
      { name: "Cookie Policy", href: "/contact" },
      { name: "Refund Policy", href: "/contact" },
      { name: "Academic Integrity", href: "/contact" },
      { name: "Accessibility", href: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-primary-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new courses, industry insights, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="text-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">NeoVertexLabs</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Empowering the next generation of tech innovators through world-class education, 
              hands-on experience, and industry connections.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span>123 Tech Street, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span>info@neovertexlabs.com</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-primary-foreground/80">
            © {currentYear} NeoVertexLabs. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Accreditation & Certifications */}
      <div className="bg-primary-glow border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80 mb-2">
              Accredited by the International Association of Educational Technology
            </p>
            <p className="text-xs text-primary-foreground/60">
              Licensed by the California Bureau for Private Postsecondary Education | BPPE License #123456789
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;