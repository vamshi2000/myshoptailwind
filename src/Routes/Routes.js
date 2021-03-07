import HomePage from "../Pages/HomePage";
import OrderStatus from "../Pages/OrderStatus";

const routes = [
  {
    path: "/",
    exact: false,
    component: HomePage,
  },
  {
    path: "/orderstatus",
    exact: false,
    component: OrderStatus,
  },
];
export default routes;
