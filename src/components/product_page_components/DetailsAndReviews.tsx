import { NavLink } from "react-router-dom"
const DetailsAndReviews = () => {
  return (
    <div className="space-y-5">
<NavLink to='' className='flex gap-3'><img src="/img/icons/More.png" alt="dots" /><span>Details</span></NavLink>
<NavLink to='' className='flex gap-3'><img src="/img/icons/Empty Star.png" alt="star" /><span>Reviews</span></NavLink>
    </div>
  )
}

export default DetailsAndReviews