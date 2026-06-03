import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";
import Navbar from "../Components/Navbar";
import { useSavedDestination } from "../Context/SavedDestinationContext";

function DestinationDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const destination = destinations.find((item) => item.id === id);
    const { saveDestinations } = useSavedDestination()

    if (!destination) {
        return (
            <div className="min-h-screen bg-[#020B2D] text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">Destination Not Found 😢</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020B2D] text-white">

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full">
                <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
                        {destination.title},{" "}
                        <span className="text-cyan-300">
                            {destination.location}
                        </span>
                    </h1>

                    <p className="mt-4 text-gray-200 text-lg max-w-2xl">
                        Explore the beauty, culture, and unforgettable attractions
                        of {destination.title}.
                    </p>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-[#134E4A]/70 border border-cyan-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                        <h2 className="text-2xl font-bold mb-3 text-cyan-300">
                            🌍 Country
                        </h2>
                        <p className="text-gray-200">{destination.country}</p>
                    </div>

                    <div className="bg-[#134E4A]/70 border border-cyan-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                        <h2 className="text-2xl font-bold mb-3 text-cyan-300">
                            🌤 Weather
                        </h2>
                        <p className="text-gray-200">{destination.weather}</p>
                    </div>

                    <div className="bg-[#134E4A]/70 border border-cyan-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                        <h2 className="text-2xl font-bold mb-3 text-cyan-300">
                            📅 Best Season
                        </h2>
                        <p className="text-gray-200">
                            {destination.bestSeason}
                        </p>
                    </div>

                    <div className="bg-[#134E4A]/70 border border-cyan-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-md md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">
                            ✨ Top Attractions
                        </h2>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {destination.attractions.map((attraction, index) => (
                                <li
                                    key={index}
                                    className="bg-[#0F172A] px-4 py-3 rounded-xl text-gray-200 border border-cyan-500/10"
                                >
                                    {attraction}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#134E4A]/70 border border-cyan-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                        <h2 className="text-2xl font-bold mb-3 text-cyan-300">
                            💰 Budget Estimate
                        </h2>

                        <p className="text-gray-200">
                            {destination.budgetEstimate}
                        </p>

                        <div className="mt-4 text-4xl font-bold text-white">
                            ${destination.price}
                        </div>
                    </div>
                </div>

                <div className="mt-10 bg-[#134E4A]/70 border border-cyan-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                        ⭐ Traveler Rating
                    </h2>

                    <div className="flex items-center gap-4">
                        <div className="text-5xl font-bold text-yellow-400">
                            {destination.rating}
                        </div>

                        <div className="text-gray-300">
                            Loved by travelers worldwide
                        </div>
                    </div>
                </div>

                <div className="mt-14">
                    <h2 className="text-4xl font-bold mb-8 text-center">
                        📸 {destination.title} Gallery
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {destination.gallery.map((image, index) => (
                            <Link
                                to={image}
                                target="blank"
                                key={index}
                                className="overflow-hidden rounded-2xl shadow-xl group"
                            >
                                <img
                                    src={image}
                                    alt={`${destination.title}-${index}`}
                                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                                    loading="lazy"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-14">

                    <button
                        onClick={() => {
                            saveDestinations(destination)
                            alert("Your Destination is saved")
                        }}

                        className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition duration-300 shadow-lg"
                    >Add to Visit❤️
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 rounded-xl transition duration-300 shadow-lg"
                    >
                        ← Go Back
                    </button>

                </div>


            </div>
        </div>
    );
}

export default DestinationDetails;