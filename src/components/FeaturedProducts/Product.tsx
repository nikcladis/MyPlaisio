import React from "react";

type ProductProps = {
  src: string;
  title: string;
  price: number;
};

const Product: React.FC<ProductProps> = ({ src, title, price }) => {
  return (
    <article className="flex flex-col items-center gap-1 rounded-lg overflow-hidden bg-white p-4 text-center">
      <img src={src} width={80} />
      <span className="line-clamp-2">{title}</span>
      <span className="font-bold">{price}€</span>
    </article>
  );
};

export default Product;
