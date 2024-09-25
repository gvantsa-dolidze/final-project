import EmailInput from "./EmailInput";

const FooterTop = () => {
  return (
    <div className="bg-[#F6F6F6] pt-14 pb-14">
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
