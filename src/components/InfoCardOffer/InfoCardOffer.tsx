import { useTipJob } from "../../hooks";
import { useContext, useState } from "react";
import { BUTTONSACTIONENUM } from "./ContentOfferHeader/buttonsActionEnum";
import { InfoOfferType } from "./infoCardOfferType";
import { GlobalContext } from "../../context";
import { TipJobChatGPT } from "../TipJobChatGPT/TipJobChatGPTType";
import { ContentOfferHeader } from "./ContentOfferHeader/ContentOfferHeader";
import { DescriptionOfferCard } from "./DescriptionOfferCard/DescriptionOfferCard";
import { ListVideoCard } from "../VideoOffer/ListVideoCard";

export default function InfoCardListOffer({offerId}: InfoOfferType) {
   const {
        tipJob, 
        getVideosCourse, 
        getTipChatGPT, 
        loadingChatGPT,
        loadingVideos
    } = useTipJob(offerId);

    const {i18n} = useContext(GlobalContext);

    const getButtonsRender = BUTTONSACTIONENUM(i18n);

    const [actionButton, setActionButton] = useState(getButtonsRender.DESCRIPTION);


    const actionsFunctionButtons = {
        [getButtonsRender.DESCRIPTION]: () => {
            setActionButton(getButtonsRender.DESCRIPTION)
        },
        [getButtonsRender.TIPJOBCHAT]: () => {
            setActionButton(getButtonsRender.TIPJOBCHAT);
            getTipChatGPT();
        },
        [getButtonsRender.VIDEOS]: () => {
            setActionButton(getButtonsRender.VIDEOS);
            getVideosCourse();
        },
        
    }

    const componentDetailRender = {
        [getButtonsRender.DESCRIPTION]: tipJob && <DescriptionOfferCard tipJob={tipJob}/>,
        [getButtonsRender.TIPJOBCHAT]: tipJob && <TipJobChatGPT tipJob={tipJob} 
            loadingChatGPT={loadingChatGPT}/>,
        [getButtonsRender.VIDEOS]: tipJob && <ListVideoCard tipJob={tipJob} 
        loadingVideos={loadingVideos}/>,
        
    }
    
    const renderDetailInfo = componentDetailRender[actionButton];

    const renderButtons = Object.values(getButtonsRender).map((button) => (
        <button
            key={button}
            className="bg-primary hover:bg-blue-500 focus:bg-blue-500
            text-white text-sm font-semibold px-4 py-3 mx-5 my-5" 
            name={button}
            onClick={actionsFunctionButtons[button]}
        >
            {button}
        </button>
   ));

    return (
        <>
            {
                tipJob?.descriptionOffer && 
                <div className="bg-white p-6 rounded-lg shadow-lg mb-5">
                    {renderButtons}
                    <ContentOfferHeader descriptionOffer={tipJob.descriptionOffer}/>
                </div>
            }
            {renderDetailInfo}
        </>
    )

}
