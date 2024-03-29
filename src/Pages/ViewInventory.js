import { useState, useEffect } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import SideBar from "../components/SideBar";
import FeatureProduct from "../landing/FeatureProduct";
import { ListProduct } from "../service/product-service";

export default function ViewInventory() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await ListProduct();
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  const handleSearch = () => {
    // todo: call api
  };

  const FilterBar = () => {
    return (
      <ButtonToolbar className="justify-content-between">
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
            Veggie
          </Button>
          <Button
            variant="outline-primary"
            style={{ marginRight: 10 }}
            size="xs"
          >
            Sauce
          </Button>
        </div>

        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search by name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{ marginRight: 10 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-dark"
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

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {Array.from({ length: 9 }, (_, i) => {
                return <FeatureProduct />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}