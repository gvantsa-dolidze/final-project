import EmailInput from "./EmailInput";

const FooterTop = () => {
  return (
    <div className="max-w-1440 bg-[#F6F6F6]">
      <div className="max-w-1116 flex m-auto justify-between">
        <div className="text-left">
          <p>Join Our Newsletter</p>
          <p>We love to surprise our subscribers with occasional gifts.</p>
        </div>
        <EmailInput />
      </div>
    </div>
  );
};

export default FooterTop;
