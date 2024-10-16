import Button from "../../components/elements/Button"
import ImgElement from "../../components/elements/ImgElement"

const AdminTableCell = () => {
  return (
    <tr className="border-b">
          <td className="flex justify-center items-center py-2">
            <ImgElement />
          </td>
          <td>
            <p className="text-start">Raw Black T-Shirt Lineup</p>
          </td>
          <td>
            <p className="text-start">47514501</p>
          </td>
          <td>
            <p className="text-start">$75.00</p>
          </td>
          <td>
            <p className="text-start">In Stock</p>
          </td>
          <td>
            <p className="text-start">T-shirt, Men</p>
          </td>
          <td>
            <Button img="/img/icons/More.png" variant="link" />
          </td>
        </tr>
  )
}

export default AdminTableCell