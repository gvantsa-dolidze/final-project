import InputElement from "../elements/InputElement";

const SearchBar = () => {
  return (
    <div className="border rounded-md px-3 py-1 w-56 flex items-center gap-2 justify-start">
      <img src="/img/icons/Search.png" alt="" />
      <form>
        <InputElement variant="noBorder" type="text"/>
      </form>
    </div>
  );
};

export default SearchBar;
