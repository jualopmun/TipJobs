import { useContext, useEffect } from "react";
import { fetchListProvinces } from "../api";
import { GlobalContext } from "../context";
import toast from "react-hot-toast";

export function useListCities() {

    const {cities, setCities} = useContext(GlobalContext)

    useEffect(() => {
        if(cities.length > 0 ) return;
        fetchListProvinces()
        .then((res) => setCities(res))
        .catch((error) => {
            console.log(`Se ha producido un error en cargar la lista de ciudades: ${error}`);
            toast.error('Se ha producido un error en cargar la lista de ciudades');
        })
    }, [])
    

    return {cities}
}