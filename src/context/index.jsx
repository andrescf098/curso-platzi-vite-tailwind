import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const ShoppingCartContext = createContext();

export const ShoppingCartPrivider = ({ children }) => {
  // Shopping cart - Products
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping cart - order
  const [order, setOrder] = useState([]);
  // Product Detail - Open
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Checkout Side Menu - Open
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  // Product side show
  const [productShow, setProductShow] = useState({});
  // Get products
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  // Get Products by Title
  const [searchByTitle, setSearchByTitle] = useState("");
  // Get Products by Category
  const [searchByCategory, setSearchByCategory] = useState("");

  const productsGet = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITTLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITTLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITTLE", items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    }
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITTLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    }
    if (!searchByTitle && !searchByCategory) {
      filterBy(null, items, searchByTitle, searchByCategory);
    }
  }, [items, searchByTitle, searchByCategory]);

  useEffect(() => {
    productsGet();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productShow,
        setProductShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        items,
        productsGet,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartPrivider.propTypes = {
  children: PropTypes.element.isRequired,
};
