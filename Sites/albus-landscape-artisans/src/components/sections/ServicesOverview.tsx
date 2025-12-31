import Link from "next/link";
import {
  FaSeedling,
  FaCut,
  FaHammer,
  FaTint,
  FaTree,
  FaLeaf,
} from "react-icons/fa";

const services = [
  {
    icon: FaSeedling,
    title: "Landscape Design",
    description:
      "Custom landscape designs tailored to your property's unique characteristics and your personal style.",
    href: "/services/landscape-design",
    color: "emerald",
  },
  {
    icon: FaCut,
    title: "Lawn Maintenance",
    description:
      "Regular mowing, edging, fertilization, and seasonal care to keep your lawn healthy and beautiful.",
    href: "/services/lawn-maintenance",
    color: "green",
  },
  {
    icon: FaHammer,
    title: "Hardscaping",
    description:
      "Patios, walkways, retaining walls, and outdoor living spaces built to last with expert craftsmanship.",
    href: "/services/hardscaping",
    color: "slate",
  },
  {
    icon: FaTint,
    title: "Irrigation Systems",
    description:
      "Smart irrigation solutions that conserve water while keeping your landscape lush and vibrant.",
    href: "/services/irrigation",
    color: "blue",
  },
  {
    icon: FaTree,
    title: "Tree & Shrub Care",
    description:
      "Professional pruning, planting, and health maintenance for trees and ornamental shrubs.",
    href: "/services/tree-shrub-care",
    color: "amber",
  },
  {
    icon: FaLeaf,
    title: "Seasonal Cleanup",
    description:
      "Spring and fall cleanup services to prepare your landscape for the changing seasons.",
    href: "/services/seasonal-cleanup",
    color: "orange",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive landscape solutions designed to enhance your outdoor
            living experience
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="text-3xl text-emerald-600 group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all services CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
          >
            View All Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
