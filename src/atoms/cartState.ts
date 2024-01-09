import { atom } from "recoil";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const initialCartState: CartItem[] = [];

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: initialCartState,
});
