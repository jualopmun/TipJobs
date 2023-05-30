import { environmentConfig } from ".";

const HOSTAPIRAPID = "chatgpt53.p.rapidapi.com";

const PROMPT = 'Dame consejo de entrevista para este puesto de'

const HEADERS = {
    "content-type": 'application/json',
    "X-RapidAPI-Key": environmentConfig.KEY_API_RAPID,
    'X-RapidAPI-Host': HOSTAPIRAPID
};

const DATA = (title: string, description: string) => ({
    messages: [
      {
        role: 'user',
        content: `${PROMPT} ${title}: ${description.substring(0,240)}`
      }
    ]
  });
  

export const ConfigApiChatGPTRapid = {
    HEADERS,
    DATA,
    URLTIPJOB: 'https://chatgpt53.p.rapidapi.com',
}
