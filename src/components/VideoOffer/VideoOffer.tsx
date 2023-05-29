import { VideoDescription } from "../../models";

type TypeVideoOffer = {
    video: VideoDescription;
}

export function VideoOffer({video}: TypeVideoOffer) {

    const {
        url,
        bestThumbnail,
        skill,
        title
    } = video
    
    return (
        <>                        
            {video && <a href={url} target="_blank">
                <div className="bg-white p-4 sm:flex lg:items-end group">
                    <div className="flex-shrink-0 mb-4 pl-4 sm:mb-0 sm:mr-4">
                        <img className="w-full rounded-md lg:w-32 object-cover" 
                            src={bestThumbnail.url}
                            alt="logo del video"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">
                            {skill}
                        </h1>
                        <p className="text-md text-gray-800 group-hover:text-gray-500 lg:text-lg">
                            {title}
                        </p>
                    </div>
                </div>
            </a> }
        </>
    )
}