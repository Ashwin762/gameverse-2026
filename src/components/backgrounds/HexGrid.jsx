import React, { useEffect, useRef } from 'react'

export default function HexGrid() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const hexes = []
    const size = 40
    const w = size * 2
    const h = Math.sqrt(3) * size

    for (let row = 0; row < canvas.height / h + 2; row++) {
      for (let col = 0; col < canvas.width / w + 2; col++) {
        const x = col * w * 0.75
        const y = row * h + (col % 2 ? h / 2 : 0)
        hexes.push({ x, y, alpha: Math.random(), speed: 0.005 + Math.random() * 0.01, pulse: Math.random() * Math.PI * 2 })
      }
    }

    const drawHex = (x, y, size, alpha) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 180) * (60 * i - 30)
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.strokeStyle = `rgba(255,215,0,${alpha * 0.3})`
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    let frame = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++
      hexes.forEach(h => {
        h.pulse += h.speed
        const alpha = (Math.sin(h.pulse) + 1) / 2
        drawHex(h.x, h.y, size, alpha)
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

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-40 pointer-events-none" />
}