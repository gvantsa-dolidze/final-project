const SearchBar = () => {
  return (
    <form>
        <div className="flex items-center">
            <img src="/img/icons/Search.png" alt="" />
            <input type="text" placeholder="Search products" className="outline-none"/>
        </div>
        
    </form>
  )
}

export default SearchBar