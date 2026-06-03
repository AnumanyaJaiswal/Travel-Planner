import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import DestinationCard from '../Components/DestinationCard'
import { Link } from 'react-router-dom'

function Home() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 100);
  
    return () => {
      clearTimeout(timer)
    }
  }, [])
  

  const text = "PLAN YOUR DREAM TRIP WITH YOUR TRAVEL PLANNER"

  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {

    let index = 0

    const interval = setInterval(() => {

      setDisplayedText(text.slice(0, index + 1))

      index++

      if (index === text.length) {
        clearInterval(interval)
      }

    }, 80)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="min-h-screen bg-[#0F172A] text-white">

      <Navbar />

      <div className={`flex items-center justify-center h-[85vh] px-6 transition-all duration-700`}>

        <h1 className={`text-5xl md:text-7xl font-extrabold text-center max-w-6xl leading-tight transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} }`}>

          {displayedText}

          <span className="animate-pulse text-[#F59E0B]">
            |
          </span>

        </h1>

      </div>
      <div className={`flex justify-evenly p-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} `}>
        <Link
          to={'/destinations/paris'}
        >
          <DestinationCard
            image='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D'
            title='Paris'
            location='France'
            price='900'
            rating='4.8'
          />
        </Link>
        <Link
          to={'/destinations/maldives'}
        >
          <DestinationCard
            image='https://daily.jstor.org/wp-content/uploads/2025/01/the_maldives_paradise_lost_1050x700.jpg'
            title='Maldives'
            location='Indian Ocean'
            price='800'
            rating='5'
          />
        </Link >
        <Link to={'/destinations/manali'}>
          <DestinationCard
            image='https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg'
            title='Manali'
            location='India'
            price='500'
            rating='4.5'
          />
        </Link>
      </div>

    </div>

  )
}

export default Home