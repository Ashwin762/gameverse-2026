import React, { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01アイウエオカキクケコゲームGAMEVERSE2026'
    const fontSize = 14
    const cols = Math.floor(canvas.width / fontSize)
    const drops = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(2,4,8,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00f5ff'
      ctx.font = `${fontSize}px monospace`
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = i % 3 === 0 ? '#00f5ff' : '#004455'
        ctx.fillText(char, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    const interval = setInterval(draw, 50)
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => { clearInterval(interval); window.removeEventListener('resize', handleResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-20 pointer-events-none" />
}