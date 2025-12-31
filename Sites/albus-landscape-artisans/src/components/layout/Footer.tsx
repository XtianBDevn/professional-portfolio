import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const footerLinks = {
  services: [
    { href: "/services/landscape-design", label: "Landscape Design" },
    { href: "/services/lawn-maintenance", label: "Lawn Maintenance" },
    { href: "/services/hardscaping", label: "Hardscaping" },
    { href: "/services/irrigation", label: "Irrigation Systems" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/testimonials", label: "Testimonials" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Albus Landscape
              <span className="block text-emerald-400 text-sm font-normal mt-1">
                Artisans
              </span>
            </h3>
            <p className="mb-4 text-sm">
              Transforming outdoor spaces into beautiful, functional landscapes
              that exceed expectations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-emerald-400 flex-shrink-0" />
                <span>123 Garden Way, Richmond, VA 23220</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-emerald-400 transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:info@albuslandscape.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  info@albuslandscape.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="mt-1 text-emerald-400 flex-shrink-0" />
                <span>
                  Mon-Fri: 8AM-6PM
                  <br />
                  Sat: 9AM-4PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} Albus Landscape Artisans. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
