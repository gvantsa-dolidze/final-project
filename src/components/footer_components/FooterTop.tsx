import EmailInput from "./EmailInput";

interface NewsletterProps {
  title: string;  // For "Join Our Newsletter"
  description: string;  // For "We love to surprise our subscribers with occasional gifts."
}

const FooterTop: React.FC<NewsletterProps>  = ({ title, description }) => {
  return (
    <div className="bg-[#F6F6F6] pt-14 pb-14">
      <div className="max-w-1116 flex m-auto justify-between">
        <div className="text-left">
          <p>{ title }</p>
          <p>{ description }</p>
        </div>
        <EmailInput />
      </div>
    </div>
  );
};

export default FooterTop;
