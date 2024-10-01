import SelectColorRadioBtn from "./SelectColorRadioBtn"
const ColorPiker = () => {
  return (
    <div className="space-x-2">
          <SelectColorRadioBtn variant="blue" />
          <SelectColorRadioBtn variant="green" />
          <SelectColorRadioBtn variant="red" />
          <SelectColorRadioBtn variant="yellow" />
          <SelectColorRadioBtn variant="pink" />
        </div>
  )
}

export default ColorPiker