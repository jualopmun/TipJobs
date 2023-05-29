import { i18Model } from "../models/i18nModel"

const es: i18Model = {
    constant: {
        subtitle: 'Consejos para tu nuevo puesto de trabajo',
        notAvalible: 'No disponible',
        notRequired: 'No Requerida',
        notResultAvalible: 'No hay resultados disponibles',
        loading: 'Espere por favor...',
    },
    headerContentOffer: {
        buttonOffer: 'INSCRIBIRME EN ESTA OFERTA',
    },
    infoCardOffer: {
        buttonsAction: {
            description: 'DESCRIPCIÓN',
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
    },
    videoOffer: {
        listCourseTitle: 'Cursos relacionados',
        notFoundList: 'No se encuentra cursos disponibles',
    }
}


export const i18nConfig = {
   es,
}

