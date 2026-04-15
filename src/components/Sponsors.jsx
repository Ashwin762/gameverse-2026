import gdaiLogo from '../assets/images/gdai-logo.png.png'
import React from 'react'

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408, #0a0800, #020408)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-cyan-400" /> SPONSORS
        </div>
        <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-12">Powered <span className="neon-cyan">By</span></h2>

        <div className="flex flex-wrap gap-6">
          {/* GDAI - Confirmed */}
          <div className="card-hover flex-1 min-w-[200px] max-w-[280px] bg-black/40 border border-amber-400/30 p-8 clip-corner text-center">
            <div className="w-20 h-10 bg-amber-400/10 border border-amber-400/20 mx-auto mb-4 flex items-center justify-center">
              <span className="font-mono text-[9px] text-amber-400 tracking-widest">GDAI LOGO</span>
            </div>
            <div className="font-orbitron text-sm font-bold text-white mb-1">GDAI</div>
            <div className="font-mono text-[10px] text-gray-500 mb-3">Game Developer Association of India</div>
            <div className="font-mono text-[9px] tracking-widest text-amber-400">TITLE SPONSOR</div>
          </div>

          {/* Placeholder slots */}
          {['CO-SPONSOR', 'PARTNER'].map(tier => (
            <div key={tier} className="card-hover flex-1 min-w-[200px] max-w-[280px] bg-black/20 border border-white/5 p-8 clip-corner text-center">
              <div className="w-20 h-10 border border-dashed border-white/10 mx-auto mb-4" />
              <div className="font-orbitron text-sm font-bold text-gray-600 mb-1">YOUR NAME HERE</div>
              <div className="font-mono text-[9px] tracking-widest text-gray-600">{tier}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}