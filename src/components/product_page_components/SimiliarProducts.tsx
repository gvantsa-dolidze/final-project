import Card from "../elements/Card";

const SimiliarProducts = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="">
        <h3>You might also like</h3>
        <p>SIMILAR PRODUCTS</p>
      </div>

      <div className="flex justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SimiliarProducts;
