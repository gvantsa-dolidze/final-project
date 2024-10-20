import InputElement from "../elements/InputElement";
import { useState } from "react";



const SearchBar = () => {

const  [value, setValue] = useState<string>('');

const onChangeSearch = (e: any) => {
  setValue(e.target.value);
}

  return (
    <div className="border rounded-md px-3 py-1 w-56 flex items-center gap-2 justify-start">
      <img src="/img/icons/Search.png" alt="" />
      <form>
        <InputElement variant="noBorder" type="text" onChange={onChangeSearch}/>
      </form>
    </div>
  );
};

export default SearchBar;
