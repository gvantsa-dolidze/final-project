const SearchBar = () => {
  return (
    <form className="border rounded-md px-3 py-2">
        <div className="flex items-center gap-2">
            <img src="/img/icons/Search.png" alt="" />
            <input type="text" placeholder="Search products" className="outline-none"/>
        </div>
        
    </form>
  )
}

export default SearchBar