import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showScroll && (
        <div
          onClick={scrollTop}
          className="fixed animate-bounce right-5 bottom-10 rounded-full bg-red-600 hover:bg-yellow-500 w-[40px] h-[40px] grid place-items-center cursor-pointer"
        >
          <FaArrowUp color="white" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
