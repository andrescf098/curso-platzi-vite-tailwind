import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed w-[360px] h-auto right-50% top-50% border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => {
            context.closeProductDetail();
          }}
        >
          <XMarkIcon className="h-5 w-5 text-black-500" />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productShow.url}
          alt=""
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl">
          $ {context.productShow.price}
        </span>
        <span className="font-medium text-md">{context.productShow.name}</span>
        <span className="font-light text-sd">
          {context.productShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
