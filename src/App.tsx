import { useEffect, useRef, useState } from 'react'
import { motion, MotionConfig } from 'motion/react'
import { ArrowDown, ArrowUpRight, Plus, Minus, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { teamMembers } from './data/team'
import './App.css'

const moments = [
  { src: '/team/team-main.jpg', title: 'Seven people. One shared direction.', label: 'The team' },
  { src: '/team/team-moment-1.jpg', title: 'Making room for every idea.', label: 'In conversation' },
  { src: '/team/team-moment-2.jpg', title: 'The connections behind the work.', label: 'Together' },
  { src: '/team/team-moment-3.jpg', title: 'Practising, refining, moving forward.', label: 'The process' },
]
const pillars = [
  { title: 'Communication', text: 'Good ideas deserve to be understood. We practise clear expression, thoughtful storytelling, and feedback that moves a conversation forward.', detail: 'From impromptu speaking to our capstone presentation, we work on making complex ideas feel simple and accessible.' },
  { title: 'Emotional intelligence', text: 'We make space to listen, understand different perspectives, and support each other under pressure.', detail: 'Active listening and constructive dialogue help us turn differences into understanding and build trust across the team.' },
  { title: 'Collaboration', text: 'Different strengths. Shared responsibility. We build on each other’s ideas and give every member room to contribute.', detail: 'Through role delegation and shared challenges, we learn to match individual strengths with what the team needs.' },
  { title: 'Creative leadership', text: 'Leadership starts with taking initiative and helping others do the same. We bring curiosity, direction, and care to our work.', detail: 'Creating our identity and preparing our final presentation gave us opportunities to make decisions together and lead with purpose.' },
]
const reveal = { initial: { opacity: 0, y: 25 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.7 } }

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openPillar, setOpenPillar] = useState<number | null>(0)
  const [photo, setPhoto] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (photo !== null) dialog.current?.showModal()
    else dialog.current?.close()
  }, [photo])
  useEffect(() => {
    if (photo === null) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [photo])

  return <MotionConfig reducedMotion="user"><div className="site">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><a href="#" className="wordmark" aria-label="Veloctify home"><span className="brand-symbol">v.</span>veloctify<span className="brand-dot">®</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav id="navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{[['Our story', '#symbolism'], ['The people', '#roster'], ['Our approach', '#pillars']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#team" onClick={() => setMenuOpen(false)}>Our moments <ArrowUpRight size={15} /></a></nav>
    </header>
    <main id="main">
      <section className="hero section-wrap">
        <motion.div {...reveal} className="hero-top"><span className="eyebrow"><i /> A collective in motion</span><span className="edition">Soft skills capstone / 2026</span></motion.div>
        <motion.h1 {...reveal} transition={{ duration: 0.9, delay: 0.1 }}>Great things<br />begin with <span className="serif">people.</span><span className="title-dot">●</span></motion.h1>
        <motion.div {...reveal} className="hero-bottom"><p>Seven perspectives. One shared momentum.<br />We’re Veloctify — learning, creating, and growing together.</p><a className="round-link" href="#roster"><span>Meet the people</span><span className="circle"><ArrowDown size={20} /></span></a></motion.div>
        <motion.div {...reveal} className="hero-image"><img src="/team/team-main.jpg" alt="The seven members of Team Veloctify together on stage" fetchPriority="high" /><div className="image-caption"><span>Different minds. A shared purpose.</span><span>Team Veloctify · 2026</span></div></motion.div>
      </section>
      <section id="symbolism" className="story section-wrap section-space"><motion.div {...reveal} className="section-label">01 / Our story</motion.div><motion.div {...reveal} className="story-body"><h2>When ideas<br />gain <span className="serif">momentum.</span></h2><div className="story-copy"><p>Veloctify is built around a simple belief: what we achieve together starts with how we connect.</p><p>Our soft skills journey brings seven different perspectives into one team. Through communication, empathy, and creative thinking, we’re learning to turn individual ideas into shared progress.</p><div className="identity-note"><img src="/logo.jpg" alt="Veloctify’s original azure dragon and V emblem" loading="lazy" /><div><span className="eyebrow">The meaning behind the mark</span><p>Our dragon represents courage and adaptability. The V stands for the trust and shared direction that bring us together.</p></div></div></div></motion.div></section>
      <section id="roster" className="people section-space"><div className="section-wrap"><motion.div {...reveal} className="section-heading"><div><span className="section-label">02 / The people</span><h2>Individual minds.<br /><span className="serif">Collective spirit.</span></h2></div><p>A team is more than a list of names.<br />Here’s what each of us brings to the table.</p></motion.div><div className="team-grid">{teamMembers.map((member, i) => <motion.article {...reveal} key={member.name} className="member"><div className={`portrait tone-${i % 4}`}>{member.image ? <img src={member.image} alt={member.name} loading="lazy" /> : <span className="portrait-initials" aria-label={`${member.name} portrait placeholder`}>{member.initials}<span className="portrait-line" /></span>}<span className="member-number">0{i + 1}</span><span className="portrait-role">{member.role || 'Team member'}</span></div><h3>{member.name}</h3><p className="member-focus">{member.focus}</p><p className="member-description">{member.description}</p></motion.article>)}</div></div></section>
      <section id="pillars" className="approach section-wrap section-space"><motion.div {...reveal} className="approach-intro"><span className="section-label">03 / Our approach</span><h2>The human side<br />of <span className="serif">moving forward.</span></h2><p>Four principles that shape how we work,<br />learn, and show up for each other.</p><span className="approach-mark" aria-hidden="true">↗</span></motion.div><div className="pillar-list">{pillars.map((pillar, i) => <motion.div {...reveal} key={pillar.title} className="pillar"><h3><button aria-expanded={openPillar === i} aria-controls={`pillar-${i}`} onClick={() => setOpenPillar(openPillar === i ? null : i)}><span className="pillar-number">0{i + 1}</span><span>{pillar.title}</span>{openPillar === i ? <Minus size={18} /> : <Plus size={18} />}</button></h3><div id={`pillar-${i}`} className={`pillar-content ${openPillar === i ? 'expanded' : ''}`} inert={openPillar !== i}><div><p>{pillar.text}</p><p>{pillar.detail}</p></div></div></motion.div>)}</div></section>
      <section id="team" className="moments section-wrap section-space"><motion.div {...reveal} className="section-heading"><div><span className="section-label">04 / In the making</span><h2>The work. The laughs.<br /><span className="serif">The moments between.</span></h2></div><p>A few frames from our journey.<br />Small moments that bring us closer.</p></motion.div><div className="moments-grid">{moments.slice(1).map((item, i) => <motion.button {...reveal} key={item.src} className="moment" onClick={() => setPhoto(i + 1)} aria-label={`View photo: ${item.title}`}><div className="moment-image"><img src={item.src} alt={item.title} loading="lazy" /><span className="photo-expand"><ArrowUpRight size={20} /></span></div><span className="moment-label">{item.label} <span>0{i + 1}</span></span><h3>{item.title}</h3></motion.button>)}</div><button className="text-link" onClick={() => setPhoto(0)}>View the team photograph <ArrowUpRight size={17} /></button></section>
      <section className="closing section-wrap"><motion.div {...reveal}><span className="eyebrow">This is just the beginning</span><h2>Better, <span className="serif">together.</span></h2><a className="round-link" href="#roster"><span>Get to know Veloctify</span><span className="circle"><ArrowUpRight size={22} /></span></a></motion.div></section>
    </main>
    <footer className="footer section-wrap"><a className="wordmark" href="#">veloctify.</a><span>Seven minds. Shared momentum.</span><a href="#">Back to top ↑</a><span>© 2026 Team Veloctify</span></footer>
    <dialog ref={dialog} className="lightbox" aria-label="Team photo gallery" onCancel={() => setPhoto(null)} onClick={e => { if (e.target === e.currentTarget) setPhoto(null) }} onKeyDown={e => { if (e.key === 'ArrowRight') setPhoto(p => ((p ?? 0) + 1) % moments.length); if (e.key === 'ArrowLeft') setPhoto(p => ((p ?? 0) + moments.length - 1) % moments.length) }}>
      {photo !== null && <div className="lightbox-content"><button className="lightbox-close" aria-label="Close gallery" onClick={() => setPhoto(null)}><X /></button><img src={moments[photo].src} alt={moments[photo].title} /><div className="lightbox-bar"><button aria-label="Previous photo" onClick={() => setPhoto((photo + moments.length - 1) % moments.length)}><ChevronLeft /></button><p>{moments[photo].title}<small>{photo + 1} / {moments.length}</small></p><button aria-label="Next photo" onClick={() => setPhoto((photo + 1) % moments.length)}><ChevronRight /></button></div></div>}
    </dialog>
  </div></MotionConfig>
}
export default App
