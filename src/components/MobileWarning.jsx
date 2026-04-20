import React, { useState } from 'react'

export default function MobileWarning() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center pb-6 px-4 md:hidden pointer-events-none">
      <div className="pointer-events-auto bg-black/90 border border-cyan-400/30 backdrop-blur-md p-4 max-w-sm w-full"
        style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
        <div className="flex gap-3 items-start">
          <div className="text-xl flex-shrink-0">🖥️</div>
          <div className="flex-1">
            <div className="font-orbitron text-xs font-bold text-cyan-400 tracking-widest mb-1">
              BEST EXPERIENCED ON DESKTOP
            </div>
            <p className="font-mono text-[10px] text-gray-400 tracking-wider leading-relaxed">
              For the full cinematic GameVerse experience, open on a desktop or laptop.
            </p>
          </div>
          <button onClick={() => setDismissed(true)}
            className="text-gray-500 hover:text-white font-mono text-xs flex-shrink-0 ml-2">
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}