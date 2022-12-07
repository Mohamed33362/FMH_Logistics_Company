import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faFax, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { useForm} from "react-hook-form";
import bgImg from "../images/coffee-ge2e4e1f1b_1280.jpg"
import smBgImg from "../images/Promo-Facebook-Facebook stories (1).jpeg"
import { useTranslation } from "react-i18next";

const HomeContactSec = () => {
    const { t } = useTranslation()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [widthChange,setWidthChange] = useState(window.innerWidth)
    const imgUrl = widthChange >= 640 ? bgImg : smBgImg

    useEffect(() => {
        const HandlerSize = () => {
            setWidthChange(window.innerWidth)
        }
        window.addEventListener("resize", HandlerSize)
        return ()=> {window.removeEventListener("resize",HandlerSize)}
    },[])
    
    return (
        <div>
            <div className="img2">
                <img src={imgUrl} alt="" className="absolute w-full sm:h-5/6 -z-20 left-0 h-50r"/>
            </div>
                <div className="overlay sm:h-5/6"></div>
            <div className="title">
                <h5 className="py-9 text-white">{ t("homeContactTitle") }</h5>
            </div>
            <div className="contact">
                <div className="leftside flex flex-col justify-around text-third">
                    <div className="details">
                        <FontAwesomeIcon icon={faHome} />
                        <span>{ t("homeContactAD") }</span>
                    </div>
                    <div className="details">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>{ t("homeContactPH") }</span>
                    </div>
                    <div className="details">
                        <FontAwesomeIcon icon={faFax} />
                        <span>{ t("homeContactFA") }</span>
                    </div>
                    <div className="details">
                        <FontAwesomeIcon icon={faMailBulk} />
                        <span>{ t("homeContactEM") }</span>
                    </div>
                </div>
                <form className="rightside sm:w-2/4 mt-8" onSubmit={handleSubmit()}>
                    <div className="flex gap-5">
                        <input  className="input my-2" {...register("FirstName",{required:true})} placeholder={t("homeQuotePlace1")}  aria-invalid={errors.FirstName ? "true" : "false"}/>
                        <input className="input my-2" {...register("LastName",{required:true})} placeholder={t("homeQuotePlace2")}  aria-invalid={errors.LastName ? "true" : "false"}/>
                    </div>
                    <div className="w-full flex justify-around">
                    <div>{errors.FirstName?.type === 'required' && <p role="alert" className="dark:text-red-400 text-red-500 capitalize font-medium sm:text-base text-xs">First name is required</p>}</div>
                    <div>{errors.LastName?.type === 'required' && <p role="alert" className="dark:text-red-400 text-red-500 capitalize font-medium sm:text-base text-xs">last name is required</p>}</div>
                </div>
                    <input className="input my-2" style={{width:"100%"}} {...register("Email", { required: true })} placeholder={t("homeQuotePlace3")} aria-invalid={errors.Email ? "true" : "false"} />
                    {errors.Email?.type === 'required' && <p role="alert" className="alert">Email is required</p>}
                    <textarea name="" id="" cols="30" rows="10" className="text-area my-2" {...register("massage")} placeholder={ t("homeContactMassagePl") } aria-invalid={errors.massage ? "true" : "false"} />
                    <div className="text-center">
                        <input type="submit" value={t("homeQuoteBtn")} className="btn bg-six-300 dark:bg-six-100 text-third sm:uppercase cursor-pointer hover:bg-six-400 dark:hover:bg-six-200 hover:transform hover:scale-110 transition ease-linear duration-150"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeContactSec