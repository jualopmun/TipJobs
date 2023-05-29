import { createContext, useState} from "react";
import { useTipJobReducer } from "../reducers";
import { Offer, Province, TipJob } from "../models";

type GlobalContextType = {
    cities: Province[];
    setCities: React.Dispatch<React.SetStateAction<Province[]>>;
    offers: Offer[];
    setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
    tipsJob: TipJob[],
    addNewTipJob: (tipJob: TipJob) => void,
    modifyTipJob: (tipJob: TipJob) => void
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({ children }) {

    const {state, addNewTipJob, modifyTipJob} = useTipJobReducer();
    const [offers, setOffers] = useState<Offer[]>([]);
    const [cities, setCities] = useState<Province[]>([]);


    return (
        <GlobalContext.Provider value={{
            cities,
            setCities,
            offers,
            setOffers,
            tipsJob: state,
            addNewTipJob,
            modifyTipJob
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}