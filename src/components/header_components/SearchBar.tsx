import InputElement from "../elements/InputElement"

const SearchBar = () => {
  return (
    <form className="border rounded-md px-3 flex items-center">
        <div className="flex items-center gap-2">
            <img src="/img/icons/Search.png" alt="" />
            <InputElement variant='noBorder' type='text'/>
        </div>
    </form>
  )
}

export default SearchBar