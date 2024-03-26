// need to add serach button functionality and add new product page

import { useState } from "react";
import SideBar from "../components/SideBar";

export default function ManageInventory() {
  let [search, setSearch] = useState([]);
  // let [search, setSearch] = useState([
  //   { itemNumber: "1", description: "Product A", stock: 10, price: 20, tax: 5 },
  //   { itemNumber: "2", description: "Product B", stock: 15, price: 30, tax: 6 },
  // ]);

  return (
    <div class="container mt-5 py-4 px-xl-5">
      <div class="row mb-4 mt-lg-3">
        <div class="d-none d-lg-block col-lg-3">
          <div class="border rounded shadow-sm">
            <SideBar />
          </div>
        </div>
        <div class="col-lg-9">
          <div class="d-flex flex-column h-100">
            <div class="row mb-3">
              <div class="input-group mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter product name: "
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-dark" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex justify-content-end mt-4">
                <button class="btn btn-outline-dark" type="button">
                  Add new products
                </button>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-12">
                <h5 class="mt-3">Serach Result</h5>
                <div class="table-responsive">
                  <table class="table">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Item Number</th>
                        <th scope="col">Description</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Tax</th>
                      </tr>
                    </thead>
                    <tbody>
                      {search.length > 0 ? (
                        search.map((result) => (
                          <tr key={result.itemNumber}>
                            <td>{result.itemNumber}</td>
                            <td>{result.description}</td>
                            <td>{result.stock}</td>
                            <td>${result.price}</td>
                            <td>{result.tax}</td>
                          </tr>
                        ))
                      ) : (
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
  );
}
