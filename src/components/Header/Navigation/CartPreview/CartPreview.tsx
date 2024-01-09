import React from "react";
import { GrCart } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../../atoms/cartState";

type CartPreviewProps = {};

const CartPreview: React.FC<CartPreviewProps> = () => {
  const cart = useRecoilValue(cartState);

  if (cart.length === 0) {
    return <GrCart fontSize={30} className="cursor-pointer" />;
  }

  return (
    <div className="relative">
      <GrCart fontSize={30} className="cursor-pointer" />
      <div className="flex absolute w-6 -top-2 left-4 justify-center items-center aspect-square bg-purple-600 rounded-full text-white">
        {cart.length}
      </div>
    </div>
  );
};
export default CartPreview;
