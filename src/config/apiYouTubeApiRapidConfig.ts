import { environmentConfig } from ".";

const HOSTAPIRAPID = "youtube-search-results.p.rapidapi.com";

const HEADERS = {
    "X-RapidAPI-Key": environmentConfig.KEY_API_RAPID,
    'X-RapidAPI-Host': HOSTAPIRAPID
};

export const ConfigApiYouTubeApiRapid = {
    HEADERS,
    URLSEARCH: 'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=curso',
}

