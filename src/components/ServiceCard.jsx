import React from 'react'

const ServiceCard = ({ image, title, description, price }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <img src={image} alt={title} className="h-58 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <p className="mt-3 font-bold text-(--color-primary) text-end">{price}</p>
      </div>
    </div>
  )
}

export default ServiceCard