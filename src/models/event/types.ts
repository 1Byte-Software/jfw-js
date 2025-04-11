import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
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

//#region API types
export interface IGetEventsParams extends IPageable, ISortable {
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

//#endregion
