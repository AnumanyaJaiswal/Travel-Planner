import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import profileImage from '../assets/Anumanya-proffesional.png'

const techs = [
  { name: 'React', desc: 'Component-based UI library', icon: '⚛️' },
  { name: 'React Router', desc: 'Client-side navigation', icon: '🔀' },
  { name: 'Tailwind CSS', desc: 'Utility-first styling', icon: '🎨' },
  { name: 'Vite', desc: 'Lightning-fast build tool', icon: '⚡' },
  { name: 'JavaScript', desc: 'Core programming language', icon: '🟨' },
  { name: 'Unsplash API', desc: 'High-quality travel imagery', icon: '📷' },
]

function About() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans">
      <Navbar />

      <div
        className={`pt-24 pb-4 px-6 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <span className="text-[#F59E0B] text-xs tracking-[0.3em] uppercase font-semibold">
          — About This App —
        </span>
      </div>

      <section
        className={`max-w-3xl mx-auto px-6 py-12 text-center transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Our{' '}
          <span className="text-[#F59E0B]">Mission</span>
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          <span className="font-bold text-white">Travel Planner</span> exists to make dream trips real.
          We believe everyone deserves to explore the world without the overwhelm of planning —
          so we bring destinations, inspiration, and itineraries into one seamless experience.
          Whether it's the streets of Paris, the reefs of the Maldives, or the peaks of Manali,
          we help you get there.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-[#F59E0B] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <div className="h-px w-16 bg-[#F59E0B] opacity-40" />
        </div>
      </section>

      <section
        className={`max-w-4xl mx-auto px-6 py-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Built With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techs.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:bg-[#1E293B]/80 group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-2xl mt-1">{t.icon}</span>
              <div>
                <p className="font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                  {t.name}
                </p>
                <p className="text-slate-400 text-sm mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-[#F59E0B] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <div className="h-px w-16 bg-[#F59E0B] opacity-40" />
        </div>
      </section>

      <section
        className={`max-w-3xl mx-auto px-6 py-12 pb-24 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          The Developer
        </h2>

        <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <img
              src={profileImage}
              alt="Profile"
              className='w-24 h-24 rounded-full object-cover'
            />

          </div>

          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-white">Anumanya Jaiswal</p>
            <p className="text-[#F59E0B] text-sm tracking-widest uppercase mt-1 mb-4">
              Mern-Stack Developer
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">
              Hello! I'm a passionate Web Developer who loves building modern, responsive, and user-friendly web applications. I specialize in creating interactive digital experiences using technologies like React.js, JavaScript, HTML, CSS, Tailwind CSS, Node.js, and more.
            </p>
            <p className='text-slate-300 text-sm leading-relaxed mb-5'>
              Thank you for visiting my portfolio — feel free to explore my projects and connect with me!
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://github.com/AnumanyaJaiswal"
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-widest uppercase px-4 py-2 rounded-lg bg-[#0F172A] border border-slate-600 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anumanya-jaiswal-67750537a/"
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-widest uppercase px-4 py-2 rounded-lg bg-[#0F172A] border border-slate-600 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-800 py-6 text-center text-slate-500 text-xs tracking-widest uppercase">
        Travel Planner &nbsp;·&nbsp; Made with ❤️ &nbsp;·&nbsp; {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default About