import PropTypes from "prop-types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center mt-3 border border-black p-4 w-80 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col items-center">
          <span className="font-light">01.02.03</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex gab-2 items-center">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number,

  totalProducts: PropTypes.number,
};

export default OrdersCard;
