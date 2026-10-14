import { useState, useEffect, useCallback } from 'react'
import { Navbar } from './components/Navbar'
import { PrismHero } from './components/PrismHero'
import { TeamGallery } from './components/TeamGallery'
import { TeamRoster } from './components/TeamRoster'
import { 
  Sparkles, 
  Flame, 
  Zap, 
  MessageSquare, 
  Brain, 
  Users2, 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  ChevronDown,
  X,
  CheckCircle2
} from 'lucide-react'
import './App.css'

interface PillarItem {
  icon: typeof MessageSquare
  title: string
  desc: string
  badge: string
  color: string
  border: string
  bgAccent: string
  accentBorder: string
  scenario: string
  keyTakeaway: string
}

const pillarsData: PillarItem[] = [
  {
    icon: MessageSquare,
    title: "Articulate Communication",
    desc: "Framing ideas with crystal clarity, persuasive storytelling, and diplomatic feedback loops.",
    badge: "PILLAR 01",
    color: "text-cyan-400",
    border: "group-hover:border-cyan-500/50",
    bgAccent: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/30",
    scenario: "Mastering impromptu speaking drills and simplifying technical concepts into high-impact syndicate presentations.",
    keyTakeaway: "Clear communication reduces cognitive friction and aligns group focus.",
  },
  {
    icon: Brain,
    title: "Emotional Intelligence",
    desc: "Recognizing individual strengths, managing stress constructively, and building deep psychological safety.",
    badge: "PILLAR 02",
    color: "text-sky-400",
    border: "group-hover:border-sky-500/50",
    bgAccent: "bg-sky-500/10",
    accentBorder: "border-sky-500/30",
    scenario: "Active listening sessions that turned interpersonal conflict into constructive dialogue and psychological trust.",
    keyTakeaway: "Empathetic leadership fosters fearless collaboration and team resilience.",
  },
  {
    icon: Users2,
    title: "Synergistic Teaming",
    desc: "Seamless task distribution, active collaboration, and turning diverse viewpoints into unanimous breakthroughs.",
    badge: "PILLAR 03",
    color: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    bgAccent: "bg-blue-500/10",
    accentBorder: "border-blue-500/30",
    scenario: "Dynamic role delegation during timed challenges, ensuring every member operates in their zone of genius.",
    keyTakeaway: "High collective velocity is achieved when individual strengths complement each other.",
  },
  {
    icon: Award,
    title: "Creative Leadership",
    desc: "Inspiring peers through vision, taking calculated creative risks, and maintaining relentless morale.",
    badge: "PILLAR 04",
    color: "text-teal-400",
    border: "group-hover:border-teal-500/50",
    bgAccent: "bg-teal-500/10",
    accentBorder: "border-teal-500/30",
    scenario: "Crafting the bold azure dragon brand identity and unifying our narrative for the final capstone evaluation.",
    keyTakeaway: "Visionary leaders illuminate the path forward and empower others to lead.",
  },
]

export function App() {
  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null)

  const closePillarModal = useCallback(() => {
    setSelectedPillar(null)
  }, [])

  useEffect(() => {
    if (!selectedPillar) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePillarModal()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPillar, closePillarModal])

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Floating Glass Navbar */}
      <Navbar />

      {/* 21st.dev 3D Refraction Prism Hero */}
      <section id="hero" className="relative scroll-mt-20">
        <PrismHero
          eyebrow="TEAM VELOCTIFY • SOFT SKILLS PROGRAM 2026"
          headline="VELOCTIFY"
          description="Where collective synergy meets unstoppable velocity. An experiential showcase of adaptive communication, emotional resonance, and fearless creative execution."
          accent="#00F0FF"
          tint="#dcfce7"
          background="#030712"
          foreground="#F0F9FF"
          meta={[
            "EMPATHIC LEADERSHIP",
            "AGILE TEAM SYNERGY",
            "DYNAMIC ARTICULATION",
            "CREATIVE VELOCITY"
          ]}
          action={
            <a
              href="#team"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Meet The Squad (7 Members)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          }
          secondaryAction={
            <a
              href="#symbolism"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-200 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <Flame className="w-4 h-4 text-cyan-400" />
              <span>The Dragon Spirit</span>
            </a>
          }
        />
      </section>

      {/* Seamless Transition Section & Scroll Prompt */}
      <div className="relative z-10 -mt-16 flex justify-center pointer-events-none pb-12">
        <a
          href="#symbolism"
          className="pointer-events-auto flex flex-col items-center gap-2 text-cyan-400/80 hover:text-cyan-300 transition-colors group cursor-pointer"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase font-semibold">
            Discover Our Story
          </span>
          <div className="w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center bg-cyan-950/40 backdrop-blur-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all">
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </a>
      </div>

      {/* Symbolism & Brand Identity Section */}
      <section id="symbolism" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full scroll-mt-20">
        {/* Subtle Ambient Backing Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Logo Showcase with Neon Dragon Aura */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Pulsing neon halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 rounded-3xl opacity-35 blur-2xl group-hover:opacity-60 transition duration-700" />
              
              {/* Glass Frame Card */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-[#030712] border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <img
                  src="/logo.jpg"
                  alt="Veloctify Dragon Crest"
                  className="w-full max-w-[340px] h-auto object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Meaning & Identity Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs w-fit font-medium">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE VELOCTIFY IDENTITY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              When Ideas <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Gain Momentum.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              At <strong className="text-white font-medium">Veloctify</strong>, our emblem portrays the fierce Azure Dragon entwined with the dimensional letter <strong className="text-white font-medium">“V”</strong>. Created exclusively for our soft skills capstone, it reflects our conviction that technical brilliance only thrives when interpersonal synergy gives it unstoppable momentum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-white text-sm mb-1">Azure Flame</h4>
                <p className="text-xs text-slate-300/80 leading-normal font-light">
                  Illuminated speech, clarity under pressure, and active empathetic listening.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-white text-sm mb-1">Apex Velocity</h4>
                <p className="text-xs text-slate-300/80 leading-normal font-light">
                  Rapid adaptability, friction-free teamwork, and prompt conflict resolution.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-white text-sm mb-1">The Monolith "V"</h4>
                <p className="text-xs text-slate-300/80 leading-normal font-light">
                  Unshakeable group trust, mutual accountability, and shared victory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Team Squad Showcase & Moments */}
      <TeamGallery />

      {/* Syndicate Roster & Member Highlights */}
      <TeamRoster />

      {/* Vision & Core Pillars Preview Section */}
      <section id="pillars" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto w-full scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-4 font-medium">
            <Brain className="w-3.5 h-3.5" />
            <span>SOFT SKILLS MASTERED</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Soft Skills Pillars of Team Veloctify
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Our training journey sharpened the human element behind every technological leap. Click any pillar to explore our syndicate applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarsData.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedPillar(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedPillar(item)
                  }
                }}
                className={`group relative p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 ${item.border} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-2.5 group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Interactive Pillar Modal */}
      {selectedPillar && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedPillar.title} Module`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closePillarModal}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl p-7 bg-slate-950 border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl ${selectedPillar.bgAccent} border ${selectedPillar.accentBorder} flex items-center justify-center`}>
                  <selectedPillar.icon className={`w-6 h-6 ${selectedPillar.color}`} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cyan-400 font-semibold tracking-wider">
                    {selectedPillar.badge}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={closePillarModal}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close pillar module"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                  Core Principle
                </span>
                <p className="text-sm font-light text-slate-200 leading-relaxed">
                  {selectedPillar.desc}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                  Practical Syndicate Scenario
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {selectedPillar.scenario}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                <span className="font-mono text-[10px] text-cyan-300 uppercase tracking-wider block mb-1 font-semibold">
                  Key Takeaway
                </span>
                <p className="text-xs sm:text-sm text-cyan-200 font-medium">
                  {selectedPillar.keyTakeaway}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Interactive Module Active</span>
                </span>
                <span>Team Veloctify</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sleek Modern Footer */}
      <footer className="mt-auto border-t border-slate-900/80 bg-[#02050c] py-10 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Veloctify Logo"
              className="w-9 h-9 rounded-lg border border-cyan-500/30 object-cover"
            />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold text-white tracking-wider">
                VELOCTIFY
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Soft Skills Training Program Showcase 2026
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-4">
            <span>Built with React + Three.js + Tailwind</span>
            <span>•</span>
            <span className="text-cyan-400 font-medium">Team Creativity Project</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
