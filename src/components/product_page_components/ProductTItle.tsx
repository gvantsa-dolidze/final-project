import Button from "../elements/Button";
interface ProductTitleProps {
  title?: string; // Title of the product
}
const ProductTItle: React.FC<ProductTitleProps> = ({ title = 'Raw Black T-Shirt Lineup' }) => {
  return <h3>{title}</h3>;
};

export default ProductTItle;
