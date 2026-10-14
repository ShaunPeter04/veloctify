import { useState, useEffect, useCallback } from 'react'
import { 
  Crown, 
  Sparkles, 
  Zap, 
  Star,
  CheckCircle2,
  Users,
  X
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role?: string // Only for captain & vice captain
  isLeadership?: boolean
  initials: string
  softSkillSuperpower: string
  traitDescription: string
  colorTheme: {
    accent: string
    border: string
    glow: string
    badgeBg: string
    badgeBorder: string
    badgeText: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: 'c',
    name: 'Ayyappahari P R',
    role: 'Team Captain',
    isLeadership: true,
    initials: 'AP',
    softSkillSuperpower: 'Visionary Direction & Team Alignment',
    traitDescription: 'Steering group momentum with clarity, active listening, and decisive consensus building.',
    colorTheme: {
      accent: 'from-amber-400 via-cyan-300 to-cyan-500',
      border: 'border-cyan-400/60 group-hover:border-cyan-300',
      glow: 'rgba(6, 182, 212, 0.4)',
      badgeBg: 'bg-gradient-to-r from-cyan-950/90 to-blue-950/90',
      badgeBorder: 'border-cyan-400/60',
      badgeText: 'text-cyan-300',
    },
  },
  {
    id: 'vc',
    name: 'Annet Paul T',
    role: 'Vice Captain',
    isLeadership: true,
    initials: 'AT',
    softSkillSuperpower: 'Agile Cohesion & Emotional Intelligence',
    traitDescription: 'Fostering deep mutual trust, synchronizing tasks, and championing inclusive dialogue.',
    colorTheme: {
      accent: 'from-cyan-400 via-sky-300 to-blue-500',
      border: 'border-sky-400/50 group-hover:border-sky-300',
      glow: 'rgba(56, 189, 248, 0.35)',
      badgeBg: 'bg-gradient-to-r from-sky-950/90 to-slate-900/90',
      badgeBorder: 'border-sky-400/50',
      badgeText: 'text-sky-300',
    },
  },
  {
    id: 'm1',
    name: 'Shaun Peter',
    initials: 'SP',
    softSkillSuperpower: 'Creative Catalyst & Lateral Thinking',
    traitDescription: 'Injecting dynamic, unconventional perspectives that spark innovative team breakthroughs.',
    colorTheme: {
      accent: 'from-cyan-400 to-blue-500',
      border: 'border-slate-800 hover:border-cyan-500/50',
      glow: 'rgba(6, 182, 212, 0.25)',
      badgeBg: 'bg-slate-900/80',
      badgeBorder: 'border-slate-700/60',
      badgeText: 'text-slate-300',
    },
  },
  {
    id: 'm2',
    name: 'Joel Jacob',
    initials: 'JJ',
    softSkillSuperpower: 'Articulate Communication & Logic Flow',
    traitDescription: 'Translating complex syndicate strategies into structured, persuasive presentation narratives.',
    colorTheme: {
      accent: 'from-sky-400 to-indigo-500',
      border: 'border-slate-800 hover:border-sky-500/50',
      glow: 'rgba(56, 189, 248, 0.25)',
      badgeBg: 'bg-slate-900/80',
      badgeBorder: 'border-slate-700/60',
      badgeText: 'text-slate-300',
    },
  },
  {
    id: 'm3',
    name: 'Sivani R Anil',
    initials: 'SA',
    softSkillSuperpower: 'Empathetic Resonance & Active Support',
    traitDescription: 'Harmonizing group discussions, maintaining constructive harmony, and encouraging peer confidence.',
    colorTheme: {
      accent: 'from-teal-400 to-cyan-500',
      border: 'border-slate-800 hover:border-teal-500/50',
      glow: 'rgba(20, 184, 166, 0.25)',
      badgeBg: 'bg-slate-900/80',
      badgeBorder: 'border-slate-700/60',
      badgeText: 'text-slate-300',
    },
  },
  {
    id: 'm4',
    name: 'Sajana S kuttiyil',
    initials: 'SK',
    softSkillSuperpower: 'Strategic Adaptability & Focus',
    traitDescription: 'Navigating evolving requirements with composure, precision, and relentless team dedication.',
    colorTheme: {
      accent: 'from-blue-400 to-cyan-400',
      border: 'border-slate-800 hover:border-blue-500/50',
      glow: 'rgba(59, 130, 246, 0.25)',
      badgeBg: 'bg-slate-900/80',
      badgeBorder: 'border-slate-700/60',
      badgeText: 'text-slate-300',
    },
  },
  {
    id: 'm5',
    name: 'Liya Sebastian',
    initials: 'LS',
    softSkillSuperpower: 'Dynamic Execution & Creative Harmony',
    traitDescription: 'Bringing artistic polish, synchronizing fine details, and keeping collective morale at its peak.',
    colorTheme: {
      accent: 'from-cyan-400 to-sky-500',
      border: 'border-slate-800 hover:border-cyan-500/50',
      glow: 'rgba(6, 182, 212, 0.25)',
      badgeBg: 'bg-slate-900/80',
      badgeBorder: 'border-slate-700/60',
      badgeText: 'text-slate-300',
    },
  },
]

export function TeamRoster() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const leaders = teamMembers.filter((m) => m.isLeadership)
  const members = teamMembers.filter((m) => !m.isLeadership)

  const closeModal = useCallback(() => {
    setSelectedMember(null)
  }, [])

  // Keyboard Escape listener & scroll lock for member modal
  useEffect(() => {
    if (!selectedMember) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMember, closeModal])

  return (
    <section id="roster" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full scroll-mt-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TEAM VELOCTIFY ROSTER</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          The Minds of <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Veloctify</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
          United under the philosophy <em>"When Ideas Gain Momentum"</em>. Led with vision, anchored in empathy, and propelled by collective excellence.
        </p>
      </div>

      {/* LEADERSHIP VANGUARD: CAPTAIN & VICE CAPTAIN */}
      <div className="mb-14">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <span className="font-mono text-xs tracking-widest uppercase text-cyan-400 font-semibold flex items-center gap-1.5">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Syndicate Leadership</span>
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedMember(leader)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedMember(leader)
                }
              }}
              className="group relative cursor-pointer rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-slate-900/60 hover:from-cyan-400/60 hover:via-blue-500/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(6,182,212,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {/* Outer ambient glow */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: leader.colorTheme.glow }}
              />

              {/* Card Body */}
              <div className="relative rounded-[22px] p-6 sm:p-7 bg-slate-950/90 border border-slate-800 backdrop-blur-xl h-full flex flex-col justify-between">
                <div>
                  {/* Top Header: Badge & Crest */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative">
                      {/* Monogram Emblem */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-[#030712] border-2 border-cyan-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform duration-300">
                        <span className="font-display font-extrabold text-xl text-white tracking-wider">
                          {leader.initials}
                        </span>
                      </div>
                      <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-slate-950 border border-cyan-400 text-amber-400">
                        <Crown className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Role Pill (Captain or Vice Captain) */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider uppercase">
                        {leader.role}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-2xl font-extrabold text-white group-hover:text-cyan-200 transition-colors mb-2 tracking-tight">
                    {leader.name}
                  </h3>

                  {/* Soft Skill Focus */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-3 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20 font-medium">
                    <Zap className="w-3 h-3" />
                    <span>{leader.softSkillSuperpower}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {leader.traitDescription}
                  </p>
                </div>

                {/* Bottom Footer Accent */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                    Lead Vanguard
                  </span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                    <span>Synergy Active</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SYNDICATE CORE MEMBERS: 5 MEMBERS */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-700" />
          <span className="font-mono text-xs tracking-widest uppercase text-slate-400 font-semibold flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Syndicate Core Members</span>
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-700" />
        </div>

        {/* 5-Member Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {members.map((member) => (
            <div
              key={member.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedMember(member)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedMember(member)
                }
              }}
              className="group relative cursor-pointer rounded-2xl p-0.5 bg-gradient-to-b from-slate-800/80 via-slate-900 to-slate-950 hover:from-cyan-500/50 hover:to-blue-600/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="relative rounded-[15px] p-5 bg-slate-950/85 border border-slate-800/80 group-hover:border-cyan-500/40 backdrop-blur-md h-full flex flex-col justify-between">
                <div>
                  {/* Monogram Crest with Cyber Halo */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-[#030712] border border-cyan-500/30 group-hover:border-cyan-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
                      <span className="font-display font-extrabold text-base text-white tracking-wider group-hover:text-cyan-300 transition-colors">
                        {member.initials}
                      </span>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:animate-ping transition-all" />
                  </div>

                  {/* Name */}
                  <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors mb-2 tracking-tight">
                    {member.name}
                  </h4>

                  {/* Soft Skill Strength Badge */}
                  <div className="text-[11px] font-mono text-cyan-400/90 mb-2.5 font-medium leading-snug">
                    {member.softSkillSuperpower}
                  </div>

                  <p className="text-xs text-slate-300/90 font-light leading-relaxed line-clamp-3">
                    {member.traitDescription}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Team Member</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform font-medium">
                    View Focus →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal on Click */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMember.name} Details`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl p-7 bg-slate-950 border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <span className="font-display text-xl font-black text-white">
                    {selectedMember.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {selectedMember.name}
                  </h3>
                  {selectedMember.role ? (
                    <span className="font-mono text-xs text-amber-300 font-semibold px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/40 inline-flex items-center gap-1 mt-1">
                      <Crown className="w-3 h-3 text-amber-400" />
                      <span>{selectedMember.role}</span>
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-cyan-300 font-medium mt-1 block">
                      Team Veloctify Member
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={closeModal}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                  Soft Skills Contribution
                </span>
                <p className="text-sm font-semibold text-white">
                  {selectedMember.softSkillSuperpower}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                  Syndicate Impact
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {selectedMember.traitDescription}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Capstone Ready</span>
                </span>
                <span>Team Veloctify</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
