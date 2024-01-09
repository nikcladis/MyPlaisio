import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useRecoilState, useSetRecoilState } from "recoil";
import { productsState } from "../../atoms/productsState";
import { cartState } from "../../atoms/cartState";

type Product = {
  id: number;
  src: string;
  title: string;
  price: number;
  inCart: boolean;
};

const Product: React.FC<Product> = ({ id, src, title, price, inCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(!inCart);
  const [isClicked, setIsClicked] = useState(false);
  const [products, setProducts] = useRecoilState(productsState);
  const setCart = useSetRecoilState(cartState);

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
        setCart((prevCart) => [
          ...prevCart,
          { product: { ...product }, quantity: 1 },
        ]);
      }
    });
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
