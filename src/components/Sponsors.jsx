import React from 'react'
import { motion } from 'framer-motion'
import gdaiLogo from '../assets/images/gdai.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
  })
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408, #0a0800, #020408)' }}>
      <div className="max-w-6xl mx-auto w-full">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-cyan-400" /> SPONSORS
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-12">
            Powered <span className="neon-cyan">By</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">

          {/* GDAI */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="card-hover w-full sm:w-auto sm:flex-1 min-w-[200px] max-w-[320px] bg-black/40 border border-amber-400/30 p-8 clip-corner text-center mx-auto sm:mx-0">
            <img
              src={gdaiLogo}
              alt="GDAI"
              className="h-16 object-contain mx-auto mb-4"
              style={{ maxWidth: '180px', filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(255,215,0,0.3))' }}
            />
            <div className="font-orbitron text-sm font-bold text-white mb-1">GDAI</div>
            <div className="font-mono text-[10px] text-gray-500 mb-3">Game Developer Association of India</div>
            <div className="font-mono text-[9px] tracking-widest text-amber-400">TITLE SPONSOR</div>
          </motion.div>

          {/* Placeholder slots */}
          {['CO-SPONSOR', 'PARTNER'].map((tier, i) => (
            <motion.div key={tier} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="card-hover w-full sm:w-auto sm:flex-1 min-w-[200px] max-w-[320px] bg-black/20 border border-white/5 p-8 clip-corner text-center mx-auto sm:mx-0">
              <div className="w-20 h-10 border border-dashed border-white/10 mx-auto mb-4" />
              <div className="font-orbitron text-sm font-bold text-gray-600 mb-1">YOUR NAME HERE</div>
              <div className="font-mono text-[9px] tracking-widest text-gray-600">{tier}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}