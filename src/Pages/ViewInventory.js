import { useState, useEffect } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import SideBar from "../components/SideBar";
import FeatureProduct from "../components/FeatureProduct";
import { ListProduct } from "../service/product-service";

export default function ViewInventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await ListProduct();
        if (resp.productList.length !== 0) {
          setProductList(resp.productList);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function ProductList() {
    if (productList.length === 0) {
      return <></>;
    } else {
      console.log(`productList`, productList);

      return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {productList.map((product) => (
            < FeatureProduct
              key={product.id}
              id={product.id}
              cbrand={product.productBrand.descriptionChi}
              brand={product.productBrand.descriptionEng}
              name={product.descriptionEng}
              cname={product.descriptionChi}
              image={product.imageLink}
            />
          ))}
        </div>
      );
    }
  }

  const handleSearch = () => {
    // todo: call api
  };

  const FilterBar = () => {
    return (
      <ButtonToolbar className="justify-content-between" >
        <div>
          {" "}
          <Button
            variant="outline-primary"
            style={{ marginRight: 10 }}
            size="xs"
          >
            Seafood
          </Button>
          <Button
            variant="outline-primary"
            style={{ marginRight: 10 }}
            size="xs"
          >
            Dessert
          </Button>
          <Button
            variant="outline-primary"
            style={{ marginRight: 10 }}
            size="xs"
          >
            Dim Sum
          </Button>
        </div>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{ marginRight: 10 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </ButtonToolbar>
    );
  };

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
            <h1 className="center">View Inventory</h1>

            <FilterBar></FilterBar>
            <br />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}
