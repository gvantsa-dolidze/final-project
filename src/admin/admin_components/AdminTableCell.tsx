import Button from "../../components/elements/Button";
import ImgElement from "../../components/elements/ImgElement";
import ProductPrice from "../../components/elements/ProductPrice";

interface AdminTableCellProps {
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

const AdminTableCell: React.FC<AdminTableCellProps> = ({
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
  email = "Email",
  sku = "SKU",
  address = "Address",
  price = "Price",
  stock = "Stock",
  categories = "Categories",
  action = "Action",
  total = "Total",
  status = "Status",
  order = "Order",
  date = "Date",
  review = "Review",
}) => {
  return (
    <tr className="border-b">
      <td className="flex justify-center items-center py-2">
        <ImgElement />
      </td>
      {showName && (
        <td>
          <p className="text-start">{name}</p>
        </td>
      )}
      {showOrder && (
        <td>
          <p className="text-start">{order}</p>
        </td>
      )}

      {showPrice && (
        <td>
          <ProductPrice />{" "}
        </td>
      )}
      {showSKU && (
        <td>
          <p className="text-start">{sku}</p>
        </td>
      )}
      {showStock && (
        <td>
          <p className="text-start">{stock}</p>
        </td>
      )}
      {showCategories && (
        <td>
          <p className="text-start">{categories}</p>
        </td>
      )}
      {showEmail && (
        <td>
          <p className="text-start">{email}</p>
        </td>
      )}
      {showAction && (
        <td>
          <p className="text-start">{action}</p>
        </td>
      )}
      {showDate && (
        <td>
          <p className="text-start">{date}</p>
        </td>
      )}
      {showTotal && (
        <td>
          <ProductPrice />{" "}
        </td>
      )}
      {showStatus && (
        <td>
          <p className="text-start">{status}</p>
        </td>
      )}

      {showAddress && (
        <td>
          <p className="text-start">{address}</p>
        </td>
      )}
      {showReview && (
        <td>
          <p className="text-start">{review}</p>
        </td>
      )}
      <td>
        <Button img="/img/icons/More.png" variant="link" />
      </td>
    </tr>
  );
};

export default AdminTableCell;
