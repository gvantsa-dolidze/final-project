interface TitleProps {
  title?: string; // Title of the product
  variant?: "title24" | "title12" | "title16" | 'title14';
  className?: string;
  truncate?: boolean;
  truncateLength?: number;
}
const Title: React.FC<TitleProps> = ({
  title = "Raw Black T-Shirt Lineup",
  variant = "ElementTitle",
  className = "",
  truncate = true,
  truncateLength = 20,
}) => {
  const styles: Record<string, string> = {
    title12: 'text-xs',
    title14: 'text-sm',
    title16: 'text-base',
    title24: 'text-2xl',
  };

  const truncatedTitle =
    truncate && title.length > truncateLength
      ? `${title.slice(0, truncateLength)}...`
      : title;

  return <h3 className={`${styles[variant]} ${className}`}>{truncatedTitle}</h3>;
};


export default Title;
