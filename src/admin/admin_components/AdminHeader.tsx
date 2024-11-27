import Breadcrumb from "../../components/elements/Breadcrumb";
import Button from "../../components/elements/Button";

const AdminHeader = () => {
  return (
    <div className="flex justify-between p-7">
      <Breadcrumb
        title='Dashboard'
        label="Admin"
        secondaryLabel="Dashboard"
        destination="/admin_page"
        secondaryDestination="/admin_page/dashboard"
      />
      <Button img="/img/icons/logout.png" variant="gray" />
    </div>
  );
};

export default AdminHeader;
