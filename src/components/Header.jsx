import logo from "../assets/league_1.png";
import afc from "../assets/afc.jpg";
import { WiDaySunny } from "react-icons/wi";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-10 p-4 px-10">
      <div className="w-[80px] h-[80px]">
        <img className="w-full h-full" src={logo} alt={logo} />
      </div>
      <div className="flex-1 ">
        <marquee>
          PhnomPenh Crown 3-0 Marcathur - AFC-Cup
          <img className="h-6 w-6 inline-block mr-5 ml-1" src={afc} />
          Visakha 0-3 Angkor Tiger - CPL{" "}
          <img className="h-6 w-6 inline-block mr-5 ml-1" src={logo} />
          BoeungKet 1-2 ISI - CPL{" "}
          <img className="h-6 w-6 inline-block mr-5 ml-1" src={logo} />
          Barcelona 8-2 Realmadrid - Laliga{" "}
          <img
            className="h-6 w-6 inline-block mr-5 ml-1"
            src="https://logodownload.org/wp-content/uploads/2018/05/laliga-logo-2.png"
          />
        </marquee>
      </div>
      <div>
        <WiDaySunny className="w-[30px] h-[30px] text-red-600 cursor-pointer" />

      </div>
      
    </header>
  );
};

export default Header;
 