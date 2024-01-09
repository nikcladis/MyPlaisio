import { atom } from "recoil";
import product1 from "../assets/products_images/p1.jpg";
import product2 from "../assets/products_images/p2.jpg";
import product3 from "../assets/products_images/p3.jpg";
import product4 from "../assets/products_images/p4.jpg";
import product5 from "../assets/products_images/p5.jpg";
import product6 from "../assets/products_images/p6.jpg";

type Product = {
  id: number;
  src: string;
  title: string;
  price: number;
  inCart: boolean;
};

const initialProducts: Product[] = [
  {
    id: 0,
    src: product1,
    title: "Fazn Type-C Hub 6-port USB3.1",
    price: 69.99,
    inCart: false,
  },
  {
    id: 1,
    src: product2,
    title: "Fazn Type-C Hub 6-port USB3.1",
    price: 69.99,
    inCart: false,
  },
  {
    id: 2,
    src: product3,
    title: "Fazn Type-C Hub 6-port USB3.1",
    price: 69.99,
    inCart: false,
  },
  {
    id: 3,
    src: product4,
    title: "Fazn Type-C Hub 6-port USB3.1",
    price: 69.99,
    inCart: false,
  },
  {
    id: 4,
    src: product5,
    title: "Fazn Type-C Hub 6-port USB3.1",
    price: 69.99,
    inCart: false,
  },
  {
    id: 5,
    src: product6,
    title: "Fazn Type-C Hub 6-port USB3.1",
    price: 69.99,
    inCart: false,
  },
];

export const productsState = atom<Product[]>({
  key: "productsState",
  default: initialProducts,
});
