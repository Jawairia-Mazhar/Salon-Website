import React from 'react'
import services from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
	return (
		<section className="mx-auto px-4 py-8 sm:px-6 lg:px-8" id="services">
			<h1 className="text-3xl font-bold text-center">Our Services and Prices</h1>
			<div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						image={service.image}
						title={service.title}
						description={service.description}
						price={service.price}
					/>
				))}
			</div>
		</section>
	)
}

export default Services
