import Pagination from "../../components/elements/Pagination";
import SearchBar from "../../components/header_components/SearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAllUsers } from '../../store/app/AllUsersReducer'

const Customers = () => {


  const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(getAllUsers());
    },[]);
  
    const users = useAppSelector((state) => state.allUsers.data || []);
  

  return (
    <div className="bg-white rounded-md border">
      <div className="flex justify-between items-center p-7">
        <h3>Customers</h3>
        <SearchBar />
      </div>
      <table className="w-full p-7">
        <AdminTableHeader
          showName={true}
          showEmail={true}
          showAddress={true}
          address="Shipping Address"
          showAction={true}
        />
        {users.map((user: any) => (
        <AdminTableCell
          showName={true}
          name={user.name.firstname + " " + user.name.lastname}
          showEmail={true}
          email={user.email}
          showAddress={true}
          address={user.address.city + ", " + user.address.street + " " + user.address.number}
          showImage={true}
          image=''
        />
      ))}
      </table>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Customers;
