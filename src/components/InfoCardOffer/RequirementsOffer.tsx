import { TipJob } from "../../models";
import { tipJobType } from "./infoCardListType";

const NOTREQUIRED = 'No requerida';

const REQUIREMENTSPROPS = [
    {
        title: 'Estudios mínimos', 
        description: (tipJob: TipJob) => 
        tipJob?.descriptionOffer?.studiesMin?.value ?? NOTREQUIRED
    },
    {
        title: 'Experiencia Mínima', 
        description: (tipJob: TipJob) => 
        tipJob?.descriptionOffer?.experienceMin?.value ?? NOTREQUIRED
    },
    {
        title: 'Idiomas requeridos', 
        component: (tipJob: TipJob) => tipJob?.descriptionOffer?.languages.length > 0 ? 

        tipJob.descriptionOffer?.languages.map(({name, level}) => (
            <p 
                key={name} 
                className="text-gray-700 whitespace-pre-line mb-2"
            >
                {name} - {level}
            </p>
        )) : <p className="text-gray-700 whitespace-pre-line mb-2">{NOTREQUIRED}</p>
    },
    {
        title: 'Conocimientos necesarios', 
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
        )) : <p className="text-gray-700 whitespace-pre-line mb-2">{NOTREQUIRED}</p>
    },
    {
        title: 'Requisitos mínimos', 
        description: (tipJob: TipJob) => 
        tipJob?.descriptionOffer?.minRequirements !== '' ? tipJob?.descriptionOffer?.minRequirements  : NOTREQUIRED
    },
];

export function RequirementsOfferComponent({tipJob}: tipJobType) {
    const renderRequirements = REQUIREMENTSPROPS.map((requirement) => (
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