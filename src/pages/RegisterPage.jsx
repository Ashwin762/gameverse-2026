import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [members, setMembers] = useState([
    { name: '', usn: '', college: '' },
    { name: '', usn: '', college: '' }
  ])
  const [form, setForm] = useState({
    teamName: '', leaderName: '', leaderUSN: '',
    leaderBranch: '', leaderYear: '', leaderEmail: '',
    leaderPhone: '', leaderCollege: '', psChoice: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const updateMember = (i, k, v) => {
    const m = [...members]
    m[i][k] = v
    setMembers(m)
  }
  const addMember = () => {
    if (members.length < 3) setMembers([...members, { name: '', usn: '', college: '' }])
  }

  const submit = async () => {
    if (!form.teamName || !form.leaderName || !form.leaderEmail || !form.leaderPhone || !form.leaderCollege) {
      setError('Please fill all required fields marked with *')
      return
    }
    setLoading(true)
    setError('')
    const { error: err } = await supabase.from('registrations').insert([{
      team_name: form.teamName,
      leader_name: form.leaderName,
      leader_usn: form.leaderUSN,
      leader_branch: form.leaderBranch,
      leader_year: form.leaderYear,
      leader_email: form.leaderEmail,
      leader_phone: form.leaderPhone,
      leader_college: form.leaderCollege,
      ps_choice: form.psChoice,
      members: members.filter(m => m.name),
      registered_at: new Date().toISOString()
    }])
    setLoading(false)
    if (err) { setError('Submission failed. Please try again.'); return }
    setSuccess(true)
  }

  const inputClass = "w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 font-rajdhani text-base outline-none focus:border-cyan-400 focus:bg-gray-800 transition-all rounded-none"
  const labelClass = "block font-mono text-[11px] tracking-[3px] text-cyan-400 mb-2"

  if (success) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6"
      style={{ background: 'radial-gradient(ellipse at center, #001a10 0%, #020408 70%)' }}>
      <div className="text-center border border-green-400/30 bg-green-400/5 p-12 max-w-md w-full">
        <div className="text-5xl mb-6">🎮</div>
        <div className="font-orbitron font-black text-2xl text-green-400 mb-4">REGISTRATION RECEIVED!</div>
        <p className="font-mono text-sm text-gray-400 tracking-wider leading-relaxed mb-8">
          Your team has been logged into the system. Watch this space for shortlisting updates. Remember — slots are FCFS!
        </p>
        <button onClick={() => navigate('/')}
          className="font-mono text-xs tracking-widest px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all">
          ← BACK TO HOME
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen py-20 px-6 md:px-12"
      style={{ background: 'radial-gradient(ellipse at top, #001020 0%, #020408 60%)' }}>

      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10">
        <button onClick={() => navigate('/')} className="font-mono text-xs tracking-widest text-gray-500 hover:text-cyan-400 transition-colors mb-8 flex items-center gap-2">
          ← BACK TO HOME
        </button>

        <div className="font-orbitron font-black text-lg tracking-widest neon-cyan mb-1">
          GAME<span className="neon-magenta">VERSE</span> <span className="text-gray-600">2026</span>
        </div>
        <h1 className="font-orbitron font-black text-4xl md:text-5xl text-white mt-4 mb-2">
          Team <span className="neon-cyan">Registration</span>
        </h1>
        <p className="font-mono text-xs tracking-widest text-gray-500 mb-6">
          TEAMS OF 3–4 · OPEN TO ALL COLLEGES · ₹500 ENTRY FEE
        </p>

        {/* FCFS Alert */}
        <div className="border border-orange-400/50 bg-orange-400/5 p-4 flex gap-3 items-start mb-2">
          <span className="text-orange-400 text-lg flex-shrink-0">⚡</span>
          <div>
            <span className="font-orbitron text-xs font-bold text-orange-400 tracking-widest">FIRST COME FIRST SERVED — </span>
            <span className="font-rajdhani text-gray-300 text-sm">Limited slots available. Register early to secure your spot!</span>
          </div>
        </div>

        {/* Live status */}
        <div className="flex items-center gap-3 border border-green-400/20 bg-green-400/5 px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="font-mono text-[11px] tracking-widest text-green-400">REGISTRATION OPEN · LIVE DATABASE CONNECTED</span>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto">

        {/* Team Name */}
        <div className="mb-8">
          <label className={labelClass}>TEAM NAME *</label>
          <input
            type="text"
            value={form.teamName}
            onChange={e => update('teamName', e.target.value)}
            placeholder="Enter your team name"
            className={inputClass}
          />
        </div>

        {/* Leader Section */}
        <div className="border border-cyan-400/20 p-6 mb-8"
          style={{ background: 'rgba(0,245,255,0.02)' }}>
          <div className="font-mono text-[11px] tracking-[4px] text-cyan-400 mb-6 pb-3 border-b border-cyan-400/10">
            TEAM LEADER DETAILS
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>FULL NAME *</label>
              <input type="text" value={form.leaderName} onChange={e => update('leaderName', e.target.value)}
                placeholder="Leader's full name" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>USN</label>
              <input type="text" value={form.leaderUSN} onChange={e => update('leaderUSN', e.target.value)}
                placeholder="1AM22CS000" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>BRANCH</label>
              <input type="text" value={form.leaderBranch} onChange={e => update('leaderBranch', e.target.value)}
                placeholder="CSE / ECE / ME..." className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>YEAR</label>
              <select value={form.leaderYear} onChange={e => update('leaderYear', e.target.value)} className={inputClass}>
                <option value="">Select Year</option>
                {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>EMAIL *</label>
              <input type="email" value={form.leaderEmail} onChange={e => update('leaderEmail', e.target.value)}
                placeholder="leader@email.com" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>PHONE *</label>
              <input type="tel" value={form.leaderPhone} onChange={e => update('leaderPhone', e.target.value)}
                placeholder="+91 XXXXX XXXXX" className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>COLLEGE NAME *</label>
              <input type="text" value={form.leaderCollege} onChange={e => update('leaderCollege', e.target.value)}
                placeholder="AMC Engineering College / Your college name" className={inputClass} />
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="border border-pink-400/20 p-6 mb-8"
          style={{ background: 'rgba(255,0,255,0.02)' }}>
          <div className="font-mono text-[11px] tracking-[4px] text-pink-400 mb-6 pb-3 border-b border-pink-400/10">
            TEAM MEMBERS ({members.length}/3 MEMBERS + LEADER = {members.length + 1} TOTAL)
          </div>
          {members.map((m, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block font-mono text-[10px] tracking-[2px] text-pink-400/70 mb-2">MEMBER {i + 1} NAME</label>
                <input type="text" value={m.name} onChange={e => updateMember(i, 'name', e.target.value)}
                  placeholder={`Member ${i + 1} full name`}
                  className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 font-rajdhani text-base outline-none focus:border-pink-400 focus:bg-gray-800 transition-all" />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[2px] text-pink-400/70 mb-2">USN</label>
                <input type="text" value={m.usn} onChange={e => updateMember(i, 'usn', e.target.value)}
                  placeholder="USN"
                  className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 font-rajdhani text-base outline-none focus:border-pink-400 focus:bg-gray-800 transition-all" />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[2px] text-pink-400/70 mb-2">COLLEGE</label>
                <input type="text" value={m.college} onChange={e => updateMember(i, 'college', e.target.value)}
                  placeholder="College name"
                  className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 font-rajdhani text-base outline-none focus:border-pink-400 focus:bg-gray-800 transition-all" />
              </div>
            </div>
          ))}
          {members.length < 3 && (
            <button onClick={addMember}
              className="font-mono text-[11px] tracking-widest px-5 py-2 border border-dashed border-pink-400/40 text-pink-400 hover:bg-pink-400/5 transition-all mt-2">
              + ADD MEMBER (MAX 3)
            </button>
          )}
        </div>

          

        {/* Error */}
        {error && (
          <div className="border border-red-400/30 bg-red-400/5 px-4 py-3 mb-6">
            <span className="font-mono text-xs text-red-400 tracking-widest">{error}</span>
          </div>
        )}

        {/* Submit */}
        <button onClick={submit} disabled={loading}
          className="w-full font-orbitron font-bold text-sm tracking-[4px] py-5 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? '⏳ SUBMITTING...' : '▶ SUBMIT REGISTRATION'}
        </button>

        <p className="font-mono text-[10px] text-gray-600 tracking-widest text-center mt-4">
          BY REGISTERING YOU AGREE TO THE EVENT TERMS AND CONDITIONS
        </p>
      </div>
    </div>
  )
}