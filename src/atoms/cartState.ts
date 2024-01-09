import { atom } from "recoil";

type Product = {
  id: number;
  src: string;
  title: string;
  price: number;
  inCart: boolean;
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
