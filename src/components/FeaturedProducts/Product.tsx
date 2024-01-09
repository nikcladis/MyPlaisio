import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { productsState } from "../../atoms/productsState";

type ProductProps = {
  id: number;
  src: string;
  title: string;
  price: number;
  inCart: boolean;
};

type Product = {
  id: number;
  src: string;
  title: string;
  price: number;
  inCart: boolean;
};

const Product: React.FC<ProductProps> = ({ id, src, title, price, inCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(!inCart);
  const [isClicked, setIsClicked] = useState(false);
  const setProducts = useSetRecoilState(productsState);
  const products: Product[] = useRecoilValue(productsState);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isClicked) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isClicked]);

  const handleAddToCart = () => {
    setIsClicked(true);
    const newProducts: Product[] = structuredClone(products);
    newProducts.forEach((product) => {
      if (product.id === id) {
        product.inCart = true;
      }
    });
    console.log(newProducts);
    setProducts(newProducts);
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(isVisible && isClicked)}
      className="flex flex-col items-center gap-1 rounded-lg overflow-hidden bg-white p-4 text-center"
    >
      <img src={src} width={80} />
      <span className="line-clamp-2 mb-2">{title}</span>

      {!isHovered && (
        <span className={`font-bold px-2 py-1 ${isVisible || "invisible"}`}>
          {price}€
        </span>
      )}
      {isHovered && (
        <button
          onClick={handleAddToCart}
          className={`flex items-center justify-center ${
            isClicked ? "bg-black" : "bg-green-400"
          } ${
            isVisible || "invisible"
          } w-full text-sm font-semibold text-white px-2 py-1 rounded-sm`}
        >
          {isClicked ? <FaCheck fontSize={20} /> : "Προσθήκη"}
        </button>
      )}
    </article>
  );
};

export default Product;
