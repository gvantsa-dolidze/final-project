import AcceptedPayments from "./AcceptedPayments";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";

const FooterBase = () => {
  return (
    <div className="max-w-1116 md:flex justify-between m-auto pt-14 pb-14">
      <FooterLogo />
      <FooterNav
        support="SUPPORT"
        faq="FAQ"
        termsOfUse="Terms of use"
        privacyPolicy="Privacy Policy"
        company="COMPANY"
        aboutUs="About us"
        contact="Contact"
        careers="Careers"
        shop="SHOP"
        myAccount="My Account"
        checkout="Checkout"
        cart="Cart"
      />
      <AcceptedPayments />
    </div>
  );
};

export default FooterBase;
