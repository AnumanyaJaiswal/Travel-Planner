import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find((user) => (
            user.email === email &&
            user.password === password
        ))

        if (foundUser) {
            login(foundUser)
            navigate('/dashboard')
        }
        else {
            alert("Invalid Credentials")
        }

    }
    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-[#020B2D] flex justify-center items-center px-4'>
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#0F172A] p-10 rounded-3xl w-105 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
                >

                    <h1 className="text-white text-4xl font-bold mb-8 text-center">
                        Login
                    </h1>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 mb-5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 mb-6 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    />

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
                    >
                        Login
                    </button>

                    <p className="text-center text-slate-400 mt-6">
                        Do not have an account?{' '}
                        <span
                            onClick={() => navigate('/signup')}
                            className="text-[#F59E0B] cursor-pointer hover:underline"
                        >
                            SignUp Now
                        </span>
                    </p>

                </form>

            </div>
        </>
    )
}

export default Login
