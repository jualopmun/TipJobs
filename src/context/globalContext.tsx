import { ReactNode, createContext, useState} from "react";
import { useTipJobReducer } from "../reducers";
import { Offer, Province, TipJob } from "../models";
import { i18nConfig } from "../config";
import { i18Model } from "../models/i18nModel";

type globalContextType = {
    children?: ReactNode;
}

type GlobalContextType = {
    i18n: i18Model,
    cities: Province[];
    setCities: React.Dispatch<React.SetStateAction<Province[]>>;
    offers: Offer[];
    setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
    tipsJob: TipJob[],
    addNewTipJob: (tipJob: TipJob) => void,
    modifyTipJob: (tipJob: TipJob) => void
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({ children }: globalContextType) {

    const [i18n] = useState(i18nConfig.es)
    const {state, addNewTipJob, modifyTipJob} = useTipJobReducer();
    const [offers, setOffers] = useState<Offer[]>([]);
    const [cities, setCities] = useState<Province[]>([]);


    return (
        <GlobalContext.Provider value={{
            i18n,
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