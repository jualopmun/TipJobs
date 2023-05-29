import toast from "react-hot-toast";

type fetchApiType = {
  url: string;
  headers: HeadersInit,
  method?: string
  data?: any
}


export function fetchApi<T>({url, headers = {}, method = 'GET', data = null}: fetchApiType): Promise<T> {
  console.log(data);
    return fetch(url, {
      method,
      headers,
      ...(data && {  body:  JSON.stringify(data)})
    })
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      toast.error('ha ocurrido un error');
    });
  }