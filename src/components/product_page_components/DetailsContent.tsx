import { useAppSelector } from "../../store/hooks";

interface DetailsContentProps {
  description: string;
}

const DetailsContent: React.FC<DetailsContentProps> = ({description}) => {
  const product = useAppSelector((state) => state.singleProduct.data);

  console.log(product);
  

  const styles: Record<string, string> = {};
  return (
    <div className="text-start space-y-10 w-[727px]">
      <h2>Details</h2>
      <div className="space-y-20">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default DetailsContent;
