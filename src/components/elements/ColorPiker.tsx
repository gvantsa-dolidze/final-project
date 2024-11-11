import SelectColorBtn from "./SelectColorBtn"
const ColorPiker = () => {
  return (
    <div className="space-x-2 flex">
          <SelectColorBtn variant="blue" type='radio'/>
          <SelectColorBtn variant="green" type='radio'/>
          <SelectColorBtn variant="red" type='radio'/>
          <SelectColorBtn variant="yellow" type='radio'/>
          <SelectColorBtn variant="pink" type='radio'/>
        </div>
  )
}

export default ColorPiker