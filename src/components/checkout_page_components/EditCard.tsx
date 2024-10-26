import FullRoundedImg from "../elements/FullRoundedImg"
import LinkBtn from "../elements/LinkBtn"


const EditCard = () => {
  return (
    <div className="flex  items-center gap-5 mt-5">
        <div className="flex gap-5">
          <FullRoundedImg />
          <FullRoundedImg />
          <FullRoundedImg />
        </div>
        <LinkBtn  label="Edit Card" variant="light" destination='/cart_page'/>
      </div>
  )
}

export default EditCard