import React, { useState } from 'react'
import { motion } from 'framer-motion'

const updates = [
  {
    id: '01',
    date: 'APR 13, 2026',
    badge: 'LIVE NOW',
    badgeColor: '#39ff14',
    title: 'Registrations Open',
    text: 'The gates are open. Teams from all engineering colleges across India can now register for GameVerse 2026. Slots are limited — FCFS.',
    icon: '🎮'
  },
  {
    id: '02',
    date: 'COMING SOON',
    badge: 'UPCOMING',
    badgeColor: '#ff6b00',
    title: 'Problem Statements Drop',
    text: 'The challenge awaits. Problem statements will be revealed exclusively to shortlisted teams. Brace yourselves.',
    icon: '📜'
  },
  {
    id: '03',
    date: 'TBA',
    badge: 'AWAITED',
    badgeColor: '#00f5ff',
    title: 'Shortlist Announced',
    text: 'Only the worthy move forward. Shortlisted teams will be contacted via email and announced on this page.',
    icon: '⚔️'
  },
  {
    id: '04',
    date: 'LATE JUNE 2026',
    badge: 'FINALE',
    badgeColor: '#ff00ff',
    title: 'The Offline Finale',
    text: 'Eight hours. One venue. Three champions. The offline finale at AMC Engineering College, Bangalore will separate legends from the rest.',
    icon: '🏆'
  },
]

export default function Updates() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="updates" className="min-h-screen flex items-center py-24 px-6 md:px-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #020408 0%, #0d0800 40%, #020408 100%)' }}>

      {/* Atmospheric bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-godofwar text-[20vw] opacity-[0.03] text-amber-400 tracking-widest whitespace-nowrap">
          CHRONICLES
        </span>
      </div>

      {/* Diagonal line decoration */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/3 to-transparent hidden md:block" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mb-20">
          <div className="font-mono text-[10px] tracking-[8px] text-amber-400/70 mb-4 uppercase">
            — Dispatches from the field
          </div>
          <h2 className="font-godofwar text-5xl md:text-8xl text-white leading-none tracking-wide">
            THE
          </h2>
          <h2 className="font-godofwar text-5xl md:text-8xl leading-none tracking-wide"
            style={{ color: 'transparent', WebkitTextStroke: '1px rgba(251,191,36,0.6)' }}>
            CHRONICLES
          </h2>
        </motion.div>

        {/* Updates list */}
        <div className="flex flex-col gap-0">
          {updates.map((u, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-b border-white/5 py-8 cursor-default transition-all duration-500"
              style={{ paddingLeft: hovered === i ? '24px' : '0px' }}>

              {/* Hover left border */}
              <div className="absolute left-0 top-0 w-0.5 h-full transition-all duration-500 origin-top"
                style={{
                  background: u.badgeColor,
                  transform: hovered === i ? 'scaleY(1)' : 'scaleY(0)',
                  boxShadow: `0 0 12px ${u.badgeColor}`
                }} />

              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_200px] gap-4 md:gap-8 items-start">

                {/* Number */}
                <div className="font-godofwar text-4xl md:text-5xl transition-all duration-500"
                  style={{ color: hovered === i ? u.badgeColor : 'rgba(255,255,255,0.08)' }}>
                  {u.id}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-mono text-[9px] px-3 py-1 tracking-[3px]"
                      style={{ background: `${u.badgeColor}15`, color: u.badgeColor, border: `1px solid ${u.badgeColor}40` }}>
                      {u.badge}
                    </span>
                    <span className="font-mono text-[10px] text-gray-600 tracking-widest">{u.date}</span>
                  </div>
                  <h3 className="font-orbitron font-black text-xl md:text-2xl text-white mb-3 transition-colors duration-300"
                    style={{ color: hovered === i ? '#fff' : 'rgba(255,255,255,0.8)' }}>
                    {u.title}
                  </h3>
                  <p className="font-rajdhani text-base text-gray-500 leading-relaxed max-w-xl transition-colors duration-300"
                    style={{ color: hovered === i ? 'rgba(200,200,200,0.8)' : undefined }}>
                    {u.text}
                  </p>
                </div>

                {/* Icon */}
                <div className="hidden md:flex items-center justify-end">
                  <span className="text-5xl transition-all duration-500"
                    style={{ opacity: hovered === i ? 1 : 0.15, transform: hovered === i ? 'scale(1.2)' : 'scale(1)' }}>
                    {u.icon}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}