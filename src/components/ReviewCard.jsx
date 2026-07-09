import React from 'react'
import '../css/reviews.css'

const ReviewCard = ({profile, name, rating, review}) => {
  return (
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