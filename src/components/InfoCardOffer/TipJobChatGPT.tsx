import { CardContentComponent } from "../CardContent/CardContent";
import { LoadingCardDescriptionComponent } from "../LoadingCardDescription/LoadingCardDescription";
import { tipJobChatGPT } from "./infoCardListType";

export function TipJobChatGPTComponent({tipJob: {tipChatGPTDescription}, loadingChatGPT}: tipJobChatGPT) {


   const renderTipChatGPT = loadingChatGPT ? 
    <LoadingCardDescriptionComponent/> :
        <CardContentComponent 
            title='Consejos para el puesto' 
            description={tipChatGPTDescription ?? ''}
        >
        </CardContentComponent>

        return(
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {renderTipChatGPT}
                {
                    !tipChatGPTDescription && !loadingChatGPT && 
                    <p className="text-gray-700 whitespace-pre-line mb-2">
                        No se encuentra consejos disponible
                    </p>
                }
            </div>
        )
}