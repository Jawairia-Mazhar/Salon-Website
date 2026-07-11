import React from 'react'
import ReviewCard from '../components/ReviewCard'
import reviews from '../data/reviewsData'

const Reviews = () => {
  return (
    <div id="reviews" className="mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">What Our Customer Says</h1>
        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reviews.map((review, index) => (
            <ReviewCard
                key={index}
                profile={review.profile}
                name={review.name}
                rating={review.rating}
                review={review.review}
            />
        ))}
    </div>
    </div>
  )
}

export default Reviews