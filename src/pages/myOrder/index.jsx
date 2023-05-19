import { useContext } from "react";
import Layout from "../../components/layout";
import OrderCard from "../../components/orderCard";
import { ShoppingCartContext } from "../../context";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;
  return (
    <Layout>
      <div className="relative flex justify-center items-center w-80">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>

      <div className="flex flex-col w-80 gap-2 m-6">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.name}
            imageUrl={product.url}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}
export default MyOrder;
