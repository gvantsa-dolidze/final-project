import Button from "../../components/elements/Button";
import ImgElement from "../../components/elements/ImgElement";
import AdminTableCell from "./AdminTableCell";
import AdminTableHeader from "./AdminTableHeader";

const AdminTable = () => {
  return (
    <div>
      <table className="w-full p-7">
        <AdminTableHeader />
        <AdminTableCell />
        <AdminTableCell />
        <AdminTableCell />
      </table>
    </div>
  );
};

export default AdminTable;
