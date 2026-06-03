import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Signup() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill all fields')
            return
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        const user = {
            name,
            email,
            password
        }

        const users = JSON.parse(localStorage.getItem("users")) || []
        users.push(user);

        localStorage.setItem('users', JSON.stringify(users))

        alert('Account created successfully!')

        navigate('/login')
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#0F172A] flex justify-center items-center px-4">

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-2xl mt-10"
                >

                    <h1 className="text-4xl font-bold text-center text-white mb-2">
                        Create Account
                    </h1>

                    <p className="text-slate-400 text-center mb-8">
                        Join Travel Manager and start planning
                    </p>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 mb-4 bg-[#1E293B] border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 mb-4 bg-[#1E293B] border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 mb-4 bg-[#1E293B] border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-4 mb-6 bg-[#1E293B] border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#F59E0B] text-[#0F172A] font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 cursor-pointer shadow-lg"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-slate-400 mt-6">
                        Already have an account?{' '}
                        <span
                            onClick={() => navigate('/login')}
                            className="text-[#F59E0B] cursor-pointer hover:underline"
                        >
                            Login
                        </span>
                    </p>

                </form>
            </div>
        </>
    )
}

export default Signup