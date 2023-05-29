export interface i18Model {
    constant: ConstantsModel,
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
}

interface HeaderContentOfferModel {
    buttonOffer: string
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
    notAvalible: string
}

interface OfferModel {
    salaryNotAvalible: string,
}

interface SearchOffersModel {
    labelInputSearch: string,
    labelSelectSearch: string,
    buttonSearch: string
}

interface VideosOfferModel {
    listCourseTitle: string,
    notFoundList: string
}