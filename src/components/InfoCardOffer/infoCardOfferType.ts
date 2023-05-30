import { TipJob } from "../../models";
import { DescriptionOffer } from "../../models/descriptionOfferModel";

export type InfoOfferType = {
    offerId: string;
}

export type TipJobType = {
    tipJob: TipJob;
}

export type ContentOfferHeaderType = {
    descriptionOffer: DescriptionOffer;
}