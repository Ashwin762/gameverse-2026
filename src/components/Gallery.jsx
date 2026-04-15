import React from 'react'

export default function Gallery() {
  const placeholders = [
    { span: 'md:col-span-2 md:row-span-2', label: 'FEATURED' },
    { span: '', label: 'PHOTO' },
    { span: '', label: 'PHOTO' },
    { span: '', label: 'PHOTO' },
    { span: 'md:col-span-2', label: 'WIDE SHOT' },
  ]

  return (
    <section id="gallery" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408, #000a15, #020408)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-cyan-400" /> GALLERY
        </div>
        <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-12">Event <span className="neon-cyan">Gallery</span></h2>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-3" style={{ minHeight: '400px' }}>
          {placeholders.map((p, i) => (
            <div key={i} className={`${p.span} bg-pink-400/5 border border-pink-400/10 flex items-center justify-center min-h-[160px] hover:border-pink-400/30 transition-colors`}>
              <div className="font-mono text-[10px] tracking-widest text-pink-400/30">{p.label} · COMING SOON</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}