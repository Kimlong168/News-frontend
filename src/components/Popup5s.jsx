import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
const Popup5s = ({ setShowPopup }) => {
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clear the interval when the component unmounts or when the countdown reaches 0
    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    // Close the modal when the countdown reaches 0
    if (seconds === 0) {
      // Add your logic to close the modal here
      // For example, you might call a function to close the modal
      setShowPopup(false);
    }
  }, [seconds, setShowPopup]);

  return (
    <div className="relative bg-red-700">
      <div className="fixed inset-0  bg-black/60  z-[1000] flex justify-center items-center">
        <motion.div
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView={"show"}
          className="rounded-md border border-white/30 text-black overflow-hidden flex flex-col items-center w-[95%] sm:w-[70%] lg:w-[50%] h-[350px] sm:h-[430px] mx-4 md:mx-auto"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/m_XUClQCOUc?autoplay=1;si=-cj4WCdvHsN1goCk&amp;controls=0&amp;start=83"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="bg-white/90 w-full flex items-center justify-between md:justify-end gap-4 p-2">
            <div>
              Close in {seconds} {seconds == 1 ? "second" : "seconds"}
            </div>
            <button
              className="px-3 py-1.5 bg-red-600 text-white"
              onClick={() => setShowPopup(false)}
            >
              Close now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
Popup5s.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
};
export default Popup5s;
