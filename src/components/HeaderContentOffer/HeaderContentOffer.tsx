import transformDate from "../../util/tranformDate.util";
import { ListDescriptionOfferComponent } from "./ListDescriptionOffer";
import { HeaderContentOfferType } from "./headerContentType";

export function HeaderContentOfferComponent({descriptionOffer}: HeaderContentOfferType) {
    const {
        creationDate,
        profile,
        title, 
        link,
    } = descriptionOffer;
    
    const transformDatePublished = transformDate(new Date(creationDate));

    const renderListDescriptionOffer = <ListDescriptionOfferComponent descriptionOffer={descriptionOffer}/>;

    return (
        <>                        
            <div className="bg-white p-4 mt-2 sm:flex lg:items-end group">
                <div>
                    <span className="text-sm text-gray-500">{transformDatePublished}</span>
                    <p className="text-xl text-gray-800 lg:text-2xl">
                        {title}
                    </p>
                    <p className="text-md text-primary lg:text-md">
                        {profile.name}
                    </p>
                    <div className="grid justify-items-stretch">
                        <div>
                            <ul className="mt-8 space-y-3 font-medium">
                                {renderListDescriptionOffer}
                            </ul>
                        </div>
                        <div>
                            <button
                                className="bg-accent hover:bg-blue-500 focus:bg-blue-500
                                text-white text-lg font-semibold px-4 py-3 mx-5 my-5" 
                                name='linkOffer'
                                onClick={() => window.open(
                                    link,
                                    '_blank'
                                )}
                            >
                                INSCRIBIRME EN ESTA OFERTA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}