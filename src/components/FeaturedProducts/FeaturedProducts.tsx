import React from "react";
import Product from "./Product";
import { useMediaQuery } from "react-responsive";
import product1 from "../../assets/products_images/p1.jpg";
import product2 from "../../assets/products_images/p2.jpg";
import product3 from "../../assets/products_images/p3.jpg";
import product4 from "../../assets/products_images/p4.jpg";
import product5 from "../../assets/products_images/p5.jpg";
import product6 from "../../assets/products_images/p6.jpg";

type FeaturedProductsProps = {};

type Product = {
  src: string;
  title: string;
  price: number;
};

const FeaturedProducts: React.FC<FeaturedProductsProps> = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const products: Product[] = [
    { src: product1, title: "Fazn Type-C Hub 6-port USB3.1", price: 69.99 },
    { src: product2, title: "Fazn Type-C Hub 6-port USB3.1", price: 69.99 },
    { src: product3, title: "Fazn Type-C Hub 6-port USB3.1", price: 69.99 },
    { src: product4, title: "Fazn Type-C Hub 6-port USB3.1", price: 69.99 },
    { src: product5, title: "Fazn Type-C Hub 6-port USB3.1", price: 69.99 },
    { src: product6, title: "Fazn Type-C Hub 6-port USB3.1", price: 69.99 },
  ];

  let productsDisplay: Product[] = [];

  if (isLargeScreen) {
    productsDisplay = products.slice(0, 6);
  } else if (isMediumScreen) {
    productsDisplay = products.slice(0, 4);
  } else if (isSmallScreen) {
    productsDisplay = products.slice(0, 2);
  }

  return (
    <div className="bg-gray-100 px-6 py-4 rounded-lg m-4">
      <p className="text-gray-500 font-bold text-sm mb-4">
        Όσοι είδαν το ίδιο με σένα, είδαν επίσης
      </p>
      <div className="flex items-stretch gap-4">
        {productsDisplay.map((product, index) => (
          <Product
            key={index}
            src={product.src}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
