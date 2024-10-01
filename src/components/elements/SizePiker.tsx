import SelectSizeRadioBtn from "./SelectSizeRadioBtn"
const SizePiker = () => {
  return (
    <div className="space-x-2 flex">
          <SelectSizeRadioBtn variant="s" />
          <SelectSizeRadioBtn variant="m" />
          <SelectSizeRadioBtn variant="l" />
          <SelectSizeRadioBtn variant="xl" />
          <SelectSizeRadioBtn variant="xxl" />
        </div>
  )
}

export default SizePiker