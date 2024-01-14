import React from "react";
import { GrTrash } from "react-icons/gr";
import { useRecoilState } from "recoil";
import { cartState } from "../../../atoms/cartState";
import CartItem from "./CartItem/CartItem";
import emptyCart from "../../../assets/empty-cart.png";
import { Link } from "react-router-dom";

type CartListProps = {};

const CartList: React.FC<CartListProps> = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  if (cartItems.length === 0)
    return (
      <article className="w-full lg:w-3/4">
        <div className="flex flex-col bg-white max-w-[700px] p-4">
          <h1 className="text-xl font-semibold">Το καλάθι μου</h1>
          <img src={emptyCart} alt="empty cart" className="mx-auto" />
          <p className="text-center font-bold">Το καλάθι σου είναι άδειο</p>
          <Link to="/">
            <button className="self-start mt-10 border border-green-500 text-green-500 py-2 px-4 rounded-md font-bold">
              Συνέχεια αγορών
            </button>
          </Link>
        </div>
      </article>
    );

  return (
    <article className="w-full bg-white">
      <header className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-semibold">Το καλάθι μου</h1>
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

export default CartList;
