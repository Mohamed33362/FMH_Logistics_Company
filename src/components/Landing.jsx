import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


const Landing = ({ Images }) => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    const [widthChange, setWidthChange] = useState(window.innerWidth)

    let timeOut= false;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            Add()
        }, 5000)
      const HandlerSize = () => {
        setWidthChange(window.innerWidth);
      };
      window.addEventListener("resize", HandlerSize);
      return () => {
        window.removeEventListener("resize", HandlerSize);
      };
    })
    
    const Add = () => {
        if (currentIndex === Images.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
      <div
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="img2">
          {Images.map((image, index) => {
            return (
              <img
                src={widthChange >= 650 ? image.image : image.smImage }
                key={index}
                className={`${
                  index == currentIndex ? "active img" : "non-active img"
                }`}
                alt={image.alt}
              />
            );
          })}
        </div>
        <div className="text flex flex-col items-center justify-center text-third dark:text-slate-900">
          <h1 className="text-6xl uppercase font-bold font-mono text-center my-2">{ t("logo") }</h1>
          <p className="text-lg text-center my-2 dark:text-third">{t("landingDes")}</p>
          <button className="btn bg-cyan-400 hover:bg-cyan-300 dark:bg-cyan-300 dark:hover:bg-cyan-400 text-gray-700 dark:bg-cyan my-2" >
            <a href="#">{ t("btn1") }</a>
          </button>
        </div>
        <div className="bounce">
          <FontAwesomeIcon icon={faAnglesDown} className="w-full mt-20 mb-5 mx-auto  animate-bounce text-xl dark:text-third"/>
        </div>
      </div>
    );
}

export default Landing;