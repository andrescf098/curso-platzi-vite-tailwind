import { useContext } from "react";
import Layout from "../../components/layout";
import OrdersCard from "../../components/ordersCard";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="relative flex justify-center items-center w-80">
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        );
      })}
    </Layout>
  );
}
export default MyOrders;
