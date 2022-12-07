import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation  } from "react-i18next";

const HomeQuoteSec = () => {
    const { t } = useTranslation()
 const {
     register,
     formState: { errors },
   handleSubmit
 } = useForm();
 const onSubmit = (data) => console.log(data);

    return (
    <div className="sm:my-9 mt-40">
        <div className="title">
            <h4>{ t("homeQuoteTitle") }</h4>
        </div>
            <form method="get" onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-3 my-6">
                <div className="flex justify-around w-full gap-4">
                    <input name="Fname" placeholder={t("homeQuotePlace1")} className="input" {...register("FirstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />
                    <input type="text" name="Lname" placeholder={t("homeQuotePlace2")} className="input" {...register("LastName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />
                </div>
                <div className="w-full flex justify-around">
                    <div>{errors.FirstName?.type === 'required' && <p role="alert" className="alert">{ t("homeQuoteEr1") }</p>}</div>
                    <div>{errors.LastName?.type === 'required' && <p role="alert" className="alert">{ t("homeQuoteEr2") }</p>}</div>
                </div>
                <div className="w-full flex justify-around gap-3">
                    <input type="mail" name="Email" placeholder={t("homeQuotePlace3")} className="input " {...register("Email", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />
                <select name="Service" id="" className="input" {...register("type of service",{required:true})}>
                        <option value="FCL">FCL</option>
                        <option value="LCL">LCL</option>
                        <option value="bulk">Bulk</option>
                </select>
                </div>
                <div className="w-full alert er">
                    {errors.Email?.type === 'required' && <p role="alert">{ t("homeQuoteEr3") }</p>}
                </div>
                <textarea name="Descriptions" id="" cols="30" rows="10" className="text-area " placeholder={t("homeQuotePlace4")} {...register("Descriptions", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />
                {errors.Descriptions?.type === 'required' && <p role="alert" className="text-red-500 dark:text-red-400 font-medium capitalize sm:text-base text-xs">{ t("homeQuoteEr4") }</p>}
                <input type="submit" value={t("homeQuoteBtn")} className="btn bg-blue-500 sm:uppercase text-third cursor-pointer hover:bg-blue-600 hover:transform hover:scale-110 transition ease-linear duration-150" />
        </form>
    </div>
    );
}

    export default HomeQuoteSec;