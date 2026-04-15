import amcLogo from '../assets/images/amc-logo.png.png'
import React, { useEffect, useRef, useState } from 'react'

const phases = [
  { step: '01', title: 'Problem Statements Released', desc: 'Teams register and receive problem statements. Choose from our curated tracks or bring your own open innovation idea.', active: true },
  { step: '02', title: 'Shortlisting Round', desc: 'Top teams shortlisted based on initial submissions. Only the sharpest ideas make it through.' },
  { step: '03', title: '4-Day Build Sprint', desc: 'Shortlisted teams have 4 days to architect, build and finalize their complete solution.' },
  { step: '04', title: 'Offline Finale — 8 Hours', desc: 'Final teams battle at AMC Engineering College, Bangalore on May 8, 2026. Three winners crowned.' },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="snap-section game-bg min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408 0%, #0a0015 50%, #020408 100%)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* College + Sponsor Badge */}
<div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-white/5">
  <div>
    <div className="font-orbitron font-black text-xl md:text-2xl text-white tracking-wider">AMC ENGINEERING COLLEGE</div>
    <div className="font-orbitron text-sm text-cyan-400 mt-1">DEPARTMENT OF CSE (AI/ML) · BANGALORE</div>
  </div>
  <div className="h-10 w-px bg-white/10 hidden md:block" />
  <div>
    <div className="font-mono text-[10px] tracking-[4px] text-gray-500 mb-1">IN ASSOCIATION WITH</div>
    <div className="font-orbitron font-bold text-lg" style={{ color: '#ffd700', textShadow: '0 0 20px rgba(255,215,0,0.3)' }}>
      GDAI
    </div>
    <div className="font-mono text-[10px] text-gray-500 tracking-wider">GAME DEVELOPER ASSOCIATION OF INDIA</div>
  </div>
</div>
          <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-cyan-400" /> ABOUT THE EVENT
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white leading-tight mb-6">
  What is<br /><span className="neon-cyan">GameVerse?</span>
</h2>
<p className="text-gray-400 text-lg leading-relaxed mb-4 font-light">
  GameVerse 2026 is <span className="text-cyan-400 font-semibold">AMC Engineering College's first-ever game-building hackathon</span> — where participants don't just code, they <span className="text-cyan-400 font-semibold">create games</span>.
</p>
<p className="text-gray-400 text-lg leading-relaxed mb-4 font-light">
  Teams receive <span className="text-cyan-400 font-semibold">gaming-focused problem statements</span> and have <span className="text-cyan-400 font-semibold">4 days</span> to design and build their game. The best teams then battle it out in an <span className="text-cyan-400 font-semibold">8-hour offline finale</span> at AMC Bangalore — where judges play, evaluate and crown the top 3.
</p>
<p className="text-gray-400 text-lg leading-relaxed mb-4 font-light">
  Open to <span className="text-cyan-400 font-semibold">all engineering colleges</span>. Teams of <span className="text-cyan-400 font-semibold">3–4 members</span>. Prize pool of <span className="text-green-400 font-bold text-xl">₹20,000</span>.
</p>
              <div className="flex gap-6 mt-8">
                {[['8 MAY', '2026 FINALE'], ['₹20K', 'PRIZE POOL'], ['3-4', 'TEAM SIZE']].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <div className="font-orbitron font-black text-2xl neon-cyan">{val}</div>
                    <div className="font-mono text-[10px] tracking-widest text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {phases.map((p, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rotate-45 flex-shrink-0 mt-1 ${p.active ? 'bg-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.6)]' : 'border-2 border-cyan-400/40 bg-transparent'}`} />
                    {i < phases.length - 1 && <div className="w-px flex-1 min-h-[48px] bg-cyan-400/20 mt-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="font-mono text-[10px] tracking-[3px] text-pink-400 mb-1">PHASE {p.step}</div>
                    <div className="font-orbitron text-sm font-bold text-white mb-1">{p.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}