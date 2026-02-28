import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5A4F41] text-white pt-24 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 border-b border-white/20 pb-16">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Ready to Began Your Spa
            <br />
            Treatment Journey
          </h2>
          <button className="flex items-center gap-4 bg-white text-[#5A4F41] px-2 py-2 rounded-full hover:bg-[#FAF8F5] transition shrink-0 group">
            <span className="pl-6 font-medium text-sm">Book a Treatment</span>
            <div className="w-10 h-10 bg-[#5A4F41] text-white rounded-full flex items-center justify-center group-hover:bg-[#4a4034]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center -mr-1 text-white">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 22C16.4 22 20 18.4 20 14C20 9 16 5 12 5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 22C7.6 22 4 18.4 4 14C4 9 8 5 12 5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.5"/>
                </svg>
              </div>
              <span className="font-serif text-3xl tracking-wide">Serenique</span>
            </Link>

            <div className="relative mt-8">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="w-full bg-transparent border border-white/30 rounded-full py-4 pl-6 pr-32 text-sm outline-none focus:border-white/60 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-[#5A4F41] px-6 rounded-full text-sm font-medium hover:bg-[#FAF8F5] transition">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">MAIN PAGES</h4>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Home v1</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Home v2</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Home v3</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Services v1</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Services v2</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">About Us</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">COMPANY</h4>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Pricing</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Pricing single</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Services single</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Blog single</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Book a treatment</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Contact v1</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Contact v2</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">UTILITY PAGES</h4>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Style Guide</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Changelog</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Licenses</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">Password Protected</Link>
              <Link href="/" className="text-sm text-white/80 hover:text-white transition">404 not found</Link>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">CONTACT PAGE</h4>
                <p className="text-sm text-white/80">(505) 888 - 3052</p>
                <p className="text-sm text-white/80">support@webflow.com</p>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">SOCIAL MEDIA</h4>
                <Link href="/" className="text-sm text-white/80 hover:text-white transition">Facebook</Link>
                <Link href="/" className="text-sm text-white/80 hover:text-white transition">Instagram</Link>
                <Link href="/" className="text-sm text-white/80 hover:text-white transition">Twitter</Link>
                <Link href="/" className="text-sm text-white/80 hover:text-white transition">LinkedIn</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-8 md:col-span-4 mt-8 md:mt-0 lg:hidden">
              {/* Extra row for locations on smaller screens */}
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4" />
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">NEW YORK</h4>
              <p className="text-sm text-white/80">
                125 Madison Avenue,
                <br />
                Manhattan, New York, NY 10016
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">LOS ANGELES</h4>
              <p className="text-sm text-white/80">
                842 Sunset Boulevard, West
                <br />
                Hollywood, CA 90069
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© Copyright 2026 | Design & Developed by Webflow</p>
          <p>Powered by Webflow</p>
        </div>
      </div>
    </footer>
  );
}