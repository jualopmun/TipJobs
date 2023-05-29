import { environmentConfig } from "./environmentConfig";

const HEADERS = {
    "Content-Type": "application/json",
    "Authorization":  `basic ${environmentConfig.KEY_INFOJOBS}`,
    };


export const ConfigApiInfoJobs = {
    HEADERS,
    DEFAULTCOUNTRY: 'espana',
    URISEARCHOFFERS: '/apijobs/api/9/offer',
    URIGETOFFER:'/apijobs/api/9/offer/:id',
    URILISPROVINCE: '/apijobs/api/1/dictionary/province?parent=17'
}
