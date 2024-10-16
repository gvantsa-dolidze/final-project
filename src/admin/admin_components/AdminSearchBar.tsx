import Button from "../../components/elements/Button"
import SearchBar from "../../components/header_components/SearchBar"

const AdminSearchBar = () => {
  return (
    <div className="flex justify-between p-7 items-center">
    <h3>Products</h3>
    <div className="flex gap-5">
      <Button label="Add product" />
      <SearchBar />
    </div>
  </div>
  )
}

export default AdminSearchBar