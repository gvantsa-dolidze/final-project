interface TitleProps {
  title?: string; // Title of the product
  variant?: "title24" | "title12" | "title16" | 'title14';
  className?: string;
  truncate?: boolean;
  truncateLength?: number;
  hideOnSmall?: boolean;
}
const Title: React.FC<TitleProps> = ({
  title = "Raw Black T-Shirt Lineup",
  variant = "ElementTitle",
  className = "",
  truncate = true,
  truncateLength = 20,
  
  hideOnSmall = false,
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

  
  const responsiveClasses = hideOnSmall ? 'md:block md:text-sm hidden' : '';
  
  return <h3 className={`${styles[variant]} ${className} ${responsiveClasses}`}>{truncatedTitle}</h3>;
};


export default Title;
