interface TitleProps {
  title?: string; // Title of the product
}
const TItle: React.FC<TitleProps> = ({ title = 'Raw Black T-Shirt Lineup' }) => {
  return <h3>{title}</h3>;
};

export default TItle;
