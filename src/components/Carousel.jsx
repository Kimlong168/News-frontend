import svr from "../assets/svayrieng.png";
import cpl from "../assets/league_1.png";
import nagaworld from "../assets/nagaworld.png";
import army from "../assets/army.png";
import visakha from "../assets/visakha.png";
import crown from "../assets/crown.png";
import isi from "../assets/isi.png";
import boeungket from "../assets/boeungket.png";
import tiger from "../assets/tiger.png";
import siemreap from "../assets/siemreap.png";
import shv from "../assets/shv.png";
import nfa from "../assets/nfa.png";
import preyveng from "../assets/preyveng.png";
import kirivong from "../assets/kirivong.png";
// import ucl from "../assets/ucl.jpg";
// import afc from "../assets/afc.jpg";
// import leaugecup from "../assets/leauge-cup.jpg";

// cadt cup club logo
// import cadtcup from "../assets/cadt-cup.png";
import cadt from "../assets/cadtstaff.png";
import warrior from "../assets/warrior.png";
import noodel from "../assets/noodle.png";
import united from "../assets/united.png";
import leopard from "../assets/leopard.png";
import knight from "../assets/knight.png";
import friend from "../assets/friend.png";
import boyloy from "../assets/logo_boyloy.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useRef } from "react";
import PropTypes from "prop-types";
const MyCarousel = ({ todayMatchList }) => {
  const [showArrow, setShowArrow] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const moveCarousel = (direction) => {
    const totalSlides = todayMatchList.length;
    let newIndex = currentIndex + (direction === "next" ? 1 : -1);

    if (newIndex >= totalSlides) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }

    setCurrentIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  function titleImage(searchText) {
    const logoes = [
      { key: "staff", value: cadt },
      { key: "warrior", value: warrior },
      { key: "មីកំប៉ុង", value: noodel },
      { key: "united", value: united },
      { key: "boyloy", value: boyloy },
      { key: "leopard", value: leopard },
      { key: "knight", value: knight },
      { key: "friend", value: friend },
      { key: "svayrieng", value: svr },
      { key: "visakha", value: visakha },
      { key: "nagaworld", value: nagaworld },
      { key: "crown", value: crown },
      { key: "boeungket", value: boeungket },
      { key: "army", value: army },
      { key: "isi", value: isi },
      { key: "tiger", value: tiger },
      { key: "preyveng", value: preyveng },
      { key: "siemreap", value: siemreap },
      { key: "shv", value: shv },
      { key: "kirivong", value: kirivong },
      { key: "nfa", value: nfa },
      { key: "fc", value: cpl },
    ];

    // const searchText = "phnompenh crown";

    // Split the search text into individual words
    // const searchWords = searchText.split(" ");
    let keyword = searchText.toLowerCase().trim().split(" ");

    let foundLogo = null;

    // Loop through the logoes array and find a matching key
    for (let i = 0; i < logoes.length; i++) {
      const logo = logoes[i];
      const key = logo.key;

      // Check if the key is a part of the search text
      if (keyword.some((word) => key.includes(word))) {
        foundLogo = logo.value;
        break;
      }
    }

    if (foundLogo) {
      // Use foundLogo.value for the logo that matches the search
      console.log("Found Logo:", foundLogo.value);
    } else {
      console.log("No matching logo found");
    }
    return foundLogo;
  }

  return (
    <div
      className="relative w-[350px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1240px] py-[20px] pt-[30px] md:pt-[30px] dark:bg-black dark:text-white"
      onMouseOver={() => setShowArrow(true)}
      onMouseLeave={() => {
        setTimeout(() => setShowArrow(false), 8000);
      }}
    >
      <Carousel
        className="custom-indicator-color hidden md:block"
        showIndicators={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={500}
        stopOnHover={true}
        selectedItem={currentIndex}
        ref={carouselRef}
      >
        {todayMatchList.map((match) => (
          <div
            key={match.id}
            className="w-full h-fullflex flex-col gap-1 justify-center items-center uppercase mb-[40px]"
          >
            <div className="">
              <div className="text-lg">{match.date}</div>
              <div className="text-md">{match.time}</div>
            </div>
            <div className="flex gap-10 md:gap-24 items-center justify-center">
              <div className="w-[100px]">
                <img
                  className="w-[100px] h-[100px]  cover mb-2"
                  src={titleImage(match.teamA)}
                  alt=""
                />
                <div className="line-clamp-2"> {match.teamA}</div>
              </div>
              <div>
                <div className="text-3xl">VS</div>
                <div>{match.liveOn}</div>
              </div>
              <div className="w-[100px] ">
                <img
                  className="w-[100px] h-[100px]  cover mb-2"
                  src={titleImage(match.teamB)}
                  alt=""
                />
                <div className="line-clamp-2"> {match.teamB}</div>
              </div>
            </div>
            <div className="text-sm">{match.staduim}</div>
          </div>
        ))}
      </Carousel>
      <Carousel
        className="custom-indicator-color md:hidden "
        showIndicators={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        stopOnHover={true}
      >
        {todayMatchList.map((match) => (
          <div
            key={match.id}
            className="w-full h-fullflex flex-col gap-1 justify-center items-center uppercase mb-[40px]"
          >
            <div className="">
              <div className="text-lg">{match.date}</div>
              <div className="text-md">{match.time}</div>
            </div>
            <div className="flex gap-10 md:gap-24 items-center justify-center">
              <div className="w-[100px]">
                <img
                  className="w-[100px] h-[100px] cover mb-2"
                  src={titleImage(match.teamA)}
                  alt=""
                />
                <div className="line-clamp-2"> {match.teamA}</div>
              </div>
              <div>
                <div className="text-2xl">VS</div>
                <div>{match.liveOn}</div>
              </div>
              <div className="w-[100px] ">
                <img
                  className="w-[100px] h-[100px] cover mb-2"
                  src={titleImage(match.teamB)}
                  alt=""
                />
                <div className="line-clamp-2"> {match.teamB}</div>
              </div>
            </div>
            <div>{match.staduim}</div>
          </div>
        ))}
      </Carousel>
      {showArrow && (
        <div className="hidden md:block">
          <div
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 border border-yellow-400  rounded-full grid place-items-center cursor-pointer"
            onClick={() => moveCarousel("prev")}
          >
            <MdArrowBackIosNew size={30} color="#F8D650" />
          </div>
          <div
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 border border-yellow-400 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => moveCarousel("next")}
          >
            <MdArrowForwardIos size={30} color="#F8D650" />
          </div>
        </div>
      )}
    </div>
  );
};
MyCarousel.propTypes = {
  todayMatchList: PropTypes.array.isRequired,
};
export default MyCarousel;
