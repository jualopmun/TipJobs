import { CardContentComponent } from "../CardContent/CardContent";
import { RequirementsOfferComponent } from "./RequirementsOffer";
import { tipJobType } from "./infoCardListType";

export function DescriptionCardOfferComponent({tipJob}: tipJobType) {
    return(
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <CardContentComponent 
                title='Requisitos' 
            >
                <RequirementsOfferComponent tipJob={tipJob}/>
            </CardContentComponent>
            <div className="border-t-4 my-3"></div>
                <CardContentComponent
                    title='Descripción'
                    description={tipJob.descriptionOffer.description}
                />
        </div>
    )
}