import React from "react";
import { GrTrash } from "react-icons/gr";
import { useRecoilState } from "recoil";
import { cartState } from "../../../atoms/cartState";
import CartItem from "./CartItem/CartItem";

const CartHeader: React.FC = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const { product } = cartItems[0] || {};

  return (
    <article className="w-full">
      <header className="flex justify-between items-center mb-3">
        <h1 className="text-xl">Το καλάθι μου</h1>
        <button className="flex items-center gap-1 font-semibold text-red-400 cursor-pointer">
          <span>Άδεισμα καλαθιού</span>
          <GrTrash />
        </button>
      </header>
      <main className="flex flex-col gap-3">
        <CartItem />
        <CartItem />
      </main>
    </article>
  );
};
export default CartHeader;
