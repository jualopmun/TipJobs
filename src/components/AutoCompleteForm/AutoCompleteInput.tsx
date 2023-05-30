import { useContext, useState } from "react";
import { AutoCompleteInputType } from "./autoCompleteInputType";
import { GlobalContext } from "../../context";

export function AutoCompleteInput({listObjects, setData}: AutoCompleteInputType) {

    const { i18n } = useContext(GlobalContext);

    const [valueInput, setValueInput] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(false);
    const suggestions = listObjects.filter(({value}) => 
        value.toLowerCase().includes(valueInput.toLowerCase()
    ));
    

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
        ) => setValueInput(event.target.value);

    const handleSuggestionClick = (key: string, value: string) => {
        setValueInput(value);
        setData(key);
        setShowSuggestion(false);
    };

    const renderSuggestions = suggestions.slice(0,5).map(({key, value}) => 
        <option className="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer
         hover:bg-slate-100 transition-colors" 
            onClick={() => handleSuggestionClick(key,value)}
            key={key}
            value={key}
        >
            {value}
        </option>
    );

    return (
        <>
            <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border 
              border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                focus:outline-n"
                value={valueInput}
                onChange={handleChange}
                placeholder={i18n.constant.select}
                onFocus={() => setShowSuggestion(true)}
            />
           {showSuggestion &&
                <div className="absolute bg-white p-6 rounded-lg shadow-lg lg:w-1/3 sm:w-2/3">
                    {suggestions.length > 0 && renderSuggestions}
                    {suggestions.length == 0 && <p className="text-gray-700 whitespace-pre-line mb-2">
                        {i18n.constant.notResultAvalible}
                    </p>}
                </div>
            }
        </>
    )

}