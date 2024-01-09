import React from "react";
import Product from "./Product";
import { useMediaQuery } from "react-responsive";
import { useRecoilValue } from "recoil";
import { productsState } from "../../atoms/productsState";

type FeaturedProductsProps = {};

type Product = {
  id: number;
  src: string;
  title: string;
  price: number;
  inCart: boolean;
};

const FeaturedProducts: React.FC<FeaturedProductsProps> = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const products: Product[] = useRecoilValue(productsState);

  let productsDisplay: Product[] = [];

  if (isLargeScreen) productsDisplay = products.slice(0, 6);
  if (isMediumScreen) productsDisplay = products.slice(0, 4);
  if (isSmallScreen) productsDisplay = products.slice(0, 2);

  return (
    <div className="bg-gray-100 px-6 py-4 rounded-lg m-4">
      <p className="text-gray-500 font-bold text-sm mb-4">
        Όσοι είδαν το ίδιο με σένα, είδαν επίσης
      </p>
      <div className="flex items-stretch gap-4">
        {productsDisplay.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            src={product.src}
            title={product.title}
            price={product.price}
            inCart={product.inCart}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
