import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const NavElement = ({ to, children, category }) => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => context.setSearchByCategory(category)}
    >
      {children}
    </NavLink>
  );
};
NavElement.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  category: PropTypes.string,
};
export default NavElement;
