import { i18Model } from "../models/i18nModel"

const es: i18Model = {
    constant: {
        subtitle: 'Consejos para tu nuevo puesto de trabajo',
        notAvalible: 'No disponible',
        notRequired: 'No Requerida',
        notResultAvalible: 'No se ha encontrado resultados',
        loading: 'Espere por favor...',
        select: 'Seleccionar',
    },
    errorMessages: {
        errorLoadCities:'Se ha producido un error en cargar la lista de ciudades',
        errorLoadJobs: 'Se ha producido un error en cargar la lista de trabajo',
        errorLoadData: 'Se ha producido un error en visualizar los datos',
        errorLoadCourses: 'Se ha producido un error en cargar los cursos',
        errorLoadTips: 'Se ha producido un error en cargar los consejos',
    },

    headerContentOffer: {
        buttonOffer: 'INSCRIBIRME EN ESTA OFERTA',
        lisDescriptionOffer: {
            salary: 'Salario',
            experienceMin: 'Experiencia mínima',
            contractType: 'Tipo de contrato',
        },
    },
    infoCardOffer: {
        buttonsAction: {
            description: 'Descripción',
            tipJobChat: 'Consejo para este puesto',
            videos: 'Cursos relacionados'
        },
        requirementsOffer: {
            studiesMin: 'Estudios mínimos',
            experienceMin: 'Experiencia Mínima',
            languages: 'Idiomas requeridos',
            skillList: 'Conocimientos necesarios',
            minRequirements: 'Requisitos mínimos',
        },
        tipJobChatGPT: {
            tipTitle: 'Consejo para el puesto',
            notAvalible: 'No se encuentra consejos disponible',
        },
    },
    offer: {
        salaryNotAvalible: 'Salario no disponible',
    },
    searchOffers: {
        labelInputSearch: 'Busco ofertas de...',
        labelSelectSearch: 'En...',
        buttonSearch: 'Buscar',
        placeHolderInputSearch: 'Puesto, empresa o palabra en clave',
    },
    videoOffer: {
        listCourseTitle: 'Cursos relacionados',
        notFoundList: 'No se encuentra cursos disponibles',
    }
}


export const i18nConfig = {
   es,
}

