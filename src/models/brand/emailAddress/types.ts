import { IdType } from '../../asdas';
import { IBaseObject } from '../../base';

export interface IBrandEmailAddress extends IBaseObject {
    brandId: IdType;

    chargebackNotificationEmailAddress?: string;
    developerTeamEmailAddress?: string;
    loginNotificationEmailAddress?: string;
    loginNotificationTitleEmailAddress?: string;
    maintenanceTeamEmailAddress?: string;
    orderNotificationEmailAddress?: string;
    purchaseNotificationEmailAddress?: string;
    refundNotificationEmailAddress?: string;
    supportEmailAddress?: string;
    supportTitleEmailAddress?: string;
    systemEmailAddress?: string;
    systemTitleEmailAddress?: string;
}

//#region API types
export type IUpdateEmailAddressParams = Omit<
    IBrandEmailAddress,
    'brandId' | 'id'
>;

//#endregion
