// need to add serach button functionality and add new product page
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import { ManageProduct } from "../service/manage-product-service";

export default function ManageInventory() {
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await ManageProduct();
        setSearch(resp.productInventoryDetailList);
      } catch (error) { }
    }
    fetchData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filterProducts = (products, searchTerm) => {
    return products.filter((product) =>
      product.productEng.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  const filteredProducts = filterProducts(search, searchInput);

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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product name: "
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={handleSearchInputChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-dark" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-end mt-4">
                <Link to="/add-product">
                  <button className="btn btn-outline-dark" type="button">
                    Add new products
                  </button>
                </Link>
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
                        <th scope="col">Brand/Product</th>
                        <th scope="col">Name(EN/CH)</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Tax</th>
                        <th scope="col">Expiry Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((result) => (
                          <tr key={result.id}>
                            <td>
                              <Link
                                to={{
                                  pathname: `/manage-inventory/${result.productCode}`,
                                  state: { product: result },
                                }}
                              >
                                {result.productCode}
                              </Link>
                            </td>
                            <td>{result.brandChi}</td>
                            <td>{result.productEng}/{result.productChi} ({result.unit} of {result.packageDescEng})</td>
                            <td>{result.stock}</td>
                            <td>${result.price}</td>
                            <td>{result.tax}</td>
                            <td>{result.expiryDate}</td>
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
