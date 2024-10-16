import Button from "../../components/elements/Button"
const AdminTableHeader = () => {
  return (
    <tr className="border-b border-t">
          <th>
            <div className="pt-2">
              <Button variant="link" img="/img/icons/Sort.png" />
            </div>
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
  )
}

export default AdminTableHeader