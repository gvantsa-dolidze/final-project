import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if the pathname matches the dynamic product page content paths
    const shouldScroll = !/^\/product_page\/\d+\/(details_content|reviews_content)/.test(pathname);

    if (shouldScroll) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;


