import Card from "../elements/Card";
import Button from "../elements/Button";

const FeaturedLatest = () => {
  return (
    <div className="max-w-1116 m-auto py-16">
    <div className="text-center space-x-4">
      <Button label='Featured'  variant = "secondary" destination='/listing_page'/>
      <Button label='Latest' variant = "link" destination='/listing_page'/>
    </div>
    <div className="flex gap-5 py-5">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
  )
}

export default FeaturedLatest