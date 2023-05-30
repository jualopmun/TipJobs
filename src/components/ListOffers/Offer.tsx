import transformDate from "../../util/tranformDateUtil"; 
import logoCompanyUnknow from '../../assets/images/unknow-logo-conmpany.png';
import { Link } from "react-router-dom";
import { OfferComponentType } from "./offerComponentType";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export function Offer({offer}: OfferComponentType) {

    const { i18n } = useContext(GlobalContext);

    const {
        id,
        author,
        published, 
        title, 
        city, 
        teleworking, 
        contractType, 
        salaryMin, 
        salaryMax,
        salaryPeriod
    } = offer;
    
    
    const transformDatePublished = transformDate(new Date(published));

    const logoCompany = author?.logoUrl ? author.logoUrl : logoCompanyUnknow;

    const renderSalary = salaryMin?.value && salaryMax?.value ? 
        <p className="text-sm text-gray-500">
            {salaryMin.value} - {salaryMax.value} {salaryPeriod.value}
        </p> :
        <p className="text-sm text-gray-500">
            {i18n.offer.salaryNotAvalible}
        </p>;

    return (
        <>                        
            <Link to={`/offer/${id}`}>
                <div className="bg-white p-4 rounded-lg shadow-lg mt-2 sm:flex lg:items-end group">
                    <div className="flex-shrink-0 mb-4 pl-4 sm:mb-0 sm:mr-4">
                        <img className="w-full rounded-md lg:w-32 object-cover" 
                            src={logoCompany}
                            alt="logo de la empresa"
                        />
                    </div>
                    <div>
                        <span className="text-sm text-gray-500">{transformDatePublished}</span>
                        <p className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">
                            {title}
                        </p>
                        <p className="text-lg text-primary">
                            {author.name}
                        </p>
                        <ul className="flex flex-wrap mx-2">
                            <li className="mr-2 text-gray-800"> {city} </li>
                            {teleworking && <li className="mr-2 text-gray-800"> | {teleworking?.value} </li>}
                            {contractType && <li className="mr-2 text-gray-800"> | {contractType?.value} </li>}
                        </ul>
                        {renderSalary}
                    </div>
                </div>
            </Link>  
        </>
    )
}