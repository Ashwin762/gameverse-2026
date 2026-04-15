import gow from '../assets/images/gow.jpg.jpg'
import gta6 from '../assets/images/gta6.jpg.jpg'
import spiderman from '../assets/images/spiderman.jpg.jpg'
import rdr from '../assets/images/rdr.jpg.jpg'
import witcher from '../assets/images/witcher.jpg.jpg'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const GAMES = [
  { name: 'GOD OF WAR', color: '#8B0000', accent: '#ff4444', bg: gow },
  { name: 'RED DEAD REDEMPTION', color: '#1a0a00', accent: '#ff6b00', bg: rdr },
  { name: 'GTA VI', color: '#0a001a', accent: '#ff00ff', bg: gta6 },
  { name: 'SPIDER-MAN', color: '#00001a', accent: '#00f5ff', bg: spiderman },
  { name: 'THE WITCHER', color: '#0a0a00', accent: '#ffd700', bg: witcher },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [days, setDays] = useState('--')
  const [hours, setHours] = useState('--')
  const [mins, setMins] = useState('--')
  const [secs, setSecs] = useState('--')
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % GAMES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const target = new Date('2026-05-08T09:00:00')
    const tick = setInterval(() => {
      const diff = target - new Date()
      if (diff <= 0) return clearInterval(tick)
      setDays(String(Math.floor(diff / 86400000)).padStart(2, '0'))
      setHours(String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'))
      setMins(String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'))
      setSecs(String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'))
    }, 1000)
    return () => clearInterval(tick)
  }, [])

  const game = GAMES[current]

  return (
    <section id="hero" className="snap-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${game.bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease'
  }}>

    {/* Dark overlay */}
<div className="absolute inset-0 bg-black/60" style={{ transition: 'background 1s ease' }} />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              background: game.accent,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }} />
        ))}
      </div>

      {/* Game name watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-orbitron font-black text-[12vw] opacity-5 tracking-widest select-none"
          style={{ color: game.accent, transition: 'color 1s ease' }}>
          {game.name}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-16">

        {/* Title */}
        <h1 className="font-godofwar leading-none mb-4">
  <span className="block text-white text-[clamp(80px,14vw,180px)] tracking-wider">GAME</span>
  <span className="block tracking-wider text-[clamp(80px,14vw,180px)]"
    style={{ color: 'transparent', WebkitTextStroke: `2px ${game.accent}`, transition: 'all 1s ease' }}>
    VERSE
  </span>
</h1>

        {/* Year */}
        <div className="font-orbitron text-[clamp(12px,2vw,20px)] tracking-[12px] mb-8"
          style={{ color: game.accent }}>
          — 2 0 2 6 —
        </div>

        {/* Tagline */}
        <p className="font-rajdhani text-lg text-gray-400 max-w-xl mx-auto mb-8 font-light">
          A <span style={{ color: game.accent }}>4-day gameathon</span> where teams build solutions to epic problem statements. The finale? An{' '}
          <span style={{ color: game.accent }}>8-hour offline battle</span> at AMC Bangalore.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <button
            onClick={() => navigate('/register')}
            className="font-mono text-sm tracking-widest px-8 py-3 clip-hex font-bold transition-all hover:scale-105"
            style={{ background: game.accent, color: '#000' }}>
            REGISTER NOW
          </button>
          <Link to="about" smooth offset={-64}>
            <button
              className="font-mono text-sm tracking-widest px-8 py-3 clip-hex border transition-all hover:bg-white/5"
              style={{ borderColor: game.accent, color: game.accent }}>
              LEARN MORE
            </button>
          </Link>
        </div>

        {/* Countdown */}
        <div>
          <div className="font-mono text-[10px] tracking-[4px] text-gray-500 mb-4">▶ OFFLINE FINALE IN</div>
          <div className="flex gap-6 justify-center items-start">
            {[['DAYS', days], ['HRS', hours], ['MIN', mins], ['SEC', secs]].map(([unit, val], i) => (
              <React.Fragment key={unit}>
                {i > 0 && (
                  <span className="font-orbitron text-3xl opacity-30 pt-1" style={{ color: game.accent }}>:</span>
                )}
                <div className="text-center">
                  <div className="font-orbitron font-black text-4xl md:text-5xl"
                    style={{ color: game.accent, textShadow: `0 0 20px ${game.accent}80` }}>
                    {val}
                  </div>
                  <div className="font-mono text-[9px] tracking-[3px] text-gray-500 mt-1">{unit}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Game switcher dots */}
        <div className="flex gap-2 justify-center mt-8">
          {GAMES.map((g, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === current ? g.accent : '#333',
                transform: i === current ? 'scale(1.5)' : 'scale(1)'
              }} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="font-mono text-[10px] tracking-widest text-gray-500">SCROLL</div>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}