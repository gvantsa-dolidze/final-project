import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const Reviews = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar showButton={false} />
      <table className="w-full p-7">
        <AdminTableHeader showName={true} showReview={true} showAction={true} />
      </table>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Reviews;
