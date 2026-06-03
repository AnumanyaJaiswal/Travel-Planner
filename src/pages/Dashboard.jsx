import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSavedDestination } from '../Context/SavedDestinationContext'
import DestinationCard from '../Components/DestinationCard'
import { useAuth } from '../Context/AuthContext'

const navItems = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    end: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
      </svg>
    ),
  },
  {
    label: 'Profile',
    to: '/dashboard/profile',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
      </svg>
    ),
  },
  {
    label: 'About',
    to: '/about',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
  },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const { savedDestination, removeDestination } = useSavedDestination()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const { currentUser } = useAuth()

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay = '') =>
    `transition-all duration-700 ${delay} ${visible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-5'
    }`

  function handleLogout() {
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white overflow-hidden">

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 overflow-y-auto bg-[#0B1120] border-r border-slate-800
          flex flex-col z-30 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:z-auto
        `}
      >
        <div className="px-6 py-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
          </div>

          <span className="font-extrabold tracking-tight text-white text-lg">
            Travel<span className="text-[#F59E0B]">X</span>
          </span>
        </div>

        <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 px-3 mb-3">
            Menu
          </p>

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                  ? 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 pb-6 border-t border-slate-800 pt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15M18 15l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      <div className={`flex-1 h-screen bg-[#0F172A] px-6 md:px-10 py-8 overflow-y-auto ${fade()}`}>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 bg-[#111827] border border-slate-700 rounded-2xl p-6 shadow-xl">

          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Welcome Back {currentUser?.name}👋
            </h1>

            <p className="text-slate-400 text-lg">
              Manage your saved destinations and start planning your next adventure.
            </p>
          </div>

          <button
            className="bg-[#F59E0B] text-[#0F172A] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer w-full md:w-auto"
            onClick={() => navigate('/destinations')}
          >
            Start Exploring
          </button>
        </div>

        <div className={`bg-[#111827] border border-slate-700 rounded-2xl p-6 shadow-xl ${fade('delay-200')}`}>

          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
            Saved Destinations
          </h2>

          {savedDestination.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-6xl mb-4">🌍</div>

              <p className="text-gray-400 text-lg text-center">
                No destinations saved yet.
              </p>

              <p className="text-slate-500 text-sm mt-2">
                Start exploring and save your favorite places.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
              {savedDestination.map((destination) => (
                <div
                  key={destination.id}
                  className="relative"
                >
                  <Link
                    to={`/destinations/${destination.id}`}
                    className="w-full flex justify-center hover:-translate-y-2 transition-all duration-300"
                  >
                    <DestinationCard
                      image={destination.image}
                      title={destination.title}
                      location={destination.location}
                      price={destination.price}
                      rating={destination.rating}
                    />
                  </Link>

                  <button
                    onClick={() => removeDestination(destination.id)}
                    className="
                    absolute top-3 right-3
                   bg-red-500 hover:bg-red-600
                   text-white text-sm
                    px-3 py-2 rounded-lg
                    transition-all duration-300
                    cursor-pointer
                    shadow-lg
                    "
                  >
                    Remove
                  </button>
                </div>
              ))}

            </div>
          )}
        </div>

      </div>
    </div>
  )
}