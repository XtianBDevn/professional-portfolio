"use client";

import Link from "next/link";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 min-h-[600px] flex items-center">
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-700/50 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">
              ✨ Serving the Community Since 2010
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block text-emerald-300">Outdoor Paradise</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-emerald-50 mb-8 max-w-2xl leading-relaxed">
            Expert landscape design, maintenance, and hardscaping services that
            bring your vision to life with artisan-level craftsmanship.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              Get Free Quote
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all border-2 border-emerald-600 hover:border-emerald-500"
            >
              <FaPhone className="mr-2" />
              (123) 456-7890
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                15+
              </div>
              <div className="text-emerald-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                500+
              </div>
              <div className="text-emerald-200 text-sm">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                100%
              </div>
              <div className="text-emerald-200 text-sm">
                Satisfaction Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                A+
              </div>
              <div className="text-emerald-200 text-sm">BBB Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
