import { ConfigApiChatGPTRapid } from "../config/apiChatGPTApiRapidConfig";
import { TipJobChatGPT } from "../models/tipJobChatGPTModel";
import { fetchApi } from "../util";

export function fetchPostTipJobChatGPT(title: string, description: string) {
    const url = `${ConfigApiChatGPTRapid.URLTIPJOB}`;
    return fetchApi<TipJobChatGPT>({
        url, 
        headers: ConfigApiChatGPTRapid.HEADERS, 
        method: 'POST', 
        data: ConfigApiChatGPTRapid.DATA(title, description)
    });
}