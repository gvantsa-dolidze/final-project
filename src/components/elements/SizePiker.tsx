import SelectSizeRadioBtn from "./SelectSizeBtn"
const SizePiker = () => {
  return (
    <div className="space-x-2 flex">
          <SelectSizeRadioBtn variant="s" type='checkbox'/>
          <SelectSizeRadioBtn variant="m" type='checkbox'/>
          <SelectSizeRadioBtn variant="l" type='checkbox'/>
          <SelectSizeRadioBtn variant="xl" type='checkbox'/>
          <SelectSizeRadioBtn variant="xxl" type='checkbox'/>
        </div>
  )
}

export default SizePiker