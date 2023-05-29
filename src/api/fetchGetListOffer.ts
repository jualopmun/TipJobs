import { ConfigApiInfoJobs } from "../config";
import { ResultSearchOffer } from "../models";
import { fetchSearchApiInfoJobs } from "../util";


type searchInput = {
    searchJob: string | null;
    searchCity: string | null ;
}

export function fetchSearchJobs(search: searchInput): Promise<ResultSearchOffer> {
    const {searchJob, searchCity} = search;
    const searchParams = new URLSearchParams({
        ...(searchJob && {  q:  searchJob}),
        country: ConfigApiInfoJobs.DEFAULTCOUNTRY,
        ...(searchCity && {  province:  searchCity})
    }).toString();

    return fetchSearchApiInfoJobs<ResultSearchOffer>(ConfigApiInfoJobs.URISEARCHOFFERS, searchParams);
}