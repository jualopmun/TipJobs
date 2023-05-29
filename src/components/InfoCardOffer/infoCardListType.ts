import { TipJob } from "../../models";

export type infoOfferType = {
    offerId: string;
}

export type tipJobType = {
    tipJob: TipJob;
}

export type tipJobChatGPT = {
    tipJob: TipJob;
    loadingChatGPT: boolean
}