import InputElement from "../elements/InputElement";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
const  [value, setValue] = useState<string>('');
const navigate = useNavigate();
const onChangeSearch = (e: any) => {
  setValue(e.target.value);
}

const onSubmit = (e: any) => {
  e.preventDefault()
  console.log(value)
  navigate("listing_page")
}
  return (
    <div className="border rounded-md px-3 py-1 w-56 flex items-center gap-2 justify-start">
      <img src="/img/icons/Search.png" alt="" />
      <form onSubmit={onSubmit}>
        <InputElement variant="noBorder" type="text" onChange={onChangeSearch}/>
      </form>
    </div>
  );
};

export default SearchBar;
