import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const Reviews = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar showButton={false} />
      <table className="w-full p-7">
        <AdminTableHeader showName={true} showReview={true} showAction={true} />
        <AdminTableCell
          showName={true}
          name="Esther Howard"
          showReview={true}
          review="Completed the task and added the ..."
        />
      </table>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Reviews;
