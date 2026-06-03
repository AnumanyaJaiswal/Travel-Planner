import React from 'react'

export default function DestinationCard({
  image,
  title,
  location,
  price,
  rating
}) {
  return (
    <div className="w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      {/* Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        {/* Title + Rating */}
        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-gray-800">
            {title}
          </h2>

          <span className="bg-yellow-400 text-black px-2 py-1 rounded-lg text-sm font-semibold">
            ⭐ {rating}
          </span>

        </div>

        {/* Location */}
        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        {/* Price */}
        <div className="mt-4 flex justify-between items-center">

          <p className="text-xl font-bold text-blue-600">
            ${price}
          </p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Book Now
          </button>

        </div>

      </div>
    </div>
  )
}