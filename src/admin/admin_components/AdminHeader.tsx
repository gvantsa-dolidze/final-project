import Breadcrumb from "../../components/elements/Breadcrumb"
import Button from "../../components/elements/Button"

const AdminHeader = () => {
  return (
    <div className="flex justify-between items-center">
        <Breadcrumb label='Admin' title=''/>
        <Button />
    </div>
  )
}

export default AdminHeader