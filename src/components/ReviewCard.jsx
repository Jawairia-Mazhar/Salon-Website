import React from 'react'
import '../css/reviews.css'

const ReviewCard = ({profile, name, rating, review}) => {
  return (
    // <section className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-80">
    //     <div className="flex items-center">
    //         <img src={profile} alt={name} className="w-18 h-18 rounded-full mr-4" />
    //     </div>
    //         <div className="flex flex-col items-center text-center border-2 border-[#fcc200] rounded-lg p-4">
    //             <h3 className="text-lg font-semibold">{name}</h3>
    //             <p className="text-sm text-gray-600">{rating}</p>
    //             <p className="text-gray-700 text-center">{review}</p>
    //         </div>
    // </section>
    <figure class="snip1533">
  <figcaption>
    <p>{rating}</p>
    <blockquote>
      <p>{review}</p>
    </blockquote>
    <h3>{name}</h3>
  </figcaption>
</figure>
  )
}

export default ReviewCard