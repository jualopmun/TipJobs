import { Province } from ".";

  export interface Offer {
    id: string
    title: string
    province: Province;
    city: string
    link: string
    category: Category;
    contractType: ContractType;
    subcategory: Subcategory;
    salaryMin: SalaryMin;
    salaryMax: SalaryMax;
    salaryPeriod: SalaryPeriod;
    experienceMin: ExperienceMin;
    workDay: WorkDay;
    study: Study;
    teleworking?: Teleworking;
    published: string;
    updated: string;
    author: Author;
    requirementMin: string;
    bold: boolean;
    applications: string;
    subSegment: number;
    executive: boolean;
    salaryDescription: string;
    multiProvince: boolean;
    urgent: boolean;
    color: boolean;
}
  
  interface Category {
    id: number;
    value: string;
  }
  
  interface ContractType {
    id: number;
    value: string;
  }
  
  interface Subcategory {
    id: number;
    value: string;
  }
  
  interface SalaryMin {
    id: number;
    value: string;
  }
  
  interface SalaryMax {
    id: number;
    value: string;
  }
  
  interface SalaryPeriod {
    id: number;
    value: string;
  }
  
  interface ExperienceMin {
    id: number;
    value: string;
  }
  
  interface WorkDay {
    id: number;
    value: string;
  }
  
  interface Study {
    id: number;
    value: string;
  }
  
  interface Teleworking {
    id: number;
    value: string;
  }
  
  interface Author {
    id: string;
    privateId: number;
    name: string;
    uri: string;
    logoUrl?: string;
    corporateResponsive: boolean;
    showCorporativeHeader: boolean;
  }
