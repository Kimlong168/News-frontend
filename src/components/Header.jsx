import cpl from "../assets/league_1.png";
import ucl from "../assets/ucl.jpg";
import afc from "../assets/afc.jpg";
import leaugecup from "../assets/leauge-cup.jpg";
import { WiDaySunny } from "react-icons/wi";
import PropsTypes from "prop-types";

const Header = ({ resultList }) => {
  function titleImage(title) {
    // title = title.toUpperCase();
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

  return (
    <header className="flex items-center justify-between gap-10 p-4 px-10 bg-white">
      <div className="w-[80px] h-[80px]">
        <img className="w-full h-full" src={cpl} alt={cpl} />
      </div>
      <div className="flex-1 ">
        <marquee>
          <div className="flex gap-7 ">
            {resultList.map((result) => (
              <div key={result.id}>
                <span className="mr-5 flex items-center gap-2">
                  {result.teamA}{" "}
                  <div>
                    {result.teamAGoal} - {result.teamBGoal}
                  </div>
                  {result.teamB} -
                  <span className="flex items-center gap-1">
                    {result.title}
                    {titleImage(result.title) && (
                      <>
                        <img
                          className="h-6 w-6 inline-block mr-5 ml-1"
                          src={titleImage(result.title)}
                        />
                      </>
                    )}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </marquee>
      </div>
      <div>
        <WiDaySunny className="w-[30px] h-[30px] text-red-600 cursor-pointer" />
      </div>
    </header>
  );
};
Header.propTypes = {
  resultList: PropsTypes.array.isRequired,
};
export default Header;
