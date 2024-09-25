import EmailInput from "./EmailInput"

const FooterTop = () => {
  return (
    <div className="flex justify-around">
        <div className="text-left">
            <p>Join Our Newsletter</p>
            <p>We love to surprise our subscribers with occasional gifts.</p>
        </div>
        <EmailInput />
    </div>
  )
}

export default FooterTop