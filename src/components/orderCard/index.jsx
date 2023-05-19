import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border border-black/20 rounded-lg">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-md font-light">{title}</p>
      </div>
      <div
        onClick={() => {
          handleDelete(id);
        }}
        className="flex items-center gap-2"
      >
        <p className="text-lg font-medium">${price}</p>
        {handleDelete && (
          <XMarkIcon className="h-5 w-5 text-black-500 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.array,
  price: PropTypes.number,
  handleDelete: PropTypes.func,
};

export default OrderCard;
