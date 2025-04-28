import { IBaseObject, IdType } from '../../base';

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
export interface IUpdateEmailAddressData {
    supportEmail?: string | null;
    supportTitleEmail?: string | null;
    systemEmail?: string | null;
    systemTitleEmail?: string | null;
    loginNotificationEmail?: string | null;
    purchaseNotificationEmail?: string | null;
    orderNotificationEmail?: string | null;
    chargebackNotificationEmail?: string | null;
    refundNotificationEmail?: string | null;
    loginNotificationTitleEmail?: string | null;
    maintenanceTeamEmail?: string | null;
    developerTeamEmail?: string | null;
}

//#endregion
