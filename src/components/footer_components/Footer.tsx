import FooterBase from "./FooterBase";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="">
      <FooterTop 
          title='Join Our Newsletter'
          description='We love to surprise our subscribers with occasional gifts.'
      />
      <FooterBase />
      <FooterBottom />
    </div>
  );
};

export default Footer;
