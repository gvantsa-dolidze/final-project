import Card from "../elements/Card";
import Button from "../elements/Button";

const FeaturedLatest = () => {
  return (
    <div className="max-w-1116 m-auto py-16">
    <div className="text-center space-x-2">
      <Button label='Featured' />
      <Button label='Latest'/>
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