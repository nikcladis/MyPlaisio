import React from "react";
import CartList from "./CartList/CartList";

type CartProps = {};

const Cart: React.FC<CartProps> = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <CartList />
    </div>
  );
};
export default Cart;
