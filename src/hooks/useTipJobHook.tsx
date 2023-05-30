import { 
    useCallback, 
    useContext, 
    useEffect, 
    useState 
} from "react";

import { 
    TipJob, 
    VideoDescription 
} from "../models";

import { 
    fetchApiDescriptionOffer,
    fetchApiListVideo, 
    fetchPostTipJobChatGPT 
} from "../api";
import { GlobalContext } from "../context";
import toast from "react-hot-toast";

const getTipJobList = (tipsJob: TipJob[], offerId: string) => 
    tipsJob?.find(({descriptionOffer}) => 
    descriptionOffer.id === offerId);

export function useTipJob(offerId: string) {
    const {
        tipsJob,
        addNewTipJob, 
        modifyTipJob,
        i18n,
    } = useContext(GlobalContext);
    

    const [tipJob, setTipJob] = useState<TipJob>();
    const [loadingChatGPT, setLoadingChatGPT] = useState(false);
    const [loadingVideos, setLoadingVideos] = useState(false);
    useEffect(() => {

        const searchGeTipJobState = getTipJobList(tipsJob, offerId)
        if(searchGeTipJobState) return setTipJob(searchGeTipJobState);

        if(!tipJob){
            fetchApiDescriptionOffer(offerId)
            .then((descriptionOffer) => {                
                const newTipJob: TipJob = {
                    descriptionOffer,
                };
                addNewTipJob(newTipJob);
                setTipJob(newTipJob);
            })
            .catch((error) => {
                console.error(`Error view data: ${error}`);
                toast.error(i18n.errorMessages.errorLoadData);
            });
        }
    }, []);

    const getVideosCourse = useCallback(async () => {
        try {
            if(tipJob?.descriptionOffer?.skillsList 
                && !tipJob?.videoCourses 
                && !loadingVideos
            ){
                setLoadingVideos(true);
                const getPromiseVideos = Promise.all(
                        tipJob.descriptionOffer.skillsList.slice(0,3).map(async({skill}) => {
                        const getVideo = (await fetchApiListVideo(skill));
                        if(getVideo){
                            const findVideo = getVideo.items?.find(({type}) => type === 'video') as VideoDescription
                            return {...findVideo, skill};
                        }
                    })
                );
                
                const videosDescription = await getPromiseVideos as VideoDescription[];

                const videoCourses = {
                    items: videosDescription
                };
                
                const tipJobForModify: TipJob = {
                    ...tipJob,
                    videoCourses
                    
                }
                modifyTipJob(tipJobForModify);
                setTipJob(tipJobForModify);
            }
        } catch (error) {
          console.error(`Error load videos: ${error}`);
          toast.error(i18n.errorMessages.errorLoadCourses);
        } finally {
          setLoadingVideos(false)
        }
    }, [modifyTipJob, tipJob])

      
    const getTipChatGPT = useCallback(async () => {
        try {
            if(
                tipJob 
                && !tipJob?.tipChatGPTDescription 
                && tipJob?.descriptionOffer?.description 
                && !loadingChatGPT
                ){
                setLoadingChatGPT(true);
                
                const postTipJobChatGPT = await fetchPostTipJobChatGPT(
                    tipJob.descriptionOffer.title, 
                    tipJob.descriptionOffer.description);

                const tipJobForModify: TipJob = {
                    ...tipJob,
                    tipChatGPTDescription: postTipJobChatGPT.choices[0].message.content as string,
                };
            
                modifyTipJob(tipJobForModify);
                setTipJob(tipJobForModify);
            }
        } catch (error) {
          console.error(`error load tips: ${error}`);
          toast.error(i18n.errorMessages.errorLoadTips);
        } finally {
          setLoadingChatGPT(false)
        }
      }, [modifyTipJob, tipJob]);

    return {
        tipJob,
        getVideosCourse,
        getTipChatGPT,
        loadingChatGPT,
        loadingVideos,
    }
}