import { CardNew } from "../elements/CardNew";

interface Props {
  data: any[]
}

const Grid = ({data}: Props) => {
  return (
    <div className="max-w-1116 m-auto py-16 space-y-5">
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {data.map((product: any) => (
          <CardNew
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
