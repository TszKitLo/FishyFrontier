import { Switch, Route } from "react-router-dom";
import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import Landing from "./landing/Landing";
import ManageInventory from "./Pages/ManageInventory";
import Order from "./Pages/Order";
import PickingList from "./Pages/PickingList";
import Setting from "./Pages/Setting";
import ViewInventory from "./Pages/ViewInventory";
import EditProductDetail from "./Pages/EditProductDetail";
import AddNewProduct from "./Pages/AddNewProduct";
import { OrderProvider } from "./salesContext";

function App() {
  return (
  <OrderProvider>
    <Template>
      <Switch>
        {/* <Route path="/products" exact>
          <ProductList />
        </Route> */}
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/manage-inventory/:itemNumber">
          <EditProductDetail />
        </Route>
        <Route path="/manage-inventory">
          <ManageInventory />
        </Route>
        <Route path="/add-product">
          <AddNewProduct />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/picking-list">
          <PickingList />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/view-inventory">
          <ViewInventory />
        </Route>
      </Switch>
    </Template>
  </OrderProvider>
  );
}

export default App;
