import Breadcrumb from "../../components/elements/Breadcrumb"
import Button from "../../components/elements/Button"

const AdminHeader = () => {
  return (
    <div className="flex justify-between p-7">
        <Breadcrumb label='Dashboard' title=''/>
        <Button  img="/img/icons/Logout.png" variant="gray"/>
    </div>
  )
}

export default AdminHeader