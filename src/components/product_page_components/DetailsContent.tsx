import { useAppSelector } from "../../store/hooks";

const DetailsContent = () => {
  const product: any = useAppSelector((state) => state.singleProduct.data);
  // console.log(product.description);
  // const styles: Record<string, string> = {};
  return (
    <div className="text-start space-y-10 md:w-3/4">
      <h2>Details</h2>
      <div className="space-y-20">
        <p>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default DetailsContent;
