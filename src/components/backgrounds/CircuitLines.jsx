import React, { useEffect, useRef } from 'react'

export default function CircuitLines() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: 50 + Math.random() * 150,
      direction: Math.floor(Math.random() * 4),
      progress: 0,
      speed: 0.5 + Math.random() * 1.5,
      alpha: 0.3 + Math.random() * 0.4,
      color: Math.random() > 0.5 ? '0,245,255' : '255,0,255'
    }))

    const draw = () => {
      ctx.fillStyle = 'rgba(2,4,8,0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach(line => {
        line.progress += line.speed
        if (line.progress > line.length) {
          line.x = Math.random() * canvas.width
          line.y = Math.random() * canvas.height
          line.length = 50 + Math.random() * 150
          line.direction = Math.floor(Math.random() * 4)
          line.progress = 0
          line.color = Math.random() > 0.5 ? '0,245,255' : '255,0,255'
        }

        ctx.beginPath()
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
        const [dx, dy] = dirs[line.direction]
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + dx * line.progress, line.y + dy * line.progress)
        ctx.strokeStyle = `rgba(${line.color},${line.alpha})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Node dot at end
        ctx.beginPath()
        ctx.arc(line.x + dx * line.progress, line.y + dy * line.progress, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${line.color},${line.alpha})`
        ctx.fill()
      })
    }

    const interval = setInterval(draw, 16)
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => { clearInterval(interval); window.removeEventListener('resize', handleResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-30 pointer-events-none" />
}