import Button from "../elements/Button"
import FullRoundedImg from "../elements/FullRoundedImg"

const EditCard = () => {
  return (
    <div className="flex  items-center gap-5 mt-5">
        <div className="flex gap-5">
          <FullRoundedImg />
          <FullRoundedImg />
          <FullRoundedImg />
        </div>

        <Button label="Edit Card" variant="light"/>
      </div>
  )
}

export default EditCard