import React from 'react'
import DetailsAndReviews from './DetailsAndReviews'
import DetailsContent from './DetailsContent'
import ReviewsContent from './ReviewsContent'

const AboutProduct = () => {
  return (
    <div className='max-w-1116 m-auto'>
      <DetailsAndReviews />
      
      <DetailsContent />
      <ReviewsContent />
    </div>
  )
}

export default AboutProduct