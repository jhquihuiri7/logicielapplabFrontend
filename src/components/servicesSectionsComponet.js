import "../styles/services.css";
import Lottie from "lottie-react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import { slideImages } from "../variables/slidesData";

export function ServicesSectionsComponent() {
  var [hover, setHover] = useState(false);

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ ...buttonStyle }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill={hover ? "#ed184f" : "#fff"}
          className="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ ...buttonStyle }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill={hover ? "#ed184f" : "#fff"}
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </button>
    ),
  };

  return (
    <div id="services" className="slide-container w-full py-10 px-10">
      <h1 className="flex-initial text-center text-4xl text-white mb-10">
        Nuestros Servicios
      </h1>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="flex flex-row h-full">
            <div className="flex-initial px-20 w-1/2 h-full">
              <div className="flex flex-col h-full justify-center">
                <h1 className="flex-initial text-center text-3xl text-[#ed184f] my-5">
                  {slideImage.name}
                </h1>
                <h3 className="text-white text-lg text-justify">
                  {slideImage.description}
                </h3>
              </div>
            </div>
            <div className="flex-initial w-1/2">
              <Lottie
                animationData={slideImage.animation}
                style={{ height: 400 }}
                className="z-10 left-2/4 flex-1"
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
