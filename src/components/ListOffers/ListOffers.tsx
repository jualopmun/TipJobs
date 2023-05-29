import { memo, useContext } from "react"
import { GlobalContext } from "../../context";
import { CardContentComponent } from "../CardContent/CardContent";
import { OfferComponent } from "./Offer";

export const ListOffersComponent = memo(function ListOffersComponent() {
    const {offers} = useContext(GlobalContext);

    const renderListOffers = offers.map((offer) => (
        <OfferComponent key={offer.id} offer={offer}/>
    ))
    return (
        <>
        {
          renderListOffers.length === 0 && 
            <CardContentComponent 
              title='No hay resultados disponibles' 
            />
        }
          <div className="rounded-lg shadow-lg">          
            {renderListOffers}
          </div>
        </>
    )
});

export default ListOffersComponent;