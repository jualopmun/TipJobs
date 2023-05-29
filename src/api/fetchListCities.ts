import { ConfigApiInfoJobs } from "../config";
import { Province } from "../models";
import { fetchSearchApiInfoJobs } from "../util";

export function fetchListProvinces(): Promise<Province[]> {
    return fetchSearchApiInfoJobs<Province[]>(ConfigApiInfoJobs.URILISPROVINCE);
}