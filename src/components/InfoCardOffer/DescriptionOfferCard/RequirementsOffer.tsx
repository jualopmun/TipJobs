
import { useContext } from "react";
import { GlobalContext } from "../../../context";
import { TipJob } from "../../../models";
import { i18Model } from "../../../models/i18nModel";
import { TipJobType } from "../infoCardOfferType";

const REQUIREMENTSPROPS = ( i18n: i18Model) => ([
    {
        title:  i18n.infoCardOffer.requirementsOffer.studiesMin, 
        description: (tipJob: TipJob) => 
        tipJob?.descriptionOffer?.studiesMin?.value ?? i18n.constant.notRequired
    },
    {
        title:  i18n.infoCardOffer.requirementsOffer.experienceMin, 
        description: (tipJob: TipJob) => 
        tipJob?.descriptionOffer?.experienceMin?.value ?? i18n.constant.notRequired
    },
    {
        title:  i18n.infoCardOffer.requirementsOffer.languages, 
        component: (tipJob: TipJob) => tipJob?.descriptionOffer?.languages.length > 0 ? 

        tipJob.descriptionOffer?.languages.map(({name, level}) => (
            <p 
                key={name} 
                className="text-gray-700 whitespace-pre-line mb-2"
            >
                {name} - {level}
            </p>
        )) : <p className="text-gray-700 whitespace-pre-line mb-2">{ i18n.constant.notRequired}</p>
    },
    {
        title:  i18n.infoCardOffer.requirementsOffer.skillList, 
        component: (tipJob: TipJob) => tipJob?.descriptionOffer?.skillsList.length > 0 ?
        tipJob?.descriptionOffer?.skillsList?.map(({skill}) => (
            <div 
                key={skill}
                className="ml-4 text-xs inline-flex items-center font-bold 
                leading-sm uppercase px-3 py-1 bg-primary
                 text-gray-100 rounded-full"
            > 
                {skill} 
            </div>
        )) : <p className="text-gray-700 whitespace-pre-line mb-2">
                { i18n.constant.notRequired}
            </p>
    },
    {
        title:  i18n.infoCardOffer.requirementsOffer.minRequirements, 
        description: (tipJob: TipJob) => 
        tipJob?.descriptionOffer?.minRequirements !== '' ? 
            tipJob?.descriptionOffer?.minRequirements  :  i18n.constant.notRequired
    },
]);

export function RequirementsOffer({tipJob}: TipJobType) {
    const { i18n } = useContext(GlobalContext);
    
    const renderRequirements = REQUIREMENTSPROPS(i18n).map((requirement) => (
        <div key={requirement.title}>
            <p className="text-lg font-bold mb-2 text-gray-800">{requirement.title}</p>
            {tipJob && requirement?.description && 
                <p className="text-gray-700 whitespace-pre-line mb-2">
                    {requirement.description(tipJob)}
                </p>
            }
            {
                tipJob && 
                requirement?.component && 
                requirement.component(tipJob)
            }
        </div>
   ));

   return (
    <>
        {renderRequirements}
    </>
)

}