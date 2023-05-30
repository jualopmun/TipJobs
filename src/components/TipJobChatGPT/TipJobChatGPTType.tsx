import { useContext } from "react";
import { GlobalContext } from "../../context";
import { CardContent } from "../CardContent/CardContent";
import { LoadingCardDescription } from "../LoadingCardDescription/LoadingCardDescription";
import { TipJobChatGPTType } from "./TipJobChatGPT";

export function TipJobChatGPT({tipJob: {tipChatGPTDescription}, loadingChatGPT}: TipJobChatGPTType) {
    const { i18n } = useContext(GlobalContext);

    const renderTipChatGPT = loadingChatGPT ? 
        <LoadingCardDescription/> :
            <CardContent
                title={i18n.infoCardOffer.tipJobChatGPT.tipTitle} 
                description={tipChatGPTDescription ?? ''}
            >
            </CardContent>

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