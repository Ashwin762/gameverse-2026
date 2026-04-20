import React from 'react'
import { motion } from 'framer-motion'
import amcLogo from '../assets/images/AMC.png'
import gdaiLogo from '../assets/images/gdai.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
  })
}

const phases = [
  { step: '01', title: 'Problem Statements Released', desc: 'Teams register and receive gaming-focused problem statements exclusively after shortlisting.', active: true },
  { step: '02', title: 'Shortlisting Round', desc: 'Top teams shortlisted based on FCFS. Only the sharpest ideas make it through.' },
  { step: '03', title: '4-Day Build Sprint', desc: 'Shortlisted teams have 4 days to design and build their complete game.' },
  { step: '04', title: 'Offline Finale — 8 Hours', desc: 'Final teams battle at AMC Engineering College, Bangalore. Three winners crowned.' },
]

export default function About() {
  return (
    <section id="about" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408 0%, #0a0015 50%, #020408 100%)' }}>
      <div className="max-w-6xl mx-auto w-full">

        {/* College + Sponsor Badge */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 pb-8 border-b border-white/5">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-center">

            {/* AMC Logo */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={amcLogo} alt="AMC Engineering College Logo"
                className="h-16 w-16 md:h-28 md:w-28 object-contain" />
              <div>
                <div className="font-orbitron font-black text-base md:text-2xl text-white tracking-wider">
                  AMC ENGINEERING COLLEGE
                </div>
                <div className="font-orbitron text-[10px] md:text-sm text-cyan-400 mt-1">
                  DEPARTMENT OF CSE (AI/ML) · BANGALORE
                </div>
              </div>
            </div>

            {/* X Divider */}
            <div className="flex items-center justify-center gap-3 px-2">
              <div className="h-px w-8 md:w-14 bg-white/20" />
              <span className="font-orbitron font-black text-lg md:text-2xl text-white/80">X</span>
              <div className="h-px w-8 md:w-14 bg-white/20" />
            </div>

            {/* GDAI Logo */}
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <div className="order-2 md:order-1 text-center md:text-right">
                <div className="font-mono text-[10px] tracking-[4px] text-gray-500 mb-1">IN ASSOCIATION WITH</div>
                <div className="font-orbitron font-bold text-base md:text-lg"
                  style={{ color: '#ffd700', textShadow: '0 0 20px rgba(255,215,0,0.3)' }}>
                  GDAI
                </div>
                <div className="font-mono text-[9px] md:text-[10px] text-gray-500 tracking-wider">
                  GAME DEVELOPER ASSOCIATION OF INDIA
                </div>
              </div>
              <img src={gdaiLogo} alt="GDAI Logo"
                className="order-1 md:order-2 h-16 w-16 md:h-28 md:w-28 object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Section Tag */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-cyan-400" /> ABOUT THE EVENT
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-orbitron font-black text-4xl md:text-6xl text-white leading-tight mb-6">
              What is<br /><span className="neon-cyan">GameVerse?</span>
            </motion.h2>

            <motion.p custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mb-4 font-light">
              GameVerse 2026 is <span className="text-cyan-400 font-semibold">AMC Engineering College's first-ever game-building hackathon</span> — where participants don't just code, they <span className="text-cyan-400 font-semibold">create games</span>.
            </motion.p>

            <motion.p custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mb-4 font-light">
              Teams receive <span className="text-cyan-400 font-semibold">gaming-focused problem statements</span> and have <span className="text-cyan-400 font-semibold">4 days</span> to design and build their game. The best teams then battle it out in an <span className="text-cyan-400 font-semibold">8-hour offline finale</span> at AMC Bangalore — where judges play, evaluate and crown the top 3.
            </motion.p>

            <motion.p custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mb-4 font-light">
              Open to <span className="text-cyan-400 font-semibold">all engineering colleges</span>. Teams of <span className="text-cyan-400 font-semibold">3–4 members</span>. Prize pool of <span className="text-green-400 font-bold text-xl">₹20,000</span>.
            </motion.p>

            <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex gap-6 mt-8 flex-wrap">
              {[['LATE JUNE', '2026 FINALE'], ['₹20K', 'PRIZE POOL'], ['3-4', 'TEAM SIZE']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="font-orbitron font-black text-2xl neon-cyan">{val}</div>
                  <div className="font-mono text-[10px] tracking-widest text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-0 mt-8 md:mt-0">
            {phases.map((p, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rotate-45 flex-shrink-0 mt-1 ${p.active
                    ? 'bg-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.6)]'
                    : 'border-2 border-cyan-400/40 bg-transparent'}`} />
                  {i < phases.length - 1 && (
                    <div className="w-px flex-1 min-h-[48px] bg-cyan-400/20 mt-1" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="font-mono text-[10px] tracking-[3px] text-pink-400 mb-1">PHASE {p.step}</div>
                  <div className="font-orbitron text-sm font-bold text-white mb-1">{p.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}