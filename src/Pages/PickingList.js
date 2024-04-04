import SideBar from "../components/SideBar";
import { Order } from "../components/Order";
import { useEffect, useState } from "react";
import { ListOrder } from "../service/order-service";

export default function PickingList() {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    async function fetchOrder() {
      try {
        const resp = await ListOrder();
        setOrderList(resp);
      } catch (error) {
        console.log(error);
      }
    }

    fetchOrder();
  }, []);

  console.log(orderList);
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
            <div className="row mb-3">Picking List</div>
            {orderList.map((order) => {
              return (
                <Order
                  key={order.salesOrderHeader.id}
                  orderId={order.salesOrderHeader.id}
                  customerName={order.salesOrderHeader.customer}
                  orderDate={order.salesOrderHeader.orderDate}
                  orderDetails={order.salesOrderDetails}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
