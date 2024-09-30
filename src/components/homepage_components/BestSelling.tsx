import Card from "../elements/Card";

const BestSelling = () => {
  return (
    <div className="max-w-1116 m-auto py-16 space-y-5">
      <div className="text-center">
        <p>SHOP NOW</p>
        <h2>Best Selling</h2>
      </div>
      <div className="flex gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default BestSelling;
