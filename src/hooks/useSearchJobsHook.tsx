import { useContext, useEffect, useState } from "react";
import { fetchSearchJobs } from "../api";
import { GlobalContext } from "../context";

type searchJobTyp = {
    searchJob: string | null;
    searchCity: string | null
}

export function useSearchJobs() {
    const [search, setSearch] = useState<searchJobTyp>({searchJob: null, searchCity: null});
    const { offers, setOffers } = useContext(GlobalContext);

    useEffect(() => {
        if(offers.length > 0 && !search.searchJob && !search.searchCity) return;
        fetchSearchJobs(search)
        .then((res) => setOffers(res.items))
    }, [search, setOffers]);

    return {
        setSearch,
        offers,
    }
}