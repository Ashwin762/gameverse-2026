import React, { useEffect, useRef } from 'react'

export default function RadarScan() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let angle = 0
    const cx = canvas.width / 2
    const cy = canvas.height / 2
    const maxR = Math.max(canvas.width, canvas.height)

    const dots = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      alpha: 0,
      size: Math.random() * 3 + 1
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid circles
      for (let r = 100; r < maxR; r += 120) {
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(0,245,255,0.05)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Cross lines
      ctx.strokeStyle = 'rgba(0,245,255,0.05)'
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, canvas.height); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(canvas.width, cy); ctx.stroke()

      // Radar sweep
      const grad = ctx.createConicalGradient ? null : null
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(angle)
      const sweep = ctx.createLinearGradient(0, 0, maxR, 0)
      sweep.addColorStop(0, 'rgba(0,245,255,0.3)')
      sweep.addColorStop(1, 'rgba(0,245,255,0)')
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, maxR, -0.3, 0.3)
      ctx.fillStyle = sweep
      ctx.fill()
      ctx.restore()

      // Blinking dots
      dots.forEach(dot => {
        const dotAngle = Math.atan2(dot.y - cy, dot.x - cx)
        const diff = ((angle - dotAngle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2)
        if (diff < 0.3) dot.alpha = 1
        else dot.alpha = Math.max(0, dot.alpha - 0.01)
        if (dot.alpha > 0) {
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0,245,255,${dot.alpha})`
          ctx.fill()
        }
      })

      angle += 0.01
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