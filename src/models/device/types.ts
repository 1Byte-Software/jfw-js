import { IdType } from '../asdas';
import { IBaseObject, IBaseQuery } from '../base';
import { IUser } from '../interfaces';

export interface IDevice extends IBaseObject {
    userId: IdType;
    user?: IUser;

    type?: number | null;
    code?: string;
    token?: string | null;
    session?: string;
    isMobileApp?: boolean | null;
    tags?: string | null;
    status?: number | null;
    isDefault?: boolean | null;
    testMode?: boolean | null;
    name?: string | null;
    phoneNumber?: string | null;
    osDevice?: string | null;
    appVersionNumber?: string | null;
    iccid?: string | null;
    imsi?: string | null;
    imei?: string | null;
    simCardInfo?: string | null;
}

//#region API types
export interface ICheckUserAccessParams {
    userId: IdType;
    deviceCode: string;
}

export interface IQueryDeviceParams extends IBaseQuery {
    id?: IdType;

    userId?: IdType;

    deviceToken?: string;
    deviceSession?: string;
    type?: number;
    code?: string;
    token?: string;
    session?: string;
    isMobile?: boolean;
    tags?: string;
    status?: number;
    isDefault?: boolean;
    testMode?: boolean;
    phoneNumber?: string;
    osDevice?: string;
    appVersionNumber?: string;
    iccid?: string;
    imsi?: string;
    imei?: string;
    simCardInfo?: string;
    countryCode?: string;
    languageCode?: string;
    timeZoneId?: string;
    isPagination?: boolean;
}
//#endregion
