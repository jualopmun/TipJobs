import { useContext } from "react";
import { CardContent } from "../CardContent/CardContent";
import { LoadingCardDescription } from "../LoadingCardDescription/LoadingCardDescription";
import { VideoOffer } from "./VideoOffer";
import { videoOfferType } from "./videoOfferType";
import { GlobalContext } from "../../context";

export function ListVideoCard({tipJob: {videoCourses, descriptionOffer}, loadingVideos}: videoOfferType) {
    const {i18n} = useContext(GlobalContext);

    const renderVideos = loadingVideos ? 
        <LoadingCardDescription/> :
        videoCourses?.items?.map((videoCourse) => (
            <VideoOffer key={videoCourse.id} video={videoCourse}/>
    ));

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <CardContent 
                title={i18n.videoOffer.listCourseTitle}
            >
                {renderVideos}
                {
                    descriptionOffer?.skillsList.length === 0 && 
                    <p className="text-gray-700 whitespace-pre-line mb-2">
                        {i18n.videoOffer.notFoundList}
                    </p>
                }
            </CardContent>
        </div>
    )

}