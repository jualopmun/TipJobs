import { DescriptionOffer } from "./descriptionOfferModel";

export interface TipJob {
    descriptionOffer: DescriptionOffer;
    videoCourses?: VideoCourses;
    tipChatGPTDescription?: string;
}


export interface VideoCourses {
    items: VideoDescription[];
}


export interface VideoDescription {
    id: string
    skill: string;
    title: string;
    bestThumbnail: BestThumbnail;
    url: string;
    type: string;
  }

  export interface BestThumbnail {
    url: string
  }