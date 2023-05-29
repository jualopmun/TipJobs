import { useContext, useEffect } from "react";
import { fetchListProvinces } from "../api";
import { GlobalContext } from "../context";

export function useListCities() {

    const {cities, setCities} = useContext(GlobalContext)

    useEffect(() => {
        if(cities.length > 0 ) return;
        fetchListProvinces()
        .then((res) => setCities(res))
    }, [])
    

    return {cities}
}