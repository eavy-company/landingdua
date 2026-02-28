"use client";

import { ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 flex justify-center`}
    >
      <div className={`w-full max-w-7xl rounded-full flex items-center justify-between px-6 py-3 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-lg shadow-black/5" : "bg-white/90 backdrop-blur-md"
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Mock Lotus Logo Icon */}
          <div className="w-8 h-8 flex items-center justify-center -mr-1 text-[#5A4F41]">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M12 22C16.4 22 20 18.4 20 14C20 9 16 5 12 5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 22C7.6 22 4 18.4 4 14C4 9 8 5 12 5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.5"/>
            </svg>
          </div>
          <span className="font-serif text-[28px] mt-1 text-[#2A2825]">Serenique</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] text-[#2A2825] font-medium tracking-tight">
          <li>
            <Link href="/" className="hover:text-[#8b7965] transition flex items-center">Home <ChevronDown className="w-[14px] h-[14px] ml-1 opacity-70"/></Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#8b7965] transition">About Us</Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-[#8b7965] transition">Pricing</Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-[#8b7965] transition flex items-center">Pages <ChevronDown className="w-[14px] h-[14px] ml-1 opacity-70"/></Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-[#8b7965] transition flex items-center">Services <ChevronDown className="w-[14px] h-[14px] ml-1 opacity-70"/></Link>
          </li>
        </ul>

        {/* CTA & Cart */}
        <div className="flex items-center gap-5">
           {/* <button className="relative flex items-center justify-center text-[#2A2825] hover:text-[#8b7965] transition">
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute -top-1 -right-1 text-[11px] font-medium w-[15px] h-[15px] flex items-center justify-center">0</span>
            </button> */}
          <button className="bg-[#6B5A46] hover:bg-[#5a4b3a] text-white px-7 py-3 rounded-full text-[15px] font-medium transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}