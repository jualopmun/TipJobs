import { useContext, useEffect } from "react";
import { fetchListProvinces } from "../api";
import { GlobalContext } from "../context";
import toast from "react-hot-toast";

export function useListCities() {

    const {cities, setCities, i18n} = useContext(GlobalContext)

    useEffect(() => {
        if(cities.length > 0 ) return;
        fetchListProvinces()
        .then((res) => setCities(res))
        .catch((error) => {
            console.log(`Error in load cities: ${error}`);
            toast.error(i18n.errorMessages.errorLoadCities);
        })
    }, [])
    

    return {cities}
}