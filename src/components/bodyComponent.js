import { ServicesSectionsComponent } from "./servicesSectionsComponet";
import Lottie from "lottie-react";
import headeranimation from "../assets/headeranimation.json";
import React, { useState } from "react";
import "../styles/buttons.css";
import { ContactComponent } from "./contactComponent";
import { cards } from "../variables/cardData";

export function BodyComponent() {
  const [index, setIndex] = useState("client");
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = (card) => {
    setIsHover(true);
    setIndex(card.id);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setIndex("client");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {Cellphone()}
        {WhyUs()}
      </div>
      <ServicesSectionsComponent />
      <div className="flex flex-wrap w-full justify-around mt-10">
        <h1 className="flex-initial text-center text-4xl text-white">
          Nuestros <span className="text-[#ed184f]">trabajos recientes </span>
        </h1>
      </div>
      <div id="clients" className="flex flex-wrap w-full justify-around">
        {cards.map((card) => (
          <div
            key={card.id}
            id="cards"
            className="flex-initial bg-auto bg-no-repeat bg-center h-72 w-96"
            onMouseEnter={() => handleMouseEnter(card)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-row w-full h-full">
              <div className="flex-initial w-full h-full">
                <div className="flex flex-col w-full h-full mt-14">
                  <div className="flex-initial">
                    <h3 className="text-white text-center font-bold text-xl">
                      {card.name}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex-initial w-full h-full">
                <div className="flex flex-col justify-evenly items-center w-full h-full">
                  <div
                    style={{
                      backgroundImage: `url("${
                        isHover && index === card.id
                          ? card.whiteImage
                          : card.greyImage
                      }")`,
                      backgroundSize: "contain",
                    }}
                    className="h-28 w-28"
                  ></div>
                  <div>
                    <h3
                      className=" text-center font-bold"
                      style={{
                        color:
                          isHover && index === card.id ? "#ed184f" : "white",
                      }}
                    >
                      {card.description}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactComponent />
    </>
  );
}

function Cellphone() {
  const [size, setDimensions] = React.useState({
    height: 500,
  });
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setDimensions({ height: 350 });
      } else if (window.innerWidth < 600) {
        setDimensions({ height: 250 });
      } else {
        setDimensions({ height: 500 });
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <Lottie
      animationData={headeranimation}
      style={{ height: size.height }}
      className="z-10 left-2/4 flex-1"
    />
  );
}
function WhyUs() {
  return (
    <div id="whyus" className="z-20 text-white flex-1 py-6 px-6">
      <div className="flex flex-col justify-around h-full py-32">
        <h1 className="flex-initial text-4xl">
          ¿Porqué <span className="text-[#ed184f]">Logiciel Applab</span>?
        </h1>
        <h3 className="flex-initial text-justify pr-10">
          Somos una empresa especializada en el desarrollo de aplicaciones
          móviles, sitios web y sistemas de software hechos según tus
          necesidades. Con nuestro equipo altamente calificado te garantizamos
          la mejor calidad y experiencia para tu negocio.
        </h3>
      </div>
    </div>
  );
}
