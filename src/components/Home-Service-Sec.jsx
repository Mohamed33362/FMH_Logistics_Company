import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import containerIcon from "../images/container (2).png"
import ClipboardList from "../images/clipboard.png"
import Crane from "../images/construction (2).png"
import woodenBox from "../images/wooden-box (1).png"
import warehouse from "../images/warehouse (1).png"
import bgImg from "../images/bg.jpg"
import smBgImg from "../images/Promo-Facebook-Facebook stories.jpeg"
import sideImg from "../images/p6.jpg"
import { useTranslation } from "react-i18next";

const HomeServicesSec = () => {
  const { t } = useTranslation()
  const [widthChange, setWidthChange] = useState(window.innerWidth)
  const imageUrl = widthChange >= 650 ? bgImg : smBgImg 

  useEffect(() => {
    const HandlerWidth = () => {
      setWidthChange(window.innerWidth)
    }

    window.addEventListener("resize", HandlerWidth)
    
    return ()=>{window.removeEventListener("resize",HandlerWidth)}
  },[])
    return (
      <div className="min-h-screen">
        <div className="img2">
          <img
            src={imageUrl}
            alt=""
            className="absolute w-full sm:h-full -z-20 left-0 h-50r"
          />
        </div>
        <div className="overlay"></div>
        <div className="icons flex justify-between items-center text-center flex-nowrap py-4">
          <div className="icon">
            <img src={Crane} alt="" className="w-11 mx-auto" />
            <span className="sm:text-sm text-xs sm:block hidden">
              {t("homeServicesI1")}
            </span>
          </div>
          <div className="icon">
            <img src={woodenBox} alt="" className="w-11 mx-auto" />
            <span className="sm:text-sm text-xs sm:block hidden">
              {t("homeServicesI2")}
            </span>
          </div>
          <div className="icon">
            <img src={ClipboardList} alt="" className="w-11 mx-auto" />
            <span className="sm:text-sm text-xs sm:block hidden">
              {t("homeServicesI3")}
            </span>
          </div>
          <div className="icon">
            <img src={warehouse} alt="" className="w-11 mx-auto" />
            <span className="sm:text-sm text-xs sm:block hidden">
              {t("homeServicesI4")}
            </span>
          </div>
          <div className="icon">
            <img src={containerIcon} alt="" className="w-11 mx-auto" />
            <span className="sm:text-sm text-xs sm:block hidden">
              {t("homeServicesI5")}
            </span>
          </div>
        </div>
        <div className="info flex justify-between items-center my-4 sm:flex-row flex-col-reverse">
          <div className="text3 sm:w-2/5 w-full">
            <h3 className="sm:text-4xl text-3xl text-third font-semibold capitalize">
              {t("homeServicesTitle")}
            </h3>
            <p className="text-third my-6 text-sm">{t("homeServicesDes1")}</p>
            <p className="text-third text-sm">{t("homeServicesDes2")}</p>
          </div>
          <div className="img3 border-4 border-teal-400 relative sm:w-5/12 w-full h-80 -z-10">
            <img
              src={sideImg}
              alt=""
              className="w-96 absolute sm:-left-8 top-2 -left-6 h-72"
            />
          </div>
        </div>
      </div>
    );
}

export default HomeServicesSec