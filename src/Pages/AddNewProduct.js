import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../nillkin-case-1.jpg";
import SideBar from "../components/SideBar";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";

function EditProductDetail() {
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5 py-4 px-xl-1">
      <ScrollToTopOnMount />

      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-3 me-5">
          <div className="border rounded shadow-sm">
            <SideBar />
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-column h-100">
                <h2 className="mb-4">Product Detail</h2>

                <form>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="name">Enter product name: </label>
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
                    <div className="col">
                      <label htmlFor="description">Description </label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="cost">Cost </label>
                      <input
                        type="number"
                        className="form-control"
                        id="cost"
                        name="cost"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="sales_price">Sales Price </label>
                      <input
                        type="number"
                        className="form-control"
                        id="sales_price"
                        name="sales_price"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="item_number">Item Number </label>
                      <input
                        type="text"
                        className="form-control"
                        id="item_number"
                        name="item_number"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="expiryDate">Expiry Date </label>
                      <input
                        type="date"
                        className="form-control"
                        id="expiryDate"
                        name="expiryDate"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="stock">Stock </label>
                      <input
                        type="number"
                        className="form-control"
                        id="stock"
                        name="stock"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="sales_price">Location </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row g-3 mt-4 mb-4">
                    <div className="col">
                      <Link to="/manage-inventory">
                        <button className="btn btn-outline-dark py-2 w-100">
                          Back
                        </button>
                      </Link>
                    </div>
                    <div className="col">
                      <button className="btn btn-dark py-2 w-100" disabled>Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">

            <input type="file" />

                <button className="btn btn-primary mt-3" disabled>Upload Image</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductDetail;
