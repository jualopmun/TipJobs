import { ConfigApiYouTubeApiRapid } from "../config";
import { VideoCourses } from "../models";
import { fetchApi } from "../util";

export function fetchApiListVideo(prompt: string) {
    const url = `${ConfigApiYouTubeApiRapid.URLSEARCH} ${prompt}`;
    return fetchApi<VideoCourses>({url, headers: ConfigApiYouTubeApiRapid.HEADERS});
}