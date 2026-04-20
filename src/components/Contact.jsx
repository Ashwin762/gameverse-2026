import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
  })
}

const coordinators = [
  { initials: 'C1', name: 'COORDINATOR NAME', role: 'EVENT LEAD', phone: '+91 XXXXX XXXXX' },
  { initials: 'C2', name: 'COORDINATOR NAME', role: 'TECH LEAD', phone: '+91 XXXXX XXXXX' },
  { initials: 'C3', name: 'COORDINATOR NAME', role: 'LOGISTICS', phone: '+91 XXXXX XXXXX' },
  { initials: 'C4', name: 'COORDINATOR NAME', role: 'DESIGN LEAD', phone: '+91 XXXXX XXXXX' },
]

export default function Contact() {
  return (
    <section id="contact" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408, #001010, #020408)' }}>
      <div className="max-w-6xl mx-auto w-full">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-cyan-400" /> CONTACT
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-12">
            Get in <span className="neon-cyan">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: '📍', label: 'VENUE', value: 'AMC Engineering College\nBangalore, Karnataka' },
              { icon: '📅', label: 'FINALE DATE', value: 'Late June 2026\n8-Hour Offline Event' },
              { icon: '✉️', label: 'EMAIL', value: 'gameverse@amcec.ac.in' },
              { icon: '🌐', label: 'SOCIAL MEDIA', value: '@gameverse2026 · Links coming soon' },
            ].map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-cyan-400/30 flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[3px] text-cyan-400 mb-1">{item.label}</div>
                  <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coordinators */}
          <div>
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="font-mono text-[11px] tracking-[3px] text-gray-500 mb-4">COORDINATORS</div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coordinators.map((c, i) => (
                <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="card-hover flex gap-4 items-center bg-black/30 border border-white/5 p-4 clip-corner">
                  <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center font-orbitron text-xs font-bold text-cyan-400 flex-shrink-0">
                    {c.initials}
                  </div>
                  <div>
                    <div className="font-orbitron text-xs font-bold text-white">{c.name}</div>
                    <div className="font-mono text-[10px] text-gray-500 tracking-widest">{c.role}</div>
                    <div className="font-mono text-[10px] text-gray-500 tracking-widest">{c.phone}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="divider mt-16 mb-8" />
          <div className="flex flex-wrap justify-between items-center gap-4 text-center md:text-left">
            <div className="font-orbitron font-black text-lg neon-cyan w-full md:w-auto">
              GAME<span className="neon-magenta">VERSE</span> <span className="text-gray-600">2026</span>
            </div>
            <div className="font-mono text-[10px] text-gray-600 tracking-widest w-full md:w-auto">
              DEPT OF CSE (AI/ML) · AMC ENGINEERING COLLEGE · BANGALORE
            </div>
            <div className="font-mono text-[10px] text-gray-600 tracking-widest w-full md:w-auto">
              © 2026 ALL RIGHTS RESERVED
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}