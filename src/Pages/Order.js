import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { CreateProduct } from "../service/create-order";

export default function Order() {
  // use order from useOrder later

  const [search, setSearch] = useState([
    { product_id: "1", qty: 10, unit: "bag", price: 20, tax_amount: 5 },
    { product_id: "2", qty: 15, unit: "bag", price: 30, tax_amount: 6 },
  ]);

  const [order, setOrder] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(order);
    try {
      const res = await CreateProduct(order)
      // const res = await fetch('/api/auth/signin', {
      //   method : 'POST',
      //   headers : {
      //     'Content-Type' : 'application/json',
      //   },
      //   body : JSON.stringify(order),
      // });

      // navigate('/');
    } catch (error) {
      console.log(error);;
    }
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setOrder({ order_create: currentDate, details: search });
  }, []);

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
                    <label htmlFor="clientName" className="col-form-label">Client name: </label>
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
                    <label htmlFor="order_create" className="col-form-label">Order Date: </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-auto">
                    <label htmlFor="order_create" className="col-form-label">
                      Order Date:{" "}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      id="order_create"
                      name="order_create"
                      onChange={handleChange}
                      defaultValue={order.order_create}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-auto">
                    <label
                      htmlFor="expected_delivery_date"
                      className="col-form-label"
                    >
                      Delivery Date:{" "}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      id="expected_delivery_date"
                      name="expected_delivery_date"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-auto">
                    <label htmlFor="amount" className="col-form-label">
                      Total Amount:{" "}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      name="amount"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-auto">
                    <label htmlFor="unit" className="col-form-label">
                      Total Unit:{" "}
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      id="unit"
                      name="unit"
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
                      <th scope="col">Unit</th>
                      <th scope="col">Price</th>
                      <th scope="col">Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {search.map((result) => (
                      <tr key={result.product_id}>
                        <td>{result.product_id}</td>
                        <td>{result.unit}</td>
                        <td>{result.qty}</td>
                        <td>${result.price}</td>
                        <td>{result.tax_amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="col-lg-9 d-flex justify-content-end align-items-center mt-4">
                <button className="btn btn-outline-dark py-2 me-5">Back</button>
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
