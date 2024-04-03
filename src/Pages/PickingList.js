import SideBar from "../components/SideBar";
import { Order } from "../components/Order";

export default function PickingList() {
  const sampleOrderList = [
    {
      salesOrderHeader: {
        id: 1,
        deleted: false,
        customer: "user_1",
        shippingAddress: null,
        orderDate: "2024-03-31T00:00:00Z",
        expectedDeliveryDate: "2024-04-01T00:00:00Z",
        orderNo: "O1711878383",
        referenceNo: "RO1711878383",
        taxAmount: 0.0,
        createdUser: null,
        createdDate: "2024-03-31T13:46:23.617Z",
        lastUpdatedUser: null,
        lastUpldatedDate: null,
        deleteUser: null,
        deleteDate: null,
      },
      salesOrderDetails: [
        {
          id: 1,
          deleted: false,
          salesOrderID: 1,
          productID: 6,
          qty: 2,
          unit: "bag",
          price: 2.2,
          taxAmount: 0.12,
          referenceNo: "RO1711878383",
          createdUser: null,
          createdDate: "2024-03-31T13:46:23.803Z",
          lastUpdatedUser: null,
          lastUpldatedDate: null,
          deleteUser: null,
          deleteDate: null,
        },
        {
          id: 2,
          deleted: false,
          salesOrderID: 1,
          productID: 3,
          qty: 4,
          unit: "bag",
          price: 2.2,
          taxAmount: 0.12,
          referenceNo: "RO1711878383",
          createdUser: null,
          createdDate: "2024-03-31T13:46:23.850Z",
          lastUpdatedUser: null,
          lastUpldatedDate: null,
          deleteUser: null,
          deleteDate: null,
        },
      ],
    },
    {
      salesOrderHeader: {
        id: 2,
        deleted: false,
        customer: "user_1",
        shippingAddress: null,
        orderDate: "2024-04-03T00:00:00Z",
        expectedDeliveryDate: "2024-04-02T00:00:00Z",
        orderNo: "O1712094772",
        referenceNo: "RO1712094772",
        taxAmount: 0.0,
        createdUser: null,
        createdDate: "2024-04-03T01:52:52.307Z",
        lastUpdatedUser: null,
        lastUpldatedDate: null,
        deleteUser: null,
        deleteDate: null,
      },
      salesOrderDetails: [
        {
          id: 3,
          deleted: false,
          salesOrderID: 2,
          productID: 6,
          qty: 2,
          unit: "bag",
          price: 2.2,
          taxAmount: 0.12,
          referenceNo: "RO1712094772",
          createdUser: null,
          createdDate: "2024-04-03T01:52:52.547Z",
          lastUpdatedUser: null,
          lastUpldatedDate: null,
          deleteUser: null,
          deleteDate: null,
        },
        {
          id: 4,
          deleted: false,
          salesOrderID: 2,
          productID: 3,
          qty: 4,
          unit: "bag",
          price: 2.2,
          taxAmount: 0.12,
          referenceNo: "RO1712094772",
          createdUser: null,
          createdDate: "2024-04-03T01:52:52.590Z",
          lastUpdatedUser: null,
          lastUpldatedDate: null,
          deleteUser: null,
          deleteDate: null,
        },
      ],
    },
  ];

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
            {sampleOrderList.map((order) => {
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
