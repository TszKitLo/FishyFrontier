import { Card, Table, DropdownButton, Dropdown } from 'react-bootstrap'

export const OrderForm = ({
    orderId,
    customerName,
    orderDate,
    productArray
}) => {

    const StatusDropdown = () => {
        return (<DropdownButton id="dropdown-basic-button" title="Status">
            <Dropdown.Item >Pending</Dropdown.Item>
            <Dropdown.Item >Something Done</Dropdown.Item>
        </DropdownButton>)
    }
    return (<><Card backgroundColor="white">
        <p>Order # {orderId}</p>
        <p>Customer name: {customerName}</p>
        <p>Order date: {orderDate}</p>
        <p>Status: </p><StatusDropdown />

        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Description</th>
                    <th>Unit</th>
                    <th>Quantities</th>
                </tr>
            </thead>
            <tbody>
                {productArray.map((product) => {
                    return (<><td>{product.id}</td>
                        <td>{product.brand} {product.name}</td>
                        <td>{product.unit}</td>
                        <td>{product.quantity}</td></>)



                })}
            </tbody>

        </Table>

    </Card ></>)

}