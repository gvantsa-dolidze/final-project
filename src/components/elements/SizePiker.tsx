import SelectSizeBtn from "./SelectSizeBtn"
const SizePiker = () => {
  return (
    <div className="space-x-2 flex">
          <SelectSizeBtn variant="s" />
          <SelectSizeBtn variant="m" />
          <SelectSizeBtn variant="l" />
          <SelectSizeBtn variant="xl"/>
          <SelectSizeBtn variant="xxl"/>
        </div>
  )
}

export default SizePiker