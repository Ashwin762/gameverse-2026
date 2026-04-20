import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
  })
}

const updates = [
  { date: 'APR 13\n2026', badge: 'NEW', badgeColor: '#39ff14', title: 'Registrations Now Open', text: 'GameVerse 2026 registrations are officially live. Teams from all colleges welcome.' },
  { date: 'TBA', badge: 'SOON', badgeColor: '#ff6b00', title: 'Problem Statements Drop', text: 'Official problem statements will be released to shortlisted teams shortly.' },
  { date: 'TBA', badge: 'INFO', badgeColor: '#00f5ff', title: 'Shortlist Announcement', text: 'Shortlisted teams will be notified via email and announced here.' },
  { date: 'LATE\nJUNE', badge: 'FINALE', badgeColor: '#ff00ff', title: 'Offline Finale', text: '8-hour offline battle at AMC Engineering College, Bangalore. Three winners crowned.' },
]

export default function Updates() {
  return (
    <section id="updates" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408, #100010, #020408)' }}>
      <div className="max-w-6xl mx-auto w-full">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-cyan-400" /> ANNOUNCEMENTS
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-12">
            Latest <span className="neon-cyan">Updates</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {updates.map((u, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="card-hover flex gap-5 bg-black/30 border border-white/5 p-6 clip-corner">
              <div className="font-mono text-[10px] text-cyan-400 tracking-widest text-center min-w-[44px] whitespace-pre pt-1 leading-relaxed">{u.date}</div>
              <div>
                <span className="font-mono text-[9px] px-2 py-1 tracking-widest mb-3 inline-block"
                  style={{ background: `${u.badgeColor}20`, color: u.badgeColor }}>
                  {u.badge}
                </span>
                <div className="font-orbitron text-sm font-bold text-white mb-2">{u.title}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{u.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}