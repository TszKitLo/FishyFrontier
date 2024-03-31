import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";


export default function Order() {
  
  const [todayDate, setTodayDate] = useState('');

  const [search, setSearch] = useState([
    { itemNumber: "1", description: "Product A", stock: 10, price: 20, tax: 5 },
    { itemNumber: "2", description: "Product B", stock: 15, price: 30, tax: 6 },
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

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    console.log(currentDate);
    setTodayDate(currentDate);
  },[])

  console.log(order)

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
                  <label htmlFor="name" className="col-form-label">Client name: </label>
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
                    <label htmlFor="orderDate" className="col-form-label">Order Date: </label>
                  </div>
                <div className="col"> 
                  <input
                    type="date"
                    className="form-control"
                    id="orderDate"
                    name="orderDate"
                    onChange={handleChange}
                    defaultValue={todayDate}
                  />
                </div>
              </div>

              <div className="row mb-3">
                  <div className="col-auto"> 
                    <label htmlFor="deliveryDate" className="col-form-label">Delivery Date: </label>
                  </div>
                <div className="col"> 
                  <input
                    type="date"
                    className="form-control"
                    id="deliveryDate"
                    name="deliveryDate"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                  <div className="col-auto"> 
                    <label htmlFor="amount" className="col-form-label">Total Amount: </label>
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
                  <label htmlFor="unit" className="col-form-label">Total Unit: </label>
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
                    <tr key={result.itemNumber}>
                      <td>{result.itemNumber}</td>
                      <td>{result.description}</td>
                      <td>{result.stock}</td>
                      <td>${result.price}</td>
                      <td>{result.tax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-lg-9 d-flex justify-content-end align-items-center mt-4">
              <button className="btn btn-outline-dark py-2 me-5">Back</button>
              <button className="btn btn-dark ms-5">Confirm</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
