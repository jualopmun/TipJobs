import { useContext } from "react";
import { HeaderContentOfferType } from "./headerContentType";
import { GlobalContext } from "../../context";

export function ListDescriptionOfferComponent({descriptionOffer}: HeaderContentOfferType) {

    const {i18n} = useContext(GlobalContext);

    const {
        city,
        province,
        country,
        teleworking,
        salaryDescription,
        experienceMin,
        contractType
    } = descriptionOffer;

    const {headerContentOffer: {lisDescriptionOffer}, constant} = i18n;

    const listRenderDescription = 
        [
            `${city}, ${province.value}, ${country.value}`,
            teleworking?.value,
            `${lisDescriptionOffer.salary}: 
                ${salaryDescription ?? constant.notAvalible}`,
            `${lisDescriptionOffer.experienceMin}:
                 ${experienceMin?.value ?? i18n.constant.notRequired}`,
            `${lisDescriptionOffer.contractType}: 
                ${contractType.value ?? i18n.constant.notAvalible}`
        ].map((description, index) => (
       <div key={`description-${index}`}>
        {description && 
            <li
                className="flex items-start lg:col-span-1"
            >
                <div className="flex-shrink-0">
                    <svg 
                        className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path 
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 
                            16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 
                            1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 leading-5 text-gray-600">
                    {description}
                </p>
            </li>
        }
        </div>
    ));
    return (
        <>
            {listRenderDescription}
        </>
    )
}