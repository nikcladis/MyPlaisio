import React from "react";
import productImg from "../../../../assets/products_images/p1.jpg";
import { IoMdCheckmark } from "react-icons/io";

type CartItemProps = {};

const CartItem: React.FC<CartItemProps> = () => {
  return (
    <article className="border border-gray-200 p-2 rounded-md">
      <div className="flex flex-col">
        <div className="flex gap-3 items-center">
          <img src={productImg} alt="product" className="w-24" />
          <div>
            <h2 className="font-semibold">Product Name</h2>
            <span className="text-gray-500 text-sm font-semibold">30330</span>
            <div className="w-fit font-semibold text-blue-400 text-sm">
              <button>Wishlist</button>
              <span>{` | `}</span>
              <button>Αφαίρεση</button>
            </div>
          </div>
          <div className="flex flex-col gap-2 ml-auto mt-3.5 self-start">
            <span className="font-semibold ml-2">69.99 €</span>
            <div className="flex items-center gap-2 self-end mt-3">
              <button>-</button>
              <span className="border border-gray-300 px-2.5 rounded-md text-gray-500 font-semibold">
                1
              </span>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <IoMdCheckmark className="text-green-500" />
          <span className="text-xs font-semibold">Παράδοση στον χώρο σου</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <IoMdCheckmark className="text-green-500" />
          <span className="text-xs font-semibold">Παραλαβή απο κατάστημα</span>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
