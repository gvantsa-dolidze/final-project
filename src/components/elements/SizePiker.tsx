import SelectSizeBtn from "./SelectSizeBtn"
const SizePiker = () => {
  return (
    <div className="space-x-2 flex">
          <SelectSizeBtn variant="s" type="radio"/>
          <SelectSizeBtn variant="m" type="radio"/>
          <SelectSizeBtn variant="l" type="radio"/>
          <SelectSizeBtn variant="xl" type="radio"/>
          <SelectSizeBtn variant="xxl" type="radio"/>
        </div>
  )
}

export default SizePiker