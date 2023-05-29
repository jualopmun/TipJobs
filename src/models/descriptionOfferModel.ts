  export interface DescriptionOffer {
    title: string
    id: string
    state: number
    creationDate: string
    updateDate: string
    city: string
    externalUrlForm: string
    blocked: boolean
    applications: number
    province: Province
    experienceMin: ExperienceMin
    category: Category
    subcategory: Subcategory
    studiesMin: StudiesMin
    residence: Residence
    country: Country
    teleworking: Teleworking
    contractType: ContractType
    journey: Journey
    subSegment: number
    profile: Profile
    cityPD: number
    zipCode: string
    latitude: number
    longitude: number
    exactLocation: boolean
    department: string
    vacancies: number
    minRequirements: string
    description: string
    desiredRequirements: string
    commissions: string
    contractDuration: string
    referenceId: string
    detailedStudiesId: number
    studying: boolean
    showPay: boolean
    maxPay: MaxPay
    minPay: MinPay
    schedule: string
    languages: Language[]
    jobLevel: JobLevel
    staffInCharge: StaffInCharge
    hasKillerQuestions: number
    hasOpenQuestions: number
    epreselec: boolean
    fiscalAddress: string
    ConsentName: string
    link: string
    active: boolean
    archived: boolean
    deleted: boolean
    disponibleForFullVisualization: boolean
    availableForVisualization: boolean
    multiProvince: boolean
    skillsList: SkillsList[]
    salaryDescription: string
    upsellingsList: UpsellingsList[]
  }
  
    interface Province {
    id: number
    value: string
  }
  
    interface ExperienceMin {
    id: number
    value: string
  }
  
    interface Category {
    id: number
    value: string
  }
  
    interface Subcategory {
    id: number
    value: string
  }
  
    interface StudiesMin {
    id: number
    value: string
  }
  
    interface Residence {
    id: number
    value: string
  }
  
    interface Country {
    id: number
    value: string
  }
  
    interface Teleworking {
    id: number
    value: string
  }
  
    interface ContractType {
    id: number
    value: string
  }
  
    interface Journey {
    id: number
    value: string
  }
  
    interface Profile {
    id: string
    name: string
    description: string
    province: Province
    web: string
    numberWorkers: number
    logoUrl: string
    url: string
    corporateWebsiteUrl: string
    websiteUrl: string
    hidden: boolean
    corporateResponsive: boolean
    showCorporativeHeader: boolean
    clientId: number
    withoutAds: boolean
    followable: boolean
  }
  
  interface MaxPay {
    amount: number
    amountId: number
    periodId: number
    periodValue: string
    amountValue: string
  }
  
  interface MinPay {
    amount: number
    amountId: number
    periodId: number
    periodValue: string
    amountValue: string
  }
  
  interface Language {
    name: string
    level: string
  }
  
  interface JobLevel {
    id: number
    value: string
  }
  
  interface StaffInCharge {
    id: number
    value: string
  }
  
  interface UpsellingsList {
    productId: number
    productName: string
    startDate: string
    endDate: string
  }
  

  interface SkillsList {
    skill: string
  }
  