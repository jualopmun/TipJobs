import { useParams } from "react-router-dom";
import InfoCardListOfferComponent from "../components/InfoCardOffer/InfoCardOffer";

import { Toaster } from 'react-hot-toast';


export function InfoOfferPage() {
    const params = useParams();
    return (
        <>
            <section> 
                {params?.id && <InfoCardListOfferComponent offerId={params.id}></InfoCardListOfferComponent>}
                <Toaster/>
            </section>
        </>
    )
}