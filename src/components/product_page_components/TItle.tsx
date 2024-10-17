interface TitleProps {
  title?: string; // Title of the product
  variant?: "PageTitle" | "ProductTitle" | "ElementTitle";
  className?: string;
}
const Title: React.FC<TitleProps> = ({
  title = "Raw Black T-Shirt Lineup",
  variant = "ElementTitle",
  className = "",
}) => {
  const styles: Record<string, string> = {
    PageTitle: "",
    ProductTitle:"",
    ElementTitle: "",
  };

  return <h3 className={`${styles[variant]} ${className}`}>{title}</h3>;
};

export default Title;
