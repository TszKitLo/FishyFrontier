import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addProduct = (product) => {
    setOrder([...order, product]);
  };

  const removeProduct = (productName) => {
    setOrder(order.filter((product) => product.name !== productName));
  };

  return (
    <OrderContext.Provider value={{ order, addProduct, removeProduct }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
