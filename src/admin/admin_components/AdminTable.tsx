import Button from "../../components/elements/Button"
import ImgElement from "../../components/elements/ImgElement"

const AdminTable = () => {
  return (
    <div>
        <table className="w-full p-7">
        <tr className="border-b border-t">
          <th>
            <Button variant="link" img="/img/icons/Sort.png" />
          </th>
          <th>
            <p className="text-start">name</p>
          </th>
          <th>
            <p className="text-start">SKU</p>
          </th>
          <th>
            <p className="text-start">Price</p>
          </th>
          <th>
            <p className="text-start">Stock</p>
          </th>
          <th>
            <p className="text-start">Categories</p>
          </th>
          <th>
            <p>Action</p>
          </th>
        </tr>
        <tr className="border-b">
          <td className="flex justify-center items-center">
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
        <tr>
          <td className="flex justify-center items-center">
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
      </table>
    </div>
  )
}

export default AdminTable