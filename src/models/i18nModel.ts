export interface i18Model {
    constant: ConstantsModel,
    errorMessages: ErrorMessagesModel,
    headerContentOffer: HeaderContentOfferModel,
    infoCardOffer: InfoCardOfferModel,
    offer: OfferModel,
    searchOffers: SearchOffersModel,
    videoOffer: VideosOfferModel,
}

interface ConstantsModel {
    subtitle: string,
    notAvalible: string,
    notRequired: string,
    notResultAvalible: string,
    loading: string,
    select: string,
}

interface ErrorMessagesModel {
    errorLoadCities: string,
    errorLoadJobs: string,
    errorLoadData: string,
    errorLoadCourses: string,
    errorLoadTips: string,
}

interface HeaderContentOfferModel {
    buttonOffer: string,
    lisDescriptionOffer: LisDescriptionOfferModel,
}

interface InfoCardOfferModel {
    buttonsAction: ButtonsActionModel,
    requirementsOffer: RequirementsOfferModel,
    tipJobChatGPT: TipJobChatGPTModel,

}

interface ButtonsActionModel {
    description: string,
    tipJobChat: string,
    videos: string,
}

interface RequirementsOfferModel {
    studiesMin: string,
    experienceMin: string,
    languages: string,
    skillList: string,
    minRequirements: string,
}

interface TipJobChatGPTModel {
    tipTitle: string,
    notAvalible: string,
}

interface OfferModel {
    salaryNotAvalible: string,
}

interface SearchOffersModel {
    labelInputSearch: string,
    labelSelectSearch: string,
    buttonSearch: string,
    placeHolderInputSearch: string,
}

interface VideosOfferModel {
    listCourseTitle: string,
    notFoundList: string,
}

interface LisDescriptionOfferModel {
    salary: string,
    experienceMin: string,
    contractType: string,
}