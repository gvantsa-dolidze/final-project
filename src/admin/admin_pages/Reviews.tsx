import Pagination from "../../components/elements/Pagination";
import SearchBar from "../../components/header_components/SearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const Reviews = () => {
  return (
    <div className="bg-white rounded-md border">
      <div className="flex justify-between items-center p-7">
        <h3>Reviews</h3>
        <SearchBar />
      </div>{" "}
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
