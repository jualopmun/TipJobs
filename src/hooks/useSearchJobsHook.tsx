import { useContext, useEffect, useState } from "react";
import { fetchSearchJobs } from "../api";
import { GlobalContext } from "../context";
import toast from "react-hot-toast";

type searchJobTyp = {
    searchJob: string | null;
    searchCity: string | null
}

export function useSearchJobs() {
    const { offers, setOffers } = useContext(GlobalContext);

    const [search, setSearch] = useState<searchJobTyp>({searchJob: null, searchCity: null});

    const [loadingOffers, setLoadingOffers ] = useState(false);

    useEffect(() => {
        if(offers.length > 0 && !search.searchJob && !search.searchCity) return;
        setLoadingOffers(true);

        fetchSearchJobs(search)
        .then((res) => setOffers(res.items))
        .catch((error) => {
            console.log(`Se ha producido un error en cargar la lista de trabajo: ${error}`);
            toast.error('Se ha producido un error en cargar la lista de trabajo');
        })
        .finally(() => setLoadingOffers(false));

    }, [search, setOffers]);

    return {
        setSearch,
        offers,
        loadingOffers,
    }
}