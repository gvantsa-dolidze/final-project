import Button from "../../components/elements/Button"
import SearchBar from "../../components/header_components/SearchBar"

interface AdminSearchBarProps {
  showButton?: boolean; // Optional prop
}

const AdminSearchBar: React.FC<AdminSearchBarProps> = ({ showButton }) => {
  return (
    <div className="flex justify-between p-7 items-center">
    <h3>Products</h3>
    <div className="flex gap-5">
    {showButton && <Button label="Add product" />}
      <SearchBar />
    </div>
  </div>
  )
}

export default AdminSearchBar