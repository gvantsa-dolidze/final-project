import { NavLink } from "react-router-dom";

interface PromoHeaderProps {
  support: string;
  faq: string;
  termsOfUse: string;
  privacyPolicy: string;
  company: string;
  aboutUs: string;
  contact: string;
  careers: string;
  shop: string;
  myAccount: string;
  checkout: string;
  cart: string;
}

const FooterNav: React.FC<PromoHeaderProps> = ({
  support,
  faq,
  termsOfUse,
  privacyPolicy,
  company,
  aboutUs,
  contact,
  careers,
  shop,
  myAccount,
  checkout,
  cart,
}) => {
  return (
    <div className="flex space-x-10 text-start justify-between px-5">
      <div>
        <h2>{support}</h2>
        <nav className="flex flex-col mt-10 gap-2">
          <NavLink to="/">{faq}</NavLink>
          <NavLink to="/">{termsOfUse}</NavLink>
          <NavLink to="/">{privacyPolicy}</NavLink>
        </nav>
      </div>
      <div>
        <h2>{company}</h2>
        <nav className="flex flex-col mt-10 gap-2">
          <NavLink to="/">{aboutUs}</NavLink>
          <NavLink to="/">{contact}</NavLink>
          <NavLink to="/">{careers}</NavLink>
        </nav>
      </div>
      <div>
        <h2>{shop}</h2>
        <nav className="flex flex-col mt-10 gap-2">
          <NavLink to="/">{myAccount}</NavLink>
          <NavLink to="/">{checkout}</NavLink>
          <NavLink to="/">{cart}</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default FooterNav;
