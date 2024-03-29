// need to add serach button functionality and add new product page
import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function ManageInventory() {

  // const [search, setSearch] = useState([]);
  const [search, setSearch] = useState([
    { itemNumber: "1", description: "Product A", stock: 10, price: 20, tax: 5 },
    { itemNumber: "2", description: "Product B", stock: 15, price: 30, tax: 6 },
  ]);

  return (
<div className="container mt-5 py-4 px-xl-5">
  <div className="row mb-4 mt-lg-3">
    <div className="d-none d-lg-block col-lg-3">
      <div className="border rounded shadow-sm">
        <SideBar />
      </div>
    </div>
    <div className="col-lg-9">
      <div className="d-flex flex-column h-100">
        <div className="row mb-3">
          <div className="input-group mb-3 mt-4">
            <input type="text" className="form-control" placeholder="Enter product name: " aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-dark" type="button">Search</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end mt-4">
            <button className="btn btn-outline-dark" type="button">Add new products</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h5 className="mt-3">Serach Result</h5>
            <div className="table-responsive">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Item Number</th>
                    <th scope="col">Description</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Tax</th>
                  </tr>
                </thead>
                <tbody>
                 {search.length > 0 ? 
                 (search.map((result) => (
                  <tr key={result.itemNumber}>
                    <td><Link to={{ pathname: `/manage-inventory/${result.itemNumber}`, state: {product: result}}}>{result.itemNumber}</Link></td>
                    <td>{result.description}</td>
                    <td>{result.stock}</td>
                    <td>${result.price}</td>
                    <td>{result.tax}</td>
                  </tr>
                 ))) : 
                 (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                 )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
