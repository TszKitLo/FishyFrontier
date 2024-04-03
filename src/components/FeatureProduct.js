import { Button, Modal } from "react-bootstrap";
import Image from "../nillkin-case.webp";
import { useState } from "react";
import { useOrder } from "../salesContext";

function FeatureProduct({
  id = "1",
  brand = "ABC",
  name = "Sample",
  size = "18 pack",
  price = 100,
  stock = 100,
  image = Image,
}) {
  const link = "#/products/" + id;
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(0)
  const { order, addProduct } = useOrder()
  function ModalBody() {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={image}
        />
        <p>
          {" "}
          <b>{brand}</b> {name}{" "}
          <span style={{ textDecoration: "underline" }}>{size}</span>
        </p>
        <p>
          {" "}
          {price} CAD {stock} in Stock{" "}
        </p>
        <input type="number" placeholder="Quantity" min={0} onChange={(e) => setQuantity(e)} />
      </div>
    );
  }

  const handleOrder = () => {
    setShow(false);
    addProduct({
      id, brand, name, size, price, quantity
    })

    console.log(`Order: ${order}`)
    // todo: save to context
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={image}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-center text-muted">{price}</p>
          <div className="d-grid gap-2">
            <div
              className="row g-3 mb-4"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Button
                variant="dark"
                style={{ marginRight: 10, width: "45%" }}
                onClick={() => setShow(true)}
              >
                Add to Cart
              </Button>
              <Button
                variant="dark"
                style={{ width: "45%", align: "right" }}
                href={link}
              >
                {" "}
                Details{" "}
              </Button>

              <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>{ModalBody()}</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleOrder}>
                    Add to cart
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
