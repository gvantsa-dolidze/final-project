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
  name = "Name",
  sku = "SKU",
  price = "Price",
  stock = "Stock",
  categories = "Categories",
  action = "Action",
  total = "Total",
  status = "Status",
  order = "Order",
  date = "Date",
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
          <p>{order}</p>
        </th>
      )}
      {showDate && (
        <th>
          <p>{date}</p>
        </th>
      )}
      {showTotal && (
        <th>
          <p>{total}</p>
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
          <p>{status}</p>
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
