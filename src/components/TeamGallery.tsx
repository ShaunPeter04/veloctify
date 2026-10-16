import { useState, useEffect, useCallback } from 'react'
import { 
  Users, 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  CheckCircle2
} from 'lucide-react'

interface TeamPhoto {
  id: string
  title: string
  subtitle: string
  tag: string
  description: string
  src: string
  isMain?: boolean
}

const photos: TeamPhoto[] = [
  {
    id: 'main',
    title: 'The Veloctify Ensemble',
    subtitle: 'The 7 Visionaries of Team Veloctify',
    tag: 'OFFICIAL SQUAD',
    description: 'United on stage in formal synergy, representing our collective commitment to leadership, empathy, and high-velocity teamwork.',
    src: '/team/team-main.png',
    isMain: true,
  },
  {
    id: 'moment-1',
    title: 'Syndicate Brainstorming',
    subtitle: 'Whiteboard Ideation & Strategy',
    tag: 'STRATEGY PHASE',
    description: 'Deconstructing core soft skills challenges, aligning ideas, and turning spontaneous debates into unified project milestones.',
    src: '/team/team-moment-1.jpg',
  },
  {
    id: 'moment-2',
    title: 'Camaraderie & Poise',
    subtitle: 'Mutual Support & Team Cohesion',
    tag: 'TEAM DYNAMICS',
    description: 'Moments of unforced laughter and mutual trust that turn individual talent into an unbreakable collective force.',
    src: '/team/team-moment-2.jpg',
  },
  {
    id: 'moment-3',
    title: 'Rehearsal & Polish',
    subtitle: 'Refining Presentation Velocity',
    tag: 'ACTIVE REFINEMENT',
    description: 'Honing pitch articulation, synchronizing non-verbal cues, and preparing to captivate the soft skills training cohort.',
    src: '/team/team-moment-3.jpg',
  },
]

export function TeamGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null)
  }, [])

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length)
  }, [selectedPhotoIndex])

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length)
  }, [selectedPhotoIndex])

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    if (selectedPhotoIndex === null) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowRight') nextPhoto()
      else if (e.key === 'ArrowLeft') prevPhoto()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPhotoIndex, closeLightbox, nextPhoto, prevPhoto])

  return (
    <section id="team" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full scroll-mt-20">
      {/* Background Atmosphere Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-600/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <Users className="w-3.5 h-3.5 text-cyan-400" />
          <span>TEAM VELOCTIFY COHORT</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          United in Purpose, Driven by <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Synergy</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
          Meet the 7 minds behind Team Veloctify. Presented in full formal unity, ready to deliver our soft skills capstone with unstoppable energy.
        </p>
      </div>

      {/* MAIN EMPHASIZED GROUP PHOTO */}
      <div className="flex flex-col items-center justify-center mb-20">
        <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl group">
          <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500/40 via-sky-500/25 to-blue-600/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Futuristic Glass Outer Container */}
          <div className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-[#030712] border-2 border-cyan-400/50 shadow-[0_0_60px_rgba(6,182,212,0.3)] backdrop-blur-2xl">
            
            {/* Top HUD Status Bar */}
            <div className="flex items-center justify-between pb-3 px-1 border-b border-cyan-500/20 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider uppercase">
                  OFFICIAL CAPSTONE ENSEMBLE
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40">
                ALL 7 MEMBERS
              </span>
            </div>

            {/* Photo Viewport */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center">
              <img
                src={photos[0].src}
                alt={photos[0].title}
                className="w-full h-auto max-h-[75vh] object-contain block mx-auto filter brightness-[1.03] contrast-[1.04] transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Subtle bottom edge overlay */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Caption Card */}
            <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2">
                  <span>The Veloctify Ensemble</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </h3>
                <p className="font-mono text-xs text-cyan-300/90 mt-1">
                  7 Dynamic Minds • Synchronized Collaboration • Boundless Velocity
                </p>
              </div>

              <button
                onClick={() => openLightbox(0)}
                className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-medium transition-colors cursor-pointer"
                title="View Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Key Team Metrics Beneath Main Photo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mt-10">
          {[
            {
              label: 'Group Cohesion',
              value: '100% Synchronized',
              desc: 'Seamless synergy across diverse soft skill proficiencies.',
            },
            {
              label: 'The Cohort',
              value: '7 Visionary Minds',
              desc: 'Each member bringing distinct communication & leadership spark.',
            },
            {
              label: 'Team Ethos',
              value: 'Fearless Velocity',
              desc: 'Empathy, active listening, and collective accountability.',
            },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors backdrop-blur-sm text-center"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 mb-2.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="font-display text-base sm:text-lg font-bold text-white mb-0.5">
                {metric.value}
              </div>
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider mb-1.5 font-semibold">
                {metric.label}
              </div>
              <p className="text-xs text-slate-300/80 font-light leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECONDARY CANDID TRAINING MOMENTS */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
              <Flame className="w-3.5 h-3.5" />
              <span>THE PROCESS & SESSIONS</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Syndicate Preparation & Moments
            </h3>
          </div>
          <span className="font-mono text-xs text-slate-400">
            Unfiltered training highlights & teamwork
          </span>
        </div>

        {/* 3 Secondary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.slice(1).map((photo, index) => {
            const actualIndex = index + 1
            return (
              <div
                key={photo.id}
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(actualIndex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(actualIndex)
                  }
                }}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[9/16] max-h-[440px] w-full overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-contain rounded-xl filter brightness-[1.01] contrast-[1.03] transform transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] font-semibold text-cyan-300 px-2.5 py-1 rounded-md bg-slate-950/85 border border-cyan-500/40 backdrop-blur-md shadow">
                      {photo.tag}
                    </span>
                  </div>

                  {/* Hover Icon Indicator */}
                  <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-slate-950/85 border border-cyan-500/40 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {photo.title}
                    </h4>
                    <p className="font-mono text-xs text-cyan-400/90 mb-2 font-medium">
                      {photo.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {photo.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px]">Training Capstone</span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                      <span>View Story</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevPhoto()
            }}
            className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-cyan-600 border border-slate-700 transition-all cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextPhoto()
            }}
            className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-cyan-600 border border-slate-700 transition-all cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] rounded-3xl overflow-hidden bg-slate-950 border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.3)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image viewport */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden max-h-[72vh] p-2">
              <img
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].title}
                className="max-h-full max-w-full object-contain"
              />
              {photos[selectedPhotoIndex].isMain && (
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400 text-cyan-300 shadow">
                    ★ MAIN ENSEMBLE
                  </span>
                </div>
              )}
            </div>

            {/* Description bar */}
            <div className="p-5 sm:p-6 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                    {photos[selectedPhotoIndex].tag}
                  </span>
                  <span className="text-xs text-slate-400">
                    Photo {selectedPhotoIndex + 1} of {photos.length}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-white">
                  {photos[selectedPhotoIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-2xl leading-relaxed">
                  {photos[selectedPhotoIndex].description}
                </p>
              </div>

              {/* Thumbnails row */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {photos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`w-12 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedPhotoIndex === idx
                        ? 'border-cyan-400 scale-105 shadow-[0_0_10px_#00f0ff]'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                    aria-label={`View ${p.title}`}
                  >
                    <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
