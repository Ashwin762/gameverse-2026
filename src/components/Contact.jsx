import React from 'react'

const coordinators = [
  { initials: 'C1', name: 'KAUSHAL K', role: 'EVENT LEAD', phone: '+91 86609 75495' },
  { initials: 'C2', name: 'ANURAG MISHRA', role: 'EVENT COORDINATOR', phone: '+91 89706 97763' },
]

export default function Contact() {
  return (
    <section id="contact" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408, #001010, #020408)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-cyan-400" /> CONTACT
        </div>
        <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-12">Get in <span className="neon-cyan">Touch</span></h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            {[
              { icon: '📍', label: 'VENUE', value: 'AMC Engineering College\nBangalore, Karnataka' },
              { icon: '📅', label: 'FINALE DATE', value: 'May 8, 2026\n8-Hour Offline Event' },
              { icon: '✉️', label: 'EMAIL', value: 'gameverse@amcec.ac.in' },
              { icon: '🌐', label: 'SOCIAL MEDIA', value: '@gameverse2026 · Links coming soon' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-cyan-400/30 flex items-center justify-center text-base flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-mono text-[10px] tracking-[3px] text-cyan-400 mb-1">{item.label}</div>
                  <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[3px] text-gray-500 mb-4">COORDINATORS</div>
            <div className="flex flex-col gap-3">
              {coordinators.map((c, i) => (
                <div key={i} className="card-hover flex gap-4 items-center bg-black/30 border border-white/5 p-4 clip-corner">
                  <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center font-orbitron text-xs font-bold text-cyan-400 flex-shrink-0">{c.initials}</div>
                  <div>
                    <div className="font-orbitron text-xs font-bold text-white">{c.name}</div>
                    <div className="font-mono text-[10px] text-gray-500 tracking-widest">{c.role} · {c.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="divider mt-16 mb-8" />
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="font-orbitron font-black text-lg neon-cyan">GAME<span className="neon-magenta">VERSE</span> <span className="text-gray-600">2026</span></div>
          <div className="font-mono text-[10px] text-gray-600 tracking-widest">DEPT OF CSE (AI/ML) · AMC ENGINEERING COLLEGE · BANGALORE</div>
          <div className="font-mono text-[10px] text-gray-600 tracking-widest">© 2026 ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  )
}