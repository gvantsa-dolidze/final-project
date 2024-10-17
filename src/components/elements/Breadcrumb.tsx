import Title from "../product_page_components/Title";
import LinkBtn from "./LinkBtn";

interface BreadcrumbProps {
  label?: string;
  title?: string;
  secondaryLabel?: string;
  destination?: string;
  secondaryDestination?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ label='', title, secondaryLabel = '', destination='', secondaryDestination=''}) => {
  return (
    <div className="max-w-1116 py-5 ">
      <Title title={title} className="text-start pb-4 text-xl" variant="title24"/>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <LinkBtn 
                  destination={destination} 
                  label={label} 
                  variant="link" />
          </li>
          <li>
              <LinkBtn
                destination={secondaryDestination}
                label={secondaryLabel}
                variant="link"
                img="/img/icons/Chevron Right.png"
              />
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
