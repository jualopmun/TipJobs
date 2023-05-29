import { useContext } from "react";
import { CardContentComponent } from "../CardContent/CardContent";
import { LoadingCardDescriptionComponent } from "../LoadingCardDescription/LoadingCardDescription";
import { VideoOffer } from "./VideoOffer";
import { videoOfferType } from "./videoOfferType";
import { GlobalContext } from "../../context";

export function ListVideoCardComponent({tipJob: {videoCourses, descriptionOffer}, loadingVideos}: videoOfferType) {
    const {i18n} = useContext(GlobalContext);

    const renderVideos = loadingVideos ? 
        <LoadingCardDescriptionComponent/> :
        videoCourses?.items?.map((videoCourse) => (
            <VideoOffer key={videoCourse.id} video={videoCourse}/>
    ));

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <CardContentComponent 
                title={i18n.videoOffer.listCourseTitle}
            >
                {renderVideos}
                {
                    descriptionOffer?.skillsList.length === 0 && 
                    <p className="text-gray-700 whitespace-pre-line mb-2">
                        {i18n.videoOffer.notFoundList}
                    </p>
                }
            </CardContentComponent>
        </div>
    )

}