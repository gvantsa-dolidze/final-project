import Breadcrumb from "../../components/elements/Breadcrumb";
import Button from "../../components/elements/Button";

const AdminHeader = () => {
  return (
    <div className="flex justify-between p-7">
      <Breadcrumb
        label="Admin"
        secondaryLabel="Dashboard"
        destination="/admin_page"
        secondaryDestination="/admin_page/dashboard"
      />
      <Button img="/img/icons/Logout.png" variant="gray" />
    </div>
  );
};

export default AdminHeader;
