import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
    return (
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 sm:my-20 mt-48 mb-20">
        <div className="flex items-center justify-center flex-col sm:m-0 mb-8">
          <span className="my-2 text-2xl sm:text-4xl dark:text-third">
            {t("logo")}
          </span>
          <p className="text-xs capitalize w-72 text-gray-500 dark:text-gray-200">
            {t("homeAboutDes1")}
          </p>
        </div>
        <nav className="flex justify-around text-gray-500 dark:text-gray-200">
          <ul className="text-center">
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("home")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("about")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("services")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("quote")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("contact")}</a>
            </li>
          </ul>
          <ul className="text-center">
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("latestNews")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("careers")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("legalNotice")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("privacy&policy")}</a>
            </li>
            <li className="capitalize hover:text-six-200 transition ease-linear duration-150">
              <a href="#">{t("trackYourShipment")}</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-center items-center sm:m-4 mt-8 text-gray-500 dark:text-gray-200 text-sm">
          <span className="block capitalize">{t("homeContactEM")}</span>
          <span className="block capitalize">{t("homeContactPH")}</span>
          <span className="block capitalize">{t("homeContactFA")}</span>
          <span className="block capitalize">{t("homeContactAD")}</span>
        </div>
      </div>
    );
}

export default Footer