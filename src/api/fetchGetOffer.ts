import { ConfigApiInfoJobs } from "../config";
import { DescriptionOffer } from "../models/descriptionOfferModel";
import { fetchSearchApiInfoJobs } from "../util";

export function fetchApiDescriptionOffer(id: string) {
    const urlSend = ConfigApiInfoJobs.URIGETOFFER.replace(':id', id);
    return fetchSearchApiInfoJobs<DescriptionOffer>(urlSend);
}