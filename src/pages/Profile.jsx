import React, { useState, useEffect } from 'react'
import { useAuth } from '../Context/AuthContext'
import { useSavedDestination } from '../Context/SavedDestinationContext'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, 100);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const { currentUser, setCurrentUser } = useAuth()
    const { savedDestination } = useSavedDestination()

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(currentUser?.name || "")
    const [email, setEmail] = useState(currentUser?.email || "")
    const navigate = useNavigate()

    const handleSave = () => {
        const updateUser = {
            ...currentUser,
            name,
            email,
        }
        localStorage.setItem("currentUser", JSON.stringify(updateUser))

        const users = JSON.parse(localStorage.getItem("users")) || []

        const updateUsers = users.map((user) => {
            return user.email === currentUser.email
                ? updateUser
                : user
        })

        localStorage.setItem("users", JSON.stringify(updateUsers))
        setIsEditing(false)
        setCurrentUser(updateUser)
        alert("User Updated Successfully")
    }

    const initials = currentUser?.name
        ?.split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()

    return (
        <div className={`min-h-screen bg-[#0F172A] text-white px-6 py-10 `}>

            <div className="max-w-6xl mx-auto">

                <div className={`bg-linear-to-r from-[#F59E0B] to-orange-500 rounded-3xl p-8 shadow-2xl mb-8 relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                    <button
                        onClick={() => navigate('/dashboard')}
                        className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300"
                    >
                        ← Back
                    </button>

                    <div className="flex flex-col md:flex-row items-center gap-8">

                        <div className="w-32 h-32 rounded-full bg-white text-[#0F172A] flex items-center justify-center text-5xl font-bold shadow-xl">
                            {initials}
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold">
                                {currentUser?.name}
                            </h1>

                            <p className="text-white/90 text-lg mt-2">
                                {currentUser?.email}
                            </p>

                            <span className="inline-block mt-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                                ✈️ Premium Traveler
                            </span>
                        </div>

                    </div>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6 shadow-xl">
                        <h3 className="text-slate-400 text-sm uppercase">
                            Trips Planned
                        </h3>

                        <p className="text-5xl font-bold text-[#F59E0B] mt-4">
                            {(savedDestination.length - 1) < 0 ? 0 : savedDestination.length - 1}
                        </p>
                    </div>

                    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6 shadow-xl">
                        <h3 className="text-slate-400 text-sm uppercase">
                            Countries Visited
                        </h3>

                        <p className="text-5xl font-bold text-cyan-400 mt-4">
                            {(savedDestination.length - 3) < 0 ? 0 : savedDestination.length - 3}
                        </p>
                    </div>

                    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6 shadow-xl">
                        <h3 className="text-slate-400 text-sm uppercase">
                            Wishlist Places
                        </h3>

                        <p className="text-5xl font-bold text-green-400 mt-4">
                            {savedDestination.length}
                        </p>
                    </div>

                </div>

                <div className={`bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-xl mb-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">
                            Personal Information
                        </h2>

                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-[#F59E0B] text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
                            >
                                Edit Profile
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="bg-green-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-green-400 transition-all duration-300 cursor-pointer"
                            >
                                Save Changes
                            </button>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <p className="text-slate-400 mb-2">
                                Full Name
                            </p>

                            {isEditing ? (
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-[#1E293B] p-4 rounded-xl border border-slate-600 focus:border-[#F59E0B] outline-none"
                                />
                            ) : (
                                <div className="bg-[#1E293B] p-4 rounded-xl">
                                    {currentUser?.name}
                                </div>
                            )}
                        </div>

                        <div>
                            <p className="text-slate-400 mb-2">
                                Email Address
                            </p>

                            {isEditing ? (
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#1E293B] p-4 rounded-xl border border-slate-600 focus:border-[#F59E0B] outline-none"
                                />
                            ) : (
                                <div className="bg-[#1E293B] p-4 rounded-xl">
                                    {currentUser?.email}
                                </div>
                            )}
                        </div>

                    </div>

                </div>

                <div className={`bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-xl transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                    <h2 className="text-2xl font-bold mb-6">
                        Travel Achievements 🏆
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-[#1E293B] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="text-5xl mb-4">
                                🌍
                            </div>

                            <h3 className="font-bold text-lg">
                                Explorer
                            </h3>

                            <p className="text-slate-400 mt-2">
                                Visited multiple destinations
                            </p>
                        </div>

                        <div className="bg-[#1E293B] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="text-5xl mb-4">
                                ✈️
                            </div>

                            <h3 className="font-bold text-lg">
                                Frequent Traveler
                            </h3>

                            <p className="text-slate-400 mt-2">
                                Planned over 10 trips
                            </p>
                        </div>

                        <div className="bg-[#1E293B] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="text-5xl mb-4">
                                🏝️
                            </div>

                            <h3 className="font-bold text-lg">
                                Dream Chaser
                            </h3>

                            <p className="text-slate-400 mt-2">
                                Building an epic travel wishlist
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile