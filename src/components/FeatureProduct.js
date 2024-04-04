import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useOrder } from "../salesContext";
import { GetProductById } from "../service/product-service";

function FeatureProduct({
  id,
  brand,
  cbrand,
  name,
  cname,
  image = null,
}) {
  const link = "#/products/" + id;
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productDetail, setProductDetail] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [packaging, setPackaging] = useState(0);
  const { order, addProduct } = useOrder();
  const imageLink = `${process.env.REACT_APP_API_URL}${image}`;
  
  // Define the function to fetch product details inside the useEffect hook.
  async function fetchProduct(productId) {
    try {
      // Assuming GetProductById is a function that fetches product details by ID.
      const resp = await GetProductById(productId);
      if (resp.productDetailList) {
        // Update the state with the fetched product details.
        setProductDetail(resp.productDetailList);
      }
    } catch (error) {
      // Log any errors that occur during the fetch operation.
      console.log(error);
    }
  }

  const RadioCard = ({ packageName, index, stock, price, unit }) => {
    console.log(packaging, index)

    if (stock === 0) {
      return null;
    }
    
    return (<Card>
      <Card.Body>
        <Card.Text>

          <Form.Check
            inline
            label={`${unit} of ${packageName} | `}
            name="radioGroup"
            type="radio"
            id={index}
            value={index}
            checked={packaging === index && stock > 0}
            onChange={() => setPackaging(index)}
            disabled={stock === 0}
          />

          <span style={{ color: stock === 0 ? 'grey' : 'inherit' }}>
            {stock === 0 ? "Sold Out" : `${stock} remaining`} | {price} CAD
          </span>

        </Card.Text>

      </Card.Body>
    </Card>)
  }

  function ModalBody() {

    if (productDetail.length !== 0) {
      console.log("enter the modal...");

    const hasAvailableStock = productDetail.some(
      (product) => product.stock > 0
    );
      return (
        <div style={{ textAlign: "center" }}>
          <img
            className="card-img-top bg-dark cover"
            height="240"
            alt=""
            src={imageLink}
          />
          <p>
            {" "}
            <b>{productDetail[0].brandEng}/{productDetail[0].brandChi}</b> {productDetail[0].productEng}{" "}
          </p>
          <p>
            {" "}
          </p>

          <div>
            <Form>
              {productDetail.map((product, index) => (

                <RadioCard packageName={product.packageDescEng} stock={product.stock} index={index} price={product.price} unit={product.unit} />
              ))}
            </Form>
          </div>

          {hasAvailableStock && <input
            type="number"
            placeholder="Quantity"
            min={0}
            onChange={(e) => setQuantity(e.nativeEvent.data)}
          />}
        </div>)
    }
    return <></>

  }

  const handleOrder = () => {
    const productCode = productDetail[packaging].productCode;
    const unit = productDetail[packaging].unit;
    const pPrice = productDetail[packaging].price;
    const pPackaging = productDetail[packaging].packageDescEng;

    setSelectedProduct(null)
    addProduct({
      productCode,
      id,
      brand,
      name,
      pPrice,
      unit,
      pPackaging,
      quantity,
    });

  };

  const handleOnClick = (i) => {
    setSelectedProduct(i)
    fetchProduct(i)
    setPackaging(0)
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          width="auto"
          alt=""
          src={imageLink}
        />

        <div className="card-body">
          <h5 className="card-title text-center">{name} / {cname}</h5>
          <p className="card-text text-center text-muted">{brand} / {cbrand}</p>

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
                onClick={() => handleOnClick(id)}
              >
                Buy
              </Button>
              <Button
                variant="dark"
                style={{ width: "45%", align: "right" }}
                href={link}
              >
                {" "}
                Details{" "}
              </Button>

              <Modal show={selectedProduct === id} onHide={() => setSelectedProduct(null)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>{ModalBody()}</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleOrder} 
                  disabled={!productDetail.some(product => product.stock > 0)}>
                    Add to cart
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
}

export default FeatureProduct;
