import { useContext, useRef } from "react";
import { useListCities } from "../../hooks";
import { useSearchJobs } from "../../hooks/useSearchJobsHook";
import { GlobalContext } from "../../context";

export default function SearchOffersComponent() {

    const {i18n} = useContext(GlobalContext);

    const {setSearch} = useSearchJobs();
    const {cities} = useListCities();

    const inputOfferValue = useRef<HTMLInputElement>(null);
    const selectCityValue = useRef<HTMLSelectElement>(null);

    const listOptionsCities = cities.map((city) => {
        const {key, value} = city;
        return (<option key={key} value={key}>{value}</option>);
    })

    const onSubmitSearch = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const valueInputOfferJob = inputOfferValue?.current?.value ?? null;
        const valueSelectCityJob = selectCityValue?.current?.value ?? null;

        const sendParams = {
            searchJob: valueInputOfferJob,
            searchCity: valueSelectCityJob
        }
        setSearch(sendParams)
    }

    return ( 
        <form onSubmit={onSubmitSearch}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 md:w-1/3">
                    <label className="block uppercase tracking-wide 
                        text-white text-lg font-semibold mb-2"
                    >
                        {i18n.searchOffers.labelInputSearch}
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500" 
                        type="text" 
                        placeholder="Puesto, empresa o palabra en clave"
                        ref={inputOfferValue}
                        name="offer"
                    />
                </div>
                <div className="w-full px-3 md:w-1/3">
                    
                    <label className="block uppercase tracking-wide text-white text-lg font-semibold mb-2">
                        {i18n.searchOffers.labelSelectSearch}
                    </label>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 
                        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
                        focus:border-gray-500"
                        ref={selectCityValue}
                        name="city"
                    >
                        {listOptionsCities}
                    </select>
                </div>
                <div className="w-full px-3 md:w-1/3 mt-8">
                    <button 
                        type="submit" 
                        className="bg-accent text-white text-lg font-semibold py-3 px-4 pr-8"
                    >
                         {i18n.searchOffers.buttonSearch}
                    </button>
                </div>
            </div>
        </form>
    )
}