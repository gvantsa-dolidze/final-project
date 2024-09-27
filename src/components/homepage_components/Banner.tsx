import Button from "../elements/Button"
const Banner = () => {
  return (
    <div className="bg-BackgroundGray py-40">
      <div className="text-start max-w-1116 m-auto space-y-5">
        <h2>Fresh Arrivals Online</h2>
        <p>Discover Our Newest Collection Today.</p>
        <Button 
           label='View Collection'
        />

      </div>
    </div>
  )
}

export default Banner