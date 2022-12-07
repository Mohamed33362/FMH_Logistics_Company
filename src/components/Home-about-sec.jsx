import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import img from "../images/img.jpg"
import { useTranslation } from "react-i18next";

const HomeAboutSec = () => {
    const { t } = useTranslation();

    return (
    <div className="Home-about-sec">
        <div className="nav flex justify-between sm:text-base text-sm mt-3">
            <div className="navigation active2 sm:block flex flex-col items-center text-center gap-1 dark:text-gray-200">
                <FontAwesomeIcon icon={faTruckArrowRight} className="text-six-200 text-xl" />
                <span className="capitalize ">
                {t("homeAbout")}
                </span>
            </div>
            <div className="navigation non-active2 sm:block flex flex-col items-center text-center gap-1 dark:text-gray-400">
                <FontAwesomeIcon icon={faTruckArrowRight} className="text-six-200 text-xl" />
                <span className="capitalize ">
                {t("homeAbout")}
                </span>
            </div>
            <div className="navigation non-active2 sm:block flex flex-col items-center text-center gap-1 dark:text-gray-400">
                <FontAwesomeIcon icon={faTruckArrowRight} className="text-six-200 text-xl" />
                <span className="capitalize ">
                {t("homeAbout")}
                </span>
            </div>
        </div>
        <div className="info flex my-10 gap-4 justify-around items-center sm:flex-row flex-col">
                <div className="img2">
                    <img src={img} alt=""/>
                </div>
                <div className="text2">
                    <h2 className="sm:text-4xl text-2xl font-bold font-mono capitalize mb-5 dark:text-third">{t("homeAboutTitle")}</h2>
                    <p className="text-gray-500 capitalize mb-2 text-sm dark:text-gray-400">{t("homeAboutDes1")}</p>
                    <p className="text-gray-500 capitalize text-sm dark:text-gray-400">{t("homeAboutDes2")}</p>
                </div>
        </div>
    </div>
    );
}

export default HomeAboutSec;