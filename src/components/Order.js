import { Card, Table, Form, Button } from "react-bootstrap";
import { useState } from "react";

export const Order = ({ orderId, customerName, orderDate, orderDetails }) => {
  function RadioGroup() {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <Form>
        <Form.Group controlId="formBasicCheckbox" className="mb-3">
          <Form.Label inline>Status:</Form.Label>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="Pending"
              name="radioGroup"
              type="radio"
              id={`inline-radio-1`}
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Done"
              name="radioGroup"
              type="radio"
              id={`inline-radio-2`}
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
      </Form>
    );
  }
  return (
    <div marginY="16px">
      <Card style={{ padding: "16px", margin: "16px" }}>
        <p>Order # {orderId}</p>
        <p>Customer name: {customerName}</p>
        <p>Order date: {orderDate.split("T")[0]}</p>
        <RadioGroup />

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product #</th>
              <th>Product Description</th>
              <th>Unit</th>
              <th>Quantities</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((o) => {
              return (
                <tr>
                  <td>{o.salesOrderDetail.id}</td>
                  <td>{o.salesOrderDetail.productID}</td>
                  <td>
                    {o.productBrandEng || ""}{" "}
                    {o.productPackageDescriptionEng || ""}
                  </td>
                  <td>{o.salesOrderDetail.unit}</td>
                  <td>{o.salesOrderDetail.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div className="d-flex justify-content-end">
          <Button variant="primary">Send to Print</Button>
        </div>
      </Card>
    </div>
  );
};
