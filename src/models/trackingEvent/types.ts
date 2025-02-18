import { DateType, IdType } from '../asdas';

export interface ITrackingEvent {
    id: IdType;

    groupCode: string;
    code: string;

    name: string;
    trackingLevel: number;
    description: string;
    isSystem: boolean;
    createdDate: DateType;
}

//#region API types
export interface IQueryTrackingEventParams {
    id?: IdType;
    name?: string;
    brandId?: IdType;
}

//#endregion
