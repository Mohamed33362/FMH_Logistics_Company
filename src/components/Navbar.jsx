import React, { useEffect, useState } from "react";
/**************************************************** start import some icons from font awsome ****************************/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faHome,
  faClose,
  faPhone,
  faClipboardList,
  faCircleCheck,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faSun, faStar } from "@fortawesome/free-regular-svg-icons";

/*********************************  end import **************************************************************************/

/****************************************** import Transaltion tool from i18next package  *******************************/

import { useTranslation } from "react-i18next";
import i18next from "i18next";

/***************************************** end import *****************************************************************/

/***************************************** import cookies from cookies package  ***************************************/

import Cookies from "js-cookie";

/***************************************** end import **************************************************************/


const Navbar = (change) => {
  /* make an array of object contains the name that i will use un dev and country_code that is the key and code to change the code in cookies and dir to change the direction of page in body */

  const language = [
    {
      code: "ar",
      name: "العربية",
      country_code: "eg",
      dir: "rtl",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
  ];

  /******************************************************************** end of array  *****************************************************************************/

  /**************************************** set current language code by the code in cookies and add defualt value if you need ************************/

  const currentLanguageCode = Cookies.get("i18next") || "en";

  /****************************************************** end *************************************************************************************/

  /*************************** make function that find in the language array the code of lang and set it in current code language ***********************/

  const currentLanguage = language.find((l) => l.code === currentLanguageCode);

  /****************************************************** end *************************************************************************************/

  /****************************************************** Use translation tool *************************************************************************************/

  const { t } = useTranslation();

  /****************************************************** end *************************************************************************************/

  /******************* make a state to make the side nav in phone screen display block by change the state from true to false and opposite ***********/

  const [show, setShow] = useState("");

  /****************************************************** end *************************************************************************************/

  /* make a state to make the icon of languages in phone screen display block and add classes to the language section by change the state from true to false and opposite *************************************************************************************/

  const [showIcon, setShowIcon] = useState(false);

  /****************************************************** end *************************************************************************************/

  /****  to set the dir of body by the value in currentLanguage or set default if there is no value ltr and watch the change to rerender *************************************************************************************/

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <div className="dark:bg-slate-700 bg-third fixed w-full z-10">
      <nav
        className={`Navbar flex justify-between items-center dark:text-white container py-4 text-2xl`}
      >
        <a href="#" className="text-xl">
          {t("logo")}
        </a>
        <ul
          className={`md:flex hidden ${
            show && currentLanguage.dir === "rtl"
              ? "view-rtl"
              : show
              ? "view"
              : ""
          }`}
          id="ul"
        >
          <li
            className={`${currentLanguage.dir === "rtl" ? "link-rtl" : "link"}`}
          >
            <FontAwesomeIcon icon={faHome} />
            <a href="#">{t("home")}</a>
          </li>
          <li
            className={`${currentLanguage.dir === "rtl" ? "link-rtl" : "link"}`}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
            <a href="#">{t("about")}</a>
          </li>
          <li
            className={`${currentLanguage.dir === "rtl" ? "link-rtl" : "link"}`}
          >
            <FontAwesomeIcon icon={faStar} />
            <a href="#">{t("services")}</a>
          </li>
          <li
            className={`${currentLanguage.dir === "rtl" ? "link-rtl" : "link"}`}
          >
            <FontAwesomeIcon icon={faClipboardList} />
            <a href="#">{t("quote")}</a>
          </li>
          <li
            className={`${currentLanguage.dir === "rtl" ? "link-rtl" : "link"}`}
          >
            <FontAwesomeIcon icon={faPhone} />
            <a href="#">{t("contact")}</a>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          className="md:hidden cursor-pointer"
          id="icon"
          onClick={() => setShow(true)}
        />
        <div
          className={` toggler ${
            show && currentLanguage.dir === "rtl"
              ? "view-tog-rtl"
              : show
              ? "view-tog"
              : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faMoon}
            className="dark:hidden cursor-pointer ml-3"
            onClick={change.change}
          />
          <FontAwesomeIcon
            icon={faSun}
            className="hidden dark:inline-block cursor-pointer text-slate-100 ml-3"
            onClick={change.change}
          />
        </div>
        <div className="div fixed md:relative z-20">
          <div
            id="div3"
            className={`div3 ${
              showIcon && show && currentLanguage.dir === "rtl"
                ? "lang-option-view2-rtl"
                : showIcon && show
                ? "lang-option-view"
                : showIcon && currentLanguage.dir === "rtl"
                ? "lang-option-view-rtl"
                : showIcon
                ? "lang-option-view"
                : show === false
                ? "hidden"
                : "hidden"
            } `}
          >
            {language.map(({ code, name, country_code }) => {
              return (
                <button
                  className="sm:block dark:text-black"
                  key={country_code}
                  onClick={() => {
                    i18next.changeLanguage(code);
                    setShow(false);
                    setShowIcon(false);
                  }}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </button>
              );
            })}
          </div>
          <div
            className={`${
              show && currentLanguage.dir === "rtl"
                ? "div3-view-rtl"
                : show
                ? "div3-view"
                : "hidden md:block"
            } div2 bg-slate-300 py-3 md:py-2 lg:px-2 px-2 rounded-full md:relative`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-globe cursor-pointer h-6 ml-3 md:h-4 lg:h-6 hover:text-blue-400 transition ease-linear duration-150"
              viewBox="0 0 16 16"
              onClick={(e) => {
                setShowIcon(!showIcon);
                console.log(showIcon);
              }}
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
            </svg>
          </div>
        </div>
        <div
          className={`hidden ${
            show && currentLanguage.dir === "rtl"
              ? "sidenav-rtl"
              : show
              ? "sidenav"
              : ""
          }`}
          id="sidenav"
        >
          <div className="close text-end mx-3 text-red-400 text-2xl">
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => {
                setShow(false);
                setShowIcon(false);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
