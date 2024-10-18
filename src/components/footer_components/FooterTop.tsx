import EmailInput from "./EmailInput";

interface NewsletterProps {
  title: string;  // For "Join Our Newsletter"
  description: string;  // For "We love to surprise our subscribers with occasional gifts."
}

const FooterTop: React.FC<NewsletterProps>  = ({ title, description }) => {
  return (
    <div className="bg-[#F6F6F6] pt-14 pb-14">
      <div className="max-w-1116 flex-row md:flex md:space-y-5 m-auto justify-between  items-center">
        <div className="text-center md:text-left p-5 md:p-0">
          <p>{ title }</p>
          <p>{ description }</p>
        </div>
        <EmailInput />
      </div>
    </div>
  );
};

export default FooterTop;
