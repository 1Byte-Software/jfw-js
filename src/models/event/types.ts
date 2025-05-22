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

export interface IWalletEarningEvent {
    id: IdType;
    trackingEventId: IdType;
    code: string;
    name: string;
    amount: number;
    description: string;
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
    /**
     * Filter by GroupCodeName.
     */
    groupCodeName?: string;

    /**
     * Filter by Code.
     */
    code?: string;

    /**
     * Filter by Name.
     */
    name?: string;

    /**
     * Filter by Description.
     */
    description?: string;

    /**
     * Filter by Tags.
     */
    tags?: string;

    /**
     * Filter by ZOrder.
     * @remarks integer - int64
     */
    zOrder?: number;

    /**
     * Filter by Status.
     */
    status?: EventStatus;

    /**
     * Filter by IsSystem.
     */
    isSystem?: boolean;

    /**
     * Filter by IncludeParentBrand.
     */
    includeParentBrand?: boolean;

    /**
     * Filter by Keywords.
     */
    keywords?: string;
}

export interface IGetEventsEarningWalletParams {
    /**
     * The type of the wallet earning event. The value can be Earning or Redeem.
     * @defaultValue Earning
     */
    type?: string;
}

export interface IGetDefaultEmailTemplateParams {
    languageCode?: string;
}
export type IGetDefaultPhoneTemplateParams = IGetDefaultEmailTemplateParams;

//#endregion
