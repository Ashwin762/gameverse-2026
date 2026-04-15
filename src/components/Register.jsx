import React, { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Register() {
  const [members, setMembers] = useState([{ name: '', usn: '', college: '' }, { name: '', usn: '', college: '' }])
  const [form, setForm] = useState({ teamName: '', leaderName: '', leaderUSN: '', leaderBranch: '', leaderYear: '', leaderEmail: '', leaderPhone: '', leaderCollege: '', psChoice: '' })
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
    if (!form.teamName || !form.leaderName || !form.leaderEmail || !form.leaderPhone || !form.psChoice) {
      setError('Please fill all required fields.')
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
    if (err) { setError('Submission failed. Try again.'); return }
    setSuccess(true)
  }

  if (success) return (
    <section id="register" className="snap-section min-h-screen flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(135deg, #020408, #001a10, #020408)' }}>
      <div className="text-center border border-green-400/30 bg-green-400/5 p-12 clip-corner max-w-md">
        <div className="font-orbitron font-black text-2xl neon-green mb-4">▶ REGISTRATION RECEIVED</div>
        <p className="font-mono text-sm text-gray-400 tracking-wider">Your team has been logged into the system. Watch this space for shortlisting updates.</p>
      </div>
    </section>
  )

  return (
    <section id="register" className="snap-section min-h-screen flex items-center py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #020408, #001a10, #020408)' }}>
      <div className="max-w-3xl mx-auto w-full">
        <div className="font-mono text-xs tracking-[6px] text-cyan-400 mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-cyan-400" /> REGISTER
        </div>
        <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-2">Join the <span className="neon-cyan">Arena</span></h2>
        <p className="text-gray-500 font-mono text-xs tracking-widest mb-8">TEAMS OF 3–4 · OPEN TO ALL COLLEGES · ₹500 ENTRY FEE</p>

        {/* Status */}
        <div className="flex items-center gap-3 border border-green-400/20 bg-green-400/5 px-4 py-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest text-green-400">REGISTRATION OPEN · LIVE DATABASE CONNECTED</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Team Name */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="font-mono text-[11px] tracking-[3px] text-cyan-400">TEAM NAME *</label>
            <input value={form.teamName} onChange={e => update('teamName', e.target.value)}
              placeholder="Enter your team name"
              className="bg-cyan-400/3 border border-cyan-400/20 text-white px-4 py-3 font-rajdhani text-base outline-none focus:border-cyan-400 transition-colors" />
          </div>

          {/* Leader section */}
          <div className="md:col-span-2 border border-cyan-400/10 p-5 clip-corner">
            <div className="font-mono text-[11px] tracking-[3px] text-cyan-400 mb-4">TEAM LEADER</div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['FULL NAME *', 'leaderName', 'text', "Leader's name"],
                ['USN', 'leaderUSN', 'text', '1AM22CS000'],
                ['BRANCH', 'leaderBranch', 'text', 'CSE / ECE / ME...'],
                ['EMAIL *', 'leaderEmail', 'email', 'leader@email.com'],
                ['PHONE *', 'leaderPhone', 'tel', '+91 XXXXX XXXXX'],
                ['COLLEGE *', 'leaderCollege', 'text', 'College name'],
              ].map(([label, key, type, placeholder]) => (
                <div key={key} className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] tracking-[3px] text-cyan-400/70">{label}</label>
                  <input type={type} value={form[key]} onChange={e => update(key, e.target.value)} placeholder={placeholder}
                    className="bg-white/3 border border-white/10 text-white px-3 py-2 font-rajdhani text-sm outline-none focus:border-cyan-400 transition-colors" />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[3px] text-cyan-400/70">YEAR</label>
                <select value={form.leaderYear} onChange={e => update('leaderYear', e.target.value)}
                  className="bg-black border border-white/10 text-white px-3 py-2 font-rajdhani text-sm outline-none focus:border-cyan-400 transition-colors">
                  <option value="">Select Year</option>
                  {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Members */}
          <div className="md:col-span-2 border border-pink-400/10 p-5 clip-corner">
            <div className="font-mono text-[11px] tracking-[3px] text-pink-400 mb-4">▶ TEAM MEMBERS ({members.length}/3)</div>
            {members.map((m, i) => (
              <div key={i} className="grid grid-cols-3 gap-3 mb-3">
                {[['name', `Member ${i + 1} Name`], ['usn', 'USN'], ['college', 'College']].map(([k, ph]) => (
                  <input key={k} value={m[k]} onChange={e => updateMember(i, k, e.target.value)} placeholder={ph}
                    className="bg-pink-400/3 border border-pink-400/20 text-white px-3 py-2 font-rajdhani text-sm outline-none focus:border-pink-400 transition-colors" />
                ))}
              </div>
            ))}
            {members.length < 3 && (
              <button onClick={addMember} className="font-mono text-[10px] tracking-widest px-4 py-2 border border-dashed border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/5 transition-all mt-2">
                + ADD MEMBER
              </button>
            )}
          </div>

          

          {error && <div className="md:col-span-2 font-mono text-xs text-red-400 tracking-widest">{error}</div>}

          <button onClick={submit} disabled={loading}
            className="md:col-span-2 font-orbitron font-bold text-sm tracking-[4px] py-4 border border-cyan-400 text-cyan-400 clip-hex hover:bg-cyan-400 hover:text-black transition-all disabled:opacity-50">
            {loading ? 'SUBMITTING...' : '▶ SUBMIT REGISTRATION'}
          </button>
        </div>
      </div>
    </section>
  )
}