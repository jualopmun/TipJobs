import { CardContent } from "../../CardContent/CardContent";
import { TipJobType } from "../infoCardOfferType";
import { RequirementsOffer } from "./RequirementsOffer";

export function DescriptionOfferCard({tipJob}: TipJobType) {
    return(
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <CardContent
                title='Requisitos' 
            >
                <RequirementsOffer tipJob={tipJob}/>
            </CardContent>
            <div className="border-t-4 my-3"></div>
                <CardContent
                    title='Descripción'
                    description={tipJob.descriptionOffer.description}
                />
        </div>
    )
}