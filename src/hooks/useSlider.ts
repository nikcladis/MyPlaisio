import { useState, useRef } from "react";

type Slide = {
  src: string;
};

const useSlider = (totalSlides: Slide[]) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? totalSlides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  };

  return {
    currentSlide,
    sliderRef,
    prevSlide,
    nextSlide,
    handleDotClick,
  };
};

export default useSlider;
