import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import RegisterPage from './pages/RegisterPage'
import IntroOverlay from './components/IntroOverlay'
import introModelUrl from './assets/glb/playstation_5_dualsense.glb?url'

function AppShell() {
  const location = useLocation()
  const [introSeen, setIntroSeen] = useState(false)

  const isHome = location.pathname === '/'

  const handleIntroComplete = useCallback(() => {
    setIntroSeen(true)
  }, [])

  if (isHome && !introSeen) {
    return <IntroOverlay onComplete={handleIntroComplete} modelUrl={introModelUrl} />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App