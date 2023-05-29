import { useTipJob } from "../../hooks";
import { useState } from "react";
import { HeaderContentOfferComponent } from "../HeaderContentOffer/HeaderContentOffer";
import { BUTTONSACTIONENUM } from "./buttonsActionEnum";
import { infoOfferType } from "./infoCardListType";
import { TipJobChatGPTComponent } from "./TipJobChatGPT";
import { DescriptionCardOfferComponent } from "./DescriptionCardOffer";
import { ListVideoCardComponent } from "../VideoOffer/ListVideoCard";

export default function InfoCardListOfferComponent({offerId}: infoOfferType) {
   const {
        tipJob, 
        getVideosCourse, 
        getTipChatGPT, 
        loadingChatGPT,
        loadingVideos
    } = useTipJob(offerId);

   const [actionButton, setActionButton] = useState(BUTTONSACTIONENUM.DESCRIPTION);


    const actionsFunctionButtons = {
        [BUTTONSACTIONENUM.DESCRIPTION]: () => {setActionButton(BUTTONSACTIONENUM.DESCRIPTION)},
        [BUTTONSACTIONENUM.TIPJOBCHAT]: () => {
            setActionButton(BUTTONSACTIONENUM.TIPJOBCHAT);
            getTipChatGPT();
        },
        [BUTTONSACTIONENUM.VIDEOS]: () => {
            setActionButton(BUTTONSACTIONENUM.VIDEOS);
            getVideosCourse();
        },
        
    }

    const componentDetailRender = {
        [BUTTONSACTIONENUM.DESCRIPTION]: tipJob && <DescriptionCardOfferComponent tipJob={tipJob}/>,
        [BUTTONSACTIONENUM.TIPJOBCHAT]: tipJob && <TipJobChatGPTComponent tipJob={tipJob} 
            loadingChatGPT={loadingChatGPT}/>,
        [BUTTONSACTIONENUM.VIDEOS]: tipJob && <ListVideoCardComponent tipJob={tipJob} 
        loadingVideos={loadingVideos}/>,
        
    }
    
    const renderDetailInfo = componentDetailRender[actionButton];

   const renderButtons = Object.values(BUTTONSACTIONENUM).map((button) => (
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
