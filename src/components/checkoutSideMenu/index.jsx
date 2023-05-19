import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../orderCard";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCount((current) => current - 1);
    context.setCartProducts(filteredProducts);
    console.log(context.cartProducts);
  };
  const totalPrice = (array) => {
    let total = 0;
    array.forEach((product) => {
      total += product.price;
    });
    return total;
  };
  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setIsCheckoutSideMenuOpen((current) => !current);
    context.setSearchByTitle("");
    context.setSearchByCategory("");
  };
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col justify-between fixed w-[360px] h-[calc(100vh-76px)] p-6 right-0 top-[76px] border border-black/25 rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Shopping Cart</h2>
        <div
          className="cursor-pointer"
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
        >
          <XMarkIcon className="h-5 w-5 text-black-500" />
        </div>
      </div>
      <div className="flex flex-col flex-1 mt-4 gap-2 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.name}
            imageUrl={product.url}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="flex justify-between py-6 items-center">
        <h2 className="font-medium text-md">Total</h2>
        <p className="font-medium text-md">{context.cartProducts.length}</p>
        <p className="font-semibold text-xl">
          $ {totalPrice(context.cartProducts)}
        </p>
      </div>
      <Link to="/my-orders/last">
        <button
          className="w-full py-3 bg-black text-white rounded-lg"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export default CheckoutSideMenu;
