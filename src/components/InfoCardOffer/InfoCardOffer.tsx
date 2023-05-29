import { useTipJob } from "../../hooks";
import { useContext, useState } from "react";
import { HeaderContentOfferComponent } from "../HeaderContentOffer/HeaderContentOffer";
import { BUTTONSACTIONENUM } from "./buttonsActionEnum";
import { infoOfferType } from "./infoCardListType";
import { TipJobChatGPTComponent } from "./TipJobChatGPT";
import { DescriptionCardOfferComponent } from "./DescriptionCardOffer";
import { ListVideoCardComponent } from "../VideoOffer/ListVideoCard";
import { GlobalContext } from "../../context";

export default function InfoCardListOfferComponent({offerId}: infoOfferType) {
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
        [getButtonsRender.DESCRIPTION]: () => {setActionButton(getButtonsRender.DESCRIPTION)},
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
        [getButtonsRender.DESCRIPTION]: tipJob && <DescriptionCardOfferComponent tipJob={tipJob}/>,
        [getButtonsRender.TIPJOBCHAT]: tipJob && <TipJobChatGPTComponent tipJob={tipJob} 
            loadingChatGPT={loadingChatGPT}/>,
        [getButtonsRender.VIDEOS]: tipJob && <ListVideoCardComponent tipJob={tipJob} 
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
                    <HeaderContentOfferComponent descriptionOffer={tipJob.descriptionOffer}/>
                </div>
            }
            {renderDetailInfo}
        </>
    )

}
