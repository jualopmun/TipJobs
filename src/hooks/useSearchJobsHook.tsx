import { useContext, useEffect, useState } from "react";
import { fetchSearchJobs } from "../api";
import { GlobalContext } from "../context";
import toast from "react-hot-toast";

type searchJobTyp = {
    searchJob: string | null;
    searchCity: string | null
}

export function useSearchJobs() {
    const { 
        offers, 
        setOffers, 
        setLoaingOffers, 
        i18n 
    } = useContext(GlobalContext);

    const [search, setSearch] = useState<searchJobTyp>({searchJob: null, searchCity: null});


    useEffect(() => {
        if(offers.length > 0 && !search.searchJob && !search.searchCity) return;
        setLoaingOffers(true);

        fetchSearchJobs(search)
        .then((res) => setOffers(res.items))
        .catch((error) => {
            console.log(`error Load list job: ${error}`);
            toast.error(i18n.errorMessages.errorLoadJobs);
        })
        .finally(() => setLoaingOffers(false));

    }, [search, setOffers]);

    return {
        setSearch,
        offers,
    }
}