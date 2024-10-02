import DetailsAndReviews from './DetailsAndReviews'
import DetailsContent from './DetailsContent'
import ReviewsContent from './ReviewsContent'

const AboutProduct = () => {
  return (
    <div className='max-w-1116 m-auto py-28'>
      <div className='flex items-center justify-between gap-20'>
        <DetailsAndReviews />

      <DetailsContent />
      {/* <ReviewsContent /> */}
      </div>
      
    </div>
  )
}

export default AboutProduct