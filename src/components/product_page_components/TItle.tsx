interface TitleProps {
  title?: string; // Title of the product
  variant?: "title24" | "title12" | "title16" | 'title14';
  className?: string;
}
const Title: React.FC<TitleProps> = ({
  title = "Raw Black T-Shirt Lineup",
  variant = "ElementTitle",
  className = "",
}) => {
  const styles: Record<string, string> = {
    title12: 'text-xs',
    title14: 'text-sm',
    title16: 'text-base',
    title24: 'text-2xl',
  };

  return <h3 className={`${styles[variant]} ${className}`}>{title}</h3>;
};

export default Title;
