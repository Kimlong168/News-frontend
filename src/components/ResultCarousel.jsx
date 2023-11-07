// import banner from "../assets/banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import cpl from "../assets/league_1.png";
import ucl from "../assets/ucl.png";
import afc from "../assets/afc.png";
import leaugecup from "../assets/leauge-cup.png";
function titleImage(title) {
  const logoes = {
    afccup: afc,
    cpl: cpl,
    ucl: ucl,
    leaugecup: leaugecup,
  };

  let lowerTitle = title.toLowerCase();
  lowerTitle = lowerTitle.replace("-", "");
  const logo = logoes[lowerTitle.trim()];
  if (logo) {
    return logo;
  }
  return null;
}
const ResultCarousel = ({ resultList }) => {
  return (
    <div className="relative h-full ">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        interval={4000}
        transitionTime={500}
      >
        {resultList.map((result) => (
          <div
            key={result.id}
            className="w-full h-[50px] grid place-items-center"
          >
            <span className="flex flex-col md:flex-row justify-center items-center ">
              <div className="flex gap-3">
                {result.teamA}
                <div>
                  {result.teamAGoal} - {result.teamBGoal}
                </div>
                {result.teamB}
              </div>
              <div className="hidden md:block">-</div>
              <div className="flex items-center  gap-1 ">
                <div>{result.title}</div>
                {titleImage(result.title) && (
                  <div className="h-6 w-6">
                    <img
                      className="w-full h-full cover"
                      src={titleImage(result.title)}
                    />
                  </div>
                )}
              </div>
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
ResultCarousel.propTypes = {
  resultList: PropTypes.array.isRequired,
};
export default ResultCarousel;
