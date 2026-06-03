import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center px-6">

            <h1 className="text-8xl md:text-9xl font-extrabold text-[#F59E0B] drop-shadow-lg">
                404
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Page Not Found
            </h2>

            <p className="text-slate-400 text-center max-w-md mt-4">
                The page you are looking for doesn't exist or may have been moved.
            </p>

            <button
                onClick={() => navigate('/')}
                className="mt-8 bg-[#F59E0B] text-[#0F172A] font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
                Return to Home
            </button>

        </div>
    )
}

export default NotFound