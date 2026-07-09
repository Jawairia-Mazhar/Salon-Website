import React from 'react'
import ReviewCard from '../components/ReviewCard'
import reviews from '../data/reviewsData'

const Reviews = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center">What Our Customer Says</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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