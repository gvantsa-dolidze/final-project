import LinkBtn from "./LinkBtn";

interface BreadcrumbProps {
  label: string;
  title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ label, title }) => {
  return (
    <div className="max-w-1116 m-auto py-5 ">
      <h3 className="text-start pb-4 text-xl">{title}</h3>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <LinkBtn destination="/" label="Ecommerce" variant="link" />
          </li>
          <li>
              <LinkBtn
                destination="/"
                label={label}
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
