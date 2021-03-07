import React from "react";
import OSShippingInfo from "../OrderStatus/OSShippingInfo";
import OrderDetails from "../OrderStatus/OrderDetails";

const OrderStatus = () => {
  return (
    <section id="orderstatus" className="container mx-auto mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        <OSShippingInfo />
        <OrderDetails />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

export default OrderStatus;
