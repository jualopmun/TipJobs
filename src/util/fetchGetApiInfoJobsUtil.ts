import { fetchApi } from ".";
import { ConfigApiInfoJobs } from "../config";

export function fetchSearchApiInfoJobs<T>(uri:string, searchParams = ''): Promise<T> {
    const addParamsURLResult = `${uri}?${searchParams}`;
    const sendToGet = searchParams !== '' ?  addParamsURLResult : uri;
    return fetchApi<T>({
        url:sendToGet, 
        headers: ConfigApiInfoJobs.HEADERS}
    );
}