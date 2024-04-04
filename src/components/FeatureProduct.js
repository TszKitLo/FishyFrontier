import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useOrder } from "../salesContext";
import { GetProductById } from "../service/product-service";

function FeatureProduct({
  id = "1",
  brand = "ABC",
  name = "Sample",
  cname = "chinese",
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
        console.log(`productDetail: ${resp.productDetailList}`);
      }
    } catch (error) {
      // Log any errors that occur during the fetch operation.
      console.log(error);
    }
  }

  const RadioCard = ({ packageName, index, stock, price, unit }) => {
    console.log(`packageName: ${packageName}, index: ${index}, stock: ${stock}, price: ${price}, unit: ${unit}`)
    return (<Card>
      <Card.Body>
        <Card.Text>

          <Form.Check
            inline
            label={`${unit} of ${packageName} | `}
            name="radioGroup"
            type="radio"
            id={index}
            value="option1"
            checked={packaging === index}
            onChange={setPackaging(index)}
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
      console.log("enter the modal...")
      console.log(productDetail)

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

          <input
            type="number"
            placeholder="Quantity"
            min={0}
            onChange={(e) => setQuantity(e)}
          />
        </div>)
    }
    return <></>

  }

  const handleOrder = () => {
    console.log(`packaging: ${packaging}`)
    const pPrice = productDetail[packaging].price;
    const pPackaging = productDetail[packaging].packagingDescEng;
    setSelectedProduct(null)
    addProduct({
      id,
      brand,
      name,
      pPrice,
      pPackaging,
      quantity,
    });

    console.log(`Order: ${order}`);
  };

  const handleOnClick = (i) => {
    setSelectedProduct(i)
    fetchProduct(i)
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
          <h5 className="card-title text-center">{name / cname}</h5>
          <p className="card-text text-center text-muted">{brand}</p>

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
                  <Button variant="primary" onClick={handleOrder}>
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
