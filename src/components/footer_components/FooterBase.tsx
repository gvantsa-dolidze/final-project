import AcceptedPayments from "./AcceptedPayments";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";


const FooterBase = () => {
  return (
    <div className="max-w-1116 flex justify-between m-auto pt-14 pb-14">
      <FooterLogo />
      <FooterNav />
      <AcceptedPayments />
      
    </div>
  )
  
};

export default FooterBase;
