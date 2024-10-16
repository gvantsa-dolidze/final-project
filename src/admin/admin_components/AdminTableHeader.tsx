import Button from "../../components/elements/Button";

interface AdminTableHeaderProps {
  showName?: boolean;
  showSKU?: boolean;
  showPrice?: boolean;
  showStock?: boolean;
  showCategories?: boolean;
  showAction?: boolean;
  showTotal?: boolean;
  showStatus?: boolean;
  showOrder?: boolean;
  showDate?: boolean;
  showEmail?: boolean;
  showAddress?: boolean;
  showReview?: boolean;
  name?: string;
  sku?: string;
  price?: string;
  stock?: string;
  categories?: string;
  action?: string;
  total?: string;
  status?: string;
  order?: string;
  date?: string;
  email?: string;
  address?: string;
  review?: string;
}

const AdminTableHeader: React.FC<AdminTableHeaderProps> = ({
  showName = false,
  showSKU = false,
  showPrice = false,
  showStock = false,
  showCategories = false,
  showAction = false,
  showTotal = false,
  showStatus = false,
  showOrder = false,
  showDate = false,
  showEmail = false,
  showAddress = false,
  showReview = false,
  name = "Name",
  email = 'Email',
  sku = "SKU",
  address='Address',
  price = "Price",
  stock = "Stock",
  categories = "Categories",
  action = "Action",
  total = "Total",
  status = "Status",
  order = "Order",
  date = "Date",
  review = 'Review'
}) => {
  return (
    <tr className="border-b border-t">
      <th>
        <div className="pt-2">
          <Button variant="link" img="/img/icons/Sort.png" />
        </div>
      </th>
      {showName && (
        <th>
          <p className="text-start">{name}</p>
        </th>
      )}
      {showOrder && (
        <th>
          <p className="text-start">{order}</p>
        </th>
      )}
      {showDate && (
        <th>
          <p className="text-start">{date}</p>
        </th>
      )}
      {showEmail && (
        <th>
          <p className="text-start">{email}</p>
        </th>
      )}
      {showAddress && (
        <th>
          <p className="text-start">{address}</p>
        </th>
      )}
      
      {showTotal && (
        <th>
          <p className="text-start">{total}</p>
        </th>
      )}
      {showSKU && (
        <th>
          <p className="text-start">{sku}</p>
        </th>
      )}
      {showPrice && (
        <th>
          <p className="text-start">{price}</p>
        </th>
      )}
      {showReview && (
        <th>
          <p className="text-start">{review}</p>
        </th>
      )}
      {showStock && (
        <th>
          <p className="text-start">{stock}</p>
        </th>
      )}
      {showCategories && (
        <th>
          <p className="text-start">{categories}</p>
        </th>
      )}
      {showStatus && (
        <th>
          <p className="text-start">{status}</p>
        </th>
      )}
      {showAction && (
        <th>
          <p>{action}</p>
        </th>
      )}
    </tr>
  );
};

export default AdminTableHeader;
