import React from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Sliders/Slider";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <Slider />
      <FeaturedProducts />
    </div>
  );
};
export default Home;
