import { NavLink } from "react-router-dom";

interface BreadcrumbProps {
  label: string;
  title: string;
}

const Breadcrumb:React.FC<BreadcrumbProps> = ({ label, title }) => {
  return (
    
      <div className="max-w-1116 m-auto py-5 ">
      <h3 className="text-start pb-4 text-xl">{title}</h3>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <NavLink
              to=""
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Ecommerce
            </NavLink>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <NavLink
                to=""
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {label}
              </NavLink>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    
  );
};

export default Breadcrumb;
