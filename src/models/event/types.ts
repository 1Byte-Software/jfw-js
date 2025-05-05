import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { ILanguage } from '../language';
import { EventStatus } from './constants';

export interface IEvent extends IBaseObject {
    id: IdType;

    guid: string;
    groupCodeName: string;
    code: string;

    name: string;
    description: string;
    trackingLevel: number;
    tags: string;
    zOrder: number;
    status: EventStatus;

    isSystem: boolean;
}

export interface IDefaultEmailTemplate {
    languageCode: ILanguage['code'];
    subject: string;
    body: string;
}

export interface IDefaultPhoneTemplate {
    languageCode: ILanguage['code'];
    content: string;
}

//#region API types
export interface IGetEventsParams extends IPageable, ISortable {
    keywords?: string;
    groupCodeName?: string;
    code?: string;
    name?: string;
    description?: string;
    tags?: string;
    zOrder?: number;
    status?: EventStatus;
    isSystem?: boolean;
    includeParentBrand?: boolean;
}

export interface IGetEventsEarningWallet {
    /**
     * The type of the wallet earning event. The value can be Earning or Redeem. By default, the type is Earning.
     */
    type?: string;
}

export interface IGetEmailTemplateEventsParams {}
export interface IGetPhoneTemplateEventsParams {}

export interface IGetDefaultEmailTemplateParams {
    languageCode?: string;
}
export type IGetDefaultPhoneTemplateParams = IGetDefaultEmailTemplateParams;

//#endregion
