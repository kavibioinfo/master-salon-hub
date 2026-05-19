"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scissors, Sparkles, Star, Clock, MapPin, Phone, 
  Heart, Flower2, ChevronRight, Calendar, UserCheck, Menu, X
} from "lucide-react";

// ==========================================
// CENTRAL MULTI-SALON CONFIG MATRIX
// ==========================================
const SALON_DATA: Record<string, any> = {
  // १. मुख्य डीफॉल्ट पेज (Pulse Unisex Salon)
  "default": {
    brandName: "PULSE UNISEX SALON & SPA",
    tagline: "Redefining Luxury Grooming & Absolute Aesthetic Styles",
    subheading: "Latur's premier luxury grooming sanctuary featuring elite international hair stylists, advanced skin therapies, and an ultra-relaxing premium spa lounge.",
    phone: "9967666084", whatsappNumber: "9967666084",
    address: "Main Road, Near Mitramandal Chowk, Above Raymond Shop, Latur - 413512",
    timings: "Open All Days | 9:00 AM – 9:00 PM", rating: "4.9", clients: "2500+"
  },
  // २. जे सलून (J Salon)
  "j-salon": {
    brandName: "J SALON BEST HAIR STYLIST",
    tagline: "Absolute Precision Haircuts & Elite Transformation",
    subheading: "Premium grooming experience tailored for modern trends, featuring advanced hair therapies and signature styling.",
    phone: "9358588383", whatsappNumber: "9358588383",
    address: "Deshpande Complex, Nandi Stop, Ausa Road, Latur - 413512",
    timings: "Open All Days | 9:00 AM – 9:00 PM", rating: "4.8", clients: "1800+"
  },
  // ३. साईराज सलून (Sairaj Salon)
  "sairaj": {
    brandName: "SAIRAJ LUXURY SALON",
    tagline: "Crafting Masterpiece Styles & Executive Grooming",
    subheading: "Experience the ultimate relaxation and luxury styling zone tailored perfectly for Latur's professionals.",
    phone: "9967666084", whatsappNumber: "9967666084",
    address: "Barshi Road, Near Khadgaon Road Chowk, Latur - 413531",
    timings: "Open All Days | 9:00 AM – 9:00 PM", rating: "4.9", clients: "2200+"
  },
  // ४. हबीब्ज सलून (Habibs)
  "habibs": {
    brandName: "HABIB'S HAIR & BEAUTY LOUNGE",
    tagline: "The Legacy of International Hair Sculpting",
    subheading: "Bringing world-class hair treatments, premium absolute spa rituals, and expert bridal makeovers to Latur.",
    phone: "99365 32626", whatsappNumber: "99365 32626",
    address: "Indraprastha Complex, opp. Memsaab, Ganj Golai, Latur, Maharashtra 413512",
    timings: "Open All Days | 10:00 AM – 9:00 PM", rating: "4.7", clients: "3500+"
  },
  // ५. ब्रिलर सलून (Briller)
  "briller": {
    brandName: "BRILLER UNISEX SALON",
    tagline: "Glow Matrix Restoration & Elite Aesthetics",
    subheading: "Specialized luxury hydra-facials, premium detox therapies, and international standard grooming concepts.",
    phone: "98010 40407", whatsappNumber: "98010 40407",
    address: "Savidhan chowk, panyachi taki, Barshi Rd, opposite kesari, nandhan, Prakash Nagar, MIDC, Khadgaon, Maharashtra 413531",
    timings: "Open All Days | 9:00 AM – 9:00 PM", rating: "4.9", clients: "1500+"
  },
  // ६. निम्स सलून (Niims)
  "niims": {
    brandName: "NIIMS PREMIUM SPA & SALON",
    tagline: "Absolute Aesthetic Healing & Skin Wellness",
    subheading: "Latur's advanced aesthetic sanctuary for fully private acoustic spa massage therapies and advanced glow therapies.",
    phone: "99709 31566", whatsappNumber: "99709 31566",
    address: "Ganj goalai, Sale Galli, near rajmata jijau school, mahangarpalika zone, Latur, Maharashtra 413512",
    timings: "Open All Days | 9:00 AM – 9:00 PM", rating: "4.8", clients: "1900+"
  }
};

export default function MultiSalonLander() {
  const [activeSlug, setActiveSlug] = useState("default");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const current = SALON_DATA[activeSlug] || SALON_DATA["default"];

  const handleWhatsApp = () => {
    const msg = `Hello ${current.brandName}! I want to claim my VIP Priority Appointment Slot.`;
    window.open(`https://wa.me/${current.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 antialiased selection:bg-amber-500 selection:text-black">
      
      {/* 🌟 VIP REAL-TIME INTERACTIVE ROUTER SWITCHER (Top Banner) */}
      <div className="bg-amber-500 text-neutral-950 py-2.5 px-4 text-center font-black text-[10px] uppercase tracking-widest flex flex-wrap items-center justify-center gap-3 relative z-50">
        <span>Active Live Demo Selector 👉</span>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(SALON_DATA).map((slug) => (
            <button 
              key={slug} 
              onClick={() => { setActiveSlug(slug); setSubmitted(false); }}
              className={`px-3 py-1 rounded-md text-[9px] font-black transition-all ${activeSlug === slug ? 'bg-neutral-950 text-amber-400 scale-105 shadow-md' : 'bg-amber-600 text-neutral-950 hover:bg-amber-700'}`}
            >
              {slug === "default" ? "1. Pulse Main" : slug}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-12 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif font-bold text-xs md:text-sm tracking-widest text-amber-400 uppercase">
            <Scissors className="h-4 w-4 text-amber-500 rotate-90" />
            <span>{current.brandName}</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => window.open(`tel:${current.phone}`, "_self")} className="border border-neutral-800 text-neutral-400 px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-widest bg-neutral-900/40">
              Call Desk
            </button>
            <button onClick={handleWhatsApp} className="bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-amber-500/10">
              Book VIP Slot
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Lounge */}
      <section className="pt-48 pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 mb-6">
              <Sparkles size={12} className="text-amber-400 animate-pulse" /> Rating: {current.rating}/5 ⭐
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white uppercase leading-[1.1] mb-6">
              {current.tagline}
            </h1>
            <p className="text-neutral-400 text-xs md:text-sm mb-8 leading-relaxed max-w-xl">
              {current.subheading}
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mb-8">
              <div className="p-4 bg-neutral-900/40 border border-neutral-900 rounded-xl flex items-center gap-3">
                <Flower2 className="h-5 w-5 text-amber-400" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Premium</div>
                  <div className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Aesthetic Care</div>
                </div>
              </div>
              <div className="p-4 bg-neutral-900/40 border border-neutral-900 rounded-xl flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-amber-500" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">{current.clients}</div>
                  <div className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Happy Styles</div>
                </div>
              </div>
            </div>
            <button onClick={handleWhatsApp} className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-amber-500/10">
              Claim VIP Priority Token <ChevronRight size={14} />
            </button>
          </div>
          <div className="lg:col-span-5 h-[320px] md:h-[380px] rounded-2xl overflow-hidden border border-neutral-900 p-2 bg-neutral-900/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800" 
              alt="Luxury Hair Studio Setup" 
              className="w-full h-full object-cover rounded-xl filter brightness-90" 
            />
          </div>
        </div>
      </section>

      {/* Appointment Hub */}
      <section className="py-24 border-t border-neutral-900 bg-neutral-900/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12 border border-neutral-900 rounded-3xl grid md:grid-cols-2 gap-12 items-center shadow-2xl">
            <div>
              <h2 className="text-2xl font-serif font-normal uppercase tracking-wider text-white mb-4">Secure Premium Lounge Seat</h2>
              <p className="text-neutral-400 text-[11px] leading-relaxed mb-8">Avoid waiting lines. Generate a real-time digital priority slot token instantly.</p>
              <div className="space-y-4 text-[10px] font-black uppercase tracking-widest text-neutral-300">
                <div className="flex gap-3 items-center"><MapPin size={14} className="text-amber-500" /> <span>{current.address}</span></div>
                <div className="flex gap-3 items-center"><Clock size={14} className="text-amber-500" /> <span>{current.timings}</span></div>
              </div>
            </div>
            <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-900">
              <h3 className="font-serif font-bold text-[10px] uppercase tracking-widest text-amber-400 mb-6 text-center">VIP Appointment Desk</h3>
              {submitted ? (
                <p className="text-amber-400 font-bold text-center py-12 text-[10px] uppercase tracking-widest animate-pulse">Routing Your Lounge Slot to WhatsApp...</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(handleWhatsApp, 1200); }} className="space-y-4">
                  <input type="text" placeholder="Your Name" required className="w-full bg-neutral-900 border border-neutral-900 focus:border-amber-500 rounded-xl px-4 py-3 text-xs outline-none uppercase tracking-wide text-white" />
                  <input type="text" placeholder="WhatsApp Number" required className="w-full bg-neutral-900 border border-neutral-900 focus:border-amber-500 rounded-xl px-4 py-3 text-xs outline-none uppercase tracking-wide text-white" />
                  <button type="submit" className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-black py-3.5 rounded-xl text-xs tracking-widest uppercase shadow-lg">Request Priority Token</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-neutral-950 text-center text-[9px] text-neutral-600 font-bold tracking-widest uppercase">
        © 2026 {current.brandName}. Powered by AyushNexa AI Solutions Latur.
      </footer>
    </div>
  );
}