import React, { useState, useEffect } from 'react'
import DestinationCard from '../Components/DestinationCard';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import destinations from '../data/destinations';


function Destination() {
    const [place, setPlace] = useState("")

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, 100);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    function handleChange(e) {
        setPlace(e.target.value)
    }

    const filteredDestinations = React.useMemo(() => {
        return destinations.filter((item) =>
            item.title.toLowerCase().includes(place.toLowerCase())
        );
    }, [place]);
    return (

        <div
            className={`min-h-screen bg-[#020B2D] text-white transition-all duration-700 `}
        >
            <Navbar />
            <div className={`flex justify-center pt-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                <div className="flex items-center bg-[#134E4A] p-2 rounded-2xl shadow-lg">

                    <input
                        type="text"
                        name="place"
                        placeholder="Search destinations..."
                        className="px-5 py-3 w-80 rounded-xl outline-none text-white bg-[#0F172A] placeholder-gray-400"
                        onChange={handleChange}
                        value={place}
                    />

                </div>

            </div>

            <div className={`text-center mt-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                <h1 className="text-5xl font-bold">
                    Explore Beautiful Places 🌍
                </h1>

                <p className="text-gray-400 mt-4 text-lg">
                    Find your next dream destination
                </p>

            </div>

            <div className={`cards flex flex-wrap gap-10 justify-center p-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                {filteredDestinations.length > 0 ? (

                    filteredDestinations.map((place) => (
                        <Link
                            to={`/destinations/${place.id}`}
                            key={place.id}
                            className="hover:scale-105 transition duration-300"
                        >
                            <DestinationCard
                                image={place.image}
                                title={place.title}
                                location={place.location}
                                price={place.price}
                                rating={place.rating}
                            />
                        </Link>
                    ))

                ) : (

                    <h2 className="text-2xl text-gray-400">
                        No destinations found 😢
                    </h2>

                )}

            </div>

        </div>
    )
}

export default Destination


