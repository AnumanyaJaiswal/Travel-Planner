import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav className="flex items-center justify-between px-12 py-5 bg-[#134E4A] text-white shadow-lg">

            <NavLink
                to="/"
                className="text-4xl font-extrabold tracking-wide hover:text-[#F59E0B] transition duration-300"
            >
                Travel<span className="text-[#F59E0B]">X</span>
            </NavLink>

            <ul className="flex items-center gap-12 text-lg font-medium">

                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            isActive ? "text-[#F59E0B]" : "hover:text-[#F59E0B] transition duration-300"
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/destinations"
                        className={({isActive}) =>
                            isActive ? "text-[#F59E0B]" : "hover:text-[#F59E0B] transition duration-300"
                        }
                    >
                        Destinations
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                            isActive ? "text-[#F59E0B]" : "hover:text-[#F59E0B] transition duration-300"
                        }
                    >
                        About
                    </NavLink>
                </li>

            </ul>

            <NavLink
                to="/login"
                className="bg-[#0284C7] hover:bg-[#0369A1] px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
            >
                Login
            </NavLink>

        </nav>

    )
}