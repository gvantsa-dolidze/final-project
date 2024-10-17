import SelectColorBtn from "./SelectColorBtn"
const ColorPiker = () => {
  return (
    <div className="space-x-2 flex">
          <SelectColorBtn variant="blue" />
          <SelectColorBtn variant="green" />
          <SelectColorBtn variant="red" />
          <SelectColorBtn variant="yellow" />
          <SelectColorBtn variant="pink" />
        </div>
  )
}

export default ColorPiker