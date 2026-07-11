import React from 'react'

const ServiceCard = ({ image, title, description, price }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <img src={image} alt={title} className="h-40 sm:h-48 lg:h-58 w-full object-cover" />
      <div className="p-3 sm:p-4">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-600">{description}</p>
        <p className="mt-3 font-bold text-[var(--color-primary)] text-end text-sm sm:text-base">{price}</p>
      </div>
    </div>
  )
}

export default ServiceCard