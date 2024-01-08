import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image1 from "../../assets/imagec-1.gif";
import image2 from "../../assets/imagec-2.jpg";
import image3 from "../../assets/imagec-3.jpg";
import useSlider from "../../hooks/useSlider";

const Slider: React.FC = () => {
  const slides = [{ src: image1 }, { src: image2 }, { src: image3 }];

  const { currentSlide, sliderRef, prevSlide, nextSlide, handleDotClick } =
    useSlider(slides);

  return (
    <div
      ref={sliderRef}
      className="p-4 w-fit h-fit relative group overflow-hidden"
    >
      {slides.map((slide, slideIndex) => (
        <img
          key={slideIndex}
          src={slide.src}
          className={`rounded-2xl bg-center aspect-video ${
            currentSlide === slideIndex ? "" : "hidden"
          }`}
          alt={`Slide ${slideIndex + 1}`}
        />
      ))}

      {!!currentSlide && (
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={40}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        />
      )}

      {!(currentSlide === slides.length - 1) && (
        <BsChevronCompactRight
          onClick={nextSlide}
          size={40}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        />
      )}

      <div className="flex absolute bottom-10 left-1/2 transform -translate-x-1/2 justify-center">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => handleDotClick(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentSlide === slideIndex ? "text-gray-200" : "text-gray-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
