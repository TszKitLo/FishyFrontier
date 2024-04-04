import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreateProduct } from "../service/create-order";
import { useOrder } from "../salesContext";


export default function Order() {

  const { order } = useOrder();
  const [tempOrder, setTempOrder] = useState([]);
  const [createOrder, setCreateOrder] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);


  console.log(createOrder);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCreateOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  // console.log(tempOrder);
  // console.log(createOrder);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(createOrder);
    try {
      const res = await CreateProduct(createOrder)

      // navigate('/');
      console.log("sent");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const extractedInfoArray = order.map(item => {
      const { productCode, id, pPrice, name, unit, pPackage, quantity } = item;
      return { productCode, price : pPrice, name, unit, qty: Number(quantity), taxAmount: Number((pPrice * 0.13).toFixed(2)) };
    });

    setTempOrder(extractedInfoArray);
  }, [order]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setCreateOrder({ orderCreateDate: currentDate, details: tempOrder });
  }, [tempOrder]);

  useEffect(() => {
    const total = tempOrder.reduce((acc, item) => {
      return acc + (item.price + item.taxAmount) * item.qty;
    }, 0.0);
    setTotalAmount(total.toFixed(2));
  }, [createOrder]);


  return (
    <div className="container mt-5 py-4 px-xl-5">
      <div className="row mb-4 mt-lg-3">
        <div className="d-none d-lg-block col-lg-3">
          <div className="border rounded shadow-sm">
            <SideBar />
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row">
            <div className="col ms-4">
              <h2 className="mb-4">Sales Order</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7 ms-4">
              <form>
                <div className="row mb-3">
                  <div className="col-auto">
                    <label htmlFor="clientName" className="col-form-label">
                      Client name:{" "}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="clientName"
                      name="clientName"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-auto">
                    <label htmlFor="orderCreateDate" className="col-form-label">
                      Order Date:{" "}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      id="orderCreateDate"
                      name="orderCreateDate"
                      onChange={handleChange}
                      defaultValue={createOrder.orderCreateDate}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-auto">
                    <label
                      htmlFor="expectedDeliveryDate"
                      className="col-form-label"
                    >
                      Delivery Date:{" "}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      id="expectedDeliveryDate"
                      name="expectedDeliveryDate"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-auto">
                    <label htmlFor="amount" className="col-form-label">
                      Total Amount:{" $"}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      name="amount"
                      value={totalAmount}
                      onChange={handleChange}
                    />
                  </div>
                </div>

              </form>
            </div>

            <div className="col-lg-10 mt-4">
              <div className="table-responsive">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Item Number</th>
                      <th scope="col">Brand/Product Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Price</th>
                      <th scope="col">Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tempOrder.map((result) => (
                      <tr key={result.productCode}>
                        <td>{result.productCode}</td>
                        <td>{result.name}</td>
                        <td>{result.qty}</td>
                        <td>{result.unit}</td>
                        <td>${result.price}</td>
                        <td>${result.taxAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="col-lg-9 d-flex justify-content-end align-items-center mt-4">
                <Link to="/view-inventory">
                  <button className="btn btn-outline-dark py-2 me-5">
                    Back
                  </button>
                </Link>
                <button className="btn btn-dark ms-5" onClick={handleSubmit}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
