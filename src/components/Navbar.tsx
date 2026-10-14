import { useState, useEffect } from "react"
import { ChevronRight, Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand & Dragon Crest */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="relative">
            {/* Ambient Cyan Glow behind logo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/logo.jpg"
              alt="Team Veloctify Emblem"
              className="relative w-11 h-11 object-cover rounded-xl border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.5)] transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-['Syne'] text-lg sm:text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                VELOCTIFY
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-cyan-400/80 uppercase">
              Synergy & Velocity
            </span>
          </div>
        </a>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
          <a
            href="#hero"
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all duration-200"
          >
            Refraction
          </a>
          <a
            href="#symbolism"
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all duration-200"
          >
            Dragon Crest
          </a>
          <a
            href="#team"
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all duration-200"
          >
            Squad Photo
          </a>
          <a
            href="#roster"
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all duration-200"
          >
            Members
          </a>
          <a
            href="#pillars"
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all duration-200"
          >
            Pillars
          </a>
        </nav>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 font-mono text-[10px] tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>CAPSTONE READY</span>
          </div>
          <a
            href="#vision"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.65)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Deck</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 rounded-lg bg-slate-900/60 border border-slate-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 border-b border-cyan-500/20 px-6 py-5 flex flex-col gap-4 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            Refraction Hero
          </a>
          <a
            href="#symbolism"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            Dragon Crest & Identity
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            Squad Photo Showcase
          </a>
          <a
            href="#roster"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
          >
            Team Members (7)
          </a>
          <a
            href="#pillars"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            Soft Skills Pillars
          </a>
          <div className="pt-2 border-t border-slate-800">
            <a
              href="#vision"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              <span>Explore Deck</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
