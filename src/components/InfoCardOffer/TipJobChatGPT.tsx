import { useContext } from "react";
import { GlobalContext } from "../../context";
import { CardContentComponent } from "../CardContent/CardContent";
import { LoadingCardDescriptionComponent } from "../LoadingCardDescription/LoadingCardDescription";
import { tipJobChatGPT } from "./infoCardListType";

export function TipJobChatGPTComponent({tipJob: {tipChatGPTDescription}, loadingChatGPT}: tipJobChatGPT) {
    const { i18n } = useContext(GlobalContext);

    const renderTipChatGPT = loadingChatGPT ? 
        <LoadingCardDescriptionComponent/> :
            <CardContentComponent 
                title={i18n.infoCardOffer.tipJobChatGPT.tipTitle} 
                description={tipChatGPTDescription ?? ''}
            >
            </CardContentComponent>

            return(
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {renderTipChatGPT}
                    {
                        !tipChatGPTDescription && !loadingChatGPT && 
                        <p className="text-gray-700 whitespace-pre-line mb-2">
                        {i18n.infoCardOffer.tipJobChatGPT.notAvalible}
                        </p>
                    }
                </div>
            )
}