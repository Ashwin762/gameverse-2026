import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['about','events','updates','sponsors','contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-16 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div onClick={() => navigate('/')} className="font-orbitron font-black text-lg tracking-widest neon-cyan cursor-pointer">
        GAME<span className="neon-magenta">VERSE</span>
      </div>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8">
        {links.map(l => (
          <li key={l}>
            <Link to={l} smooth spy offset={-64} className="font-mono text-xs tracking-widest text-gray-400 hover:text-cyan-400 cursor-pointer uppercase transition-colors">
              {l}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/register')}
        className="hidden md:block font-mono text-xs tracking-widest px-5 py-2 border border-cyan-400 text-cyan-400 clip-hex hover:bg-cyan-400/10 transition-all">
        REGISTER
      </button>

      {/* Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-cyan-400 text-xl">☰</button>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-cyan-500/20 p-6 flex flex-col gap-4 md:hidden">
          {links.map(l => (
            <Link key={l} to={l} smooth spy offset={-64} onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest text-gray-400 hover:text-cyan-400 cursor-pointer uppercase">
              {l}
            </Link>
          ))}
          <button onClick={() => { navigate('/register'); setMenuOpen(false) }}
            className="font-mono text-xs tracking-widest text-cyan-400 text-left">
            REGISTER
          </button>
        </div>
      )}
    </nav>
  )
}