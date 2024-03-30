import Header from "./Header";
import Content from "./Content";
import { OrderProvider } from "../salesContext";
import Footer from "./Footer";

function Template(props) {
  return (
    <>
      <OrderProvider>
        {" "}
        <Header />
        <Content>{props.children}</Content>
        <Footer />
      </OrderProvider>
    </>
  );
}

export default Template;
