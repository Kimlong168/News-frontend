import banner from "../assets/banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useRef } from "react";
import { delay } from "framer-motion";
const MyCarousel = () => {
  const [showArrow, setShowArrow] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const moveCarousel = (direction) => {
    const totalSlides = 3;
    let newIndex = currentIndex + (direction === "next" ? 1 : -1);

    if (newIndex >= totalSlides) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }

    setCurrentIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  return (
    <div
      className="relative"
      onMouseOver={() => setShowArrow(true)}
      onMouseLeave={() => {
        setTimeout(() => setShowArrow(false), 4000);
      }}
    >
      <Carousel
        className="custom-indicator-color"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={2000}
        stopOnHover={true}
        selectedItem={currentIndex}
        ref={carouselRef}
      >
        <div className="h-[340px] w-full">
          <img className="w-full h-full object-cover" src={banner} />
        </div>
        <div className="h-[340px] w-full">
          <img
            className="w-full h-full object-cover"
            src="https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1695784097.jpg"
          />
        </div>
        <div className="h-[340px] w-full">
          <img
            className="w-full h-full object-cover"
            src="https://cpl.sgp1.cdn.digitaloceanspaces.com/photos/2/CPLD8497.JPG"
          />
        </div>
      </Carousel>
      {showArrow && (
        <>
          <div
          
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 border border-yellow-400  rounded-full grid place-items-center cursor-pointer"
            onClick={() => moveCarousel("prev")}
          >
            <MdArrowBackIosNew size={30} color="#F8D650" />
          </div>
          <div
           
           
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 border border-yellow-400 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => moveCarousel("next")}
          >
            <MdArrowForwardIos size={30} color="#F8D650" />
          </div>
        </>
      )}
    </div>
  );
};

export default MyCarousel;
