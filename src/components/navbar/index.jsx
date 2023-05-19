import NavElement from "./NavItem";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="bg-white flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <p to="/">Shopi</p>
        </li>
        <li>
          <NavElement to="/all" category="">
            All
          </NavElement>
        </li>
        <li>
          <NavElement to="/clothes" category="clothes">
            Clothes
          </NavElement>
        </li>
        <li>
          <NavElement to="/electronics" category="electronics">
            Electronics
          </NavElement>
        </li>
        <li>
          <NavElement to="/furnitures" category="furnitures">
            Furnitures
          </NavElement>
        </li>
        <li>
          <NavElement to="/toys" category="toys">
            Toys
          </NavElement>
        </li>
        <li>
          <NavElement to="/others" category="others">
            Others
          </NavElement>
        </li>
      </ul>
      <div className="flex justify-center items-center rounded-lg border border-black/20 w-80">
        <MagnifyingGlassIcon className="w-6 h-6 text-black mx-2" />
        <input
          type="text"
          placeholder="Search a Product"
          className="rounded-lg p-1 w-full focus:outline-none"
          onChange={(event) => {
            context.setSearchByTitle(event.target.value);
          }}
        />
      </div>
      <ul className="flex gap-3 ">
        <li className="text-black/60">test@correo.mail</li>
        <li>
          <NavElement to="/my-orders">My Orders</NavElement>
        </li>
        <li>
          <NavElement to="/my-account">My Account</NavElement>
        </li>
        <li>
          <NavElement to="/sign-in">Sign In</NavElement>
        </li>
        <li
          className="w-9 h-9 cursor-pointer"
          onClick={() => {
            context.setIsCheckoutSideMenuOpen((current) => !current);
          }}
        >
          <ShoppingCartIcon className="w-6 h-6 text-black" />
          <div className="relative flex justify-center items-center w-4 h-4 top-[-12px] left-[12px] rounded-full bg-red-400 text-white font-light">
            {context.cartProducts.length}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
