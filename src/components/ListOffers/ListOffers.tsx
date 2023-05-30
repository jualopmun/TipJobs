import { memo, useContext } from "react"
import { GlobalContext } from "../../context";
import { CardContent } from "../CardContent/CardContent";
import { Offer } from "./Offer";

export const ListOffers = memo(function ListOffers() {
    const {offers, i18n, loadingOffers} = useContext(GlobalContext);

    const renderListOffers = offers.map((offer) => (
        <Offer key={offer.id} offer={offer}/>
    ))
    return (
        <>
        {
          renderListOffers.length === 0 && !loadingOffers &&
            <CardContent 
              title={i18n.constant.notResultAvalible}
            />
        }
          <div className="rounded-lg shadow-lg">          
            {renderListOffers}
          </div>
        </>
    )
});

export default ListOffers;