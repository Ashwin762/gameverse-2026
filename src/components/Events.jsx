import React from 'react'
import { motion } from 'framer-motion'
import RadarScan from './backgrounds/RadarScan'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
  })
}

export default function Events() {
  return (
    <section id="events" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020408, #00100a, #020408)' }}>
      <RadarScan />
      <div className="max-w-5xl mx-auto w-full relative z-10">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-cyan-400" /> THE EVENT
          </div>
          <h2 className="font-rdr text-4xl md:text-5xl text-white mb-12">
            How It <span className="neon-cyan">Works</span>
          </h2>
        </motion.div>

        {/* FCFS Alert */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="border border-orange-400/50 bg-orange-400/5 p-5 clip-corner mb-10 flex gap-4 items-start">
          <div className="text-2xl flex-shrink-0">⚡</div>
          <div>
            <div className="font-orbitron font-bold text-orange-400 text-sm tracking-widest mb-1">
              FIRST COME FIRST SERVED
            </div>
            <div className="font-rajdhani text-gray-300 text-base leading-relaxed">
              Team slots are <span className="text-orange-400 font-bold">limited</span>. Shortlisting is based on{' '}
              <span className="text-orange-400 font-bold">FCFS — register early</span> to secure your spot. Once slots are filled, registrations close.
            </div>
          </div>
        </motion.div>

        {/* Problem Statement box */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="border border-cyan-400/20 bg-cyan-400/3 p-8 clip-corner mb-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-orbitron font-black text-[80px] opacity-3 text-cyan-400 select-none tracking-widest">PS</span>
          </div>
          <div className="relative z-10">
            <div className="font-mono text-[10px] tracking-[6px] text-cyan-400 mb-4">PROBLEM STATEMENTS</div>
            <div className="font-rdr text-2xl md:text-4xl text-white mb-4">
              Revealed After<br /><span className="neon-cyan">Final Shortlisting</span>
            </div>
            <div className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              Problem statements will be released exclusively to shortlisted teams. Register now, get shortlisted, then receive your challenge.
            </div>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-widest text-orange-400">
                STAY TUNED · DETAILS DROPPING SOON
              </span>
            </div>
          </div>
        </motion.div>

        {/* Key info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { label: 'REGISTRATION FEE', value: '₹500', sub: 'Per team', color: '#00f5ff' },
            { label: 'PRIZE POOL', value: '₹20,000', sub: 'Total winnings', color: '#39ff14' },
            { label: 'FINALE DATE', value: 'LATE JUNE', sub: 'Offline · AMC Bangalore', color: '#ff6b00' },
          ].map((item, i) => (
            <motion.div key={item.label} custom={i + 3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="border border-white/5 bg-black/30 p-6 clip-corner text-center">
              <div className="font-mono text-[10px] tracking-[4px] text-gray-500 mb-2">{item.label}</div>
              <div className="font-orbitron font-black text-2xl md:text-3xl mb-1" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="font-mono text-[10px] text-gray-600 tracking-widest">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}