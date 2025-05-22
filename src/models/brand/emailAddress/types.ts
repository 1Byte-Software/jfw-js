import { IBaseObject } from '../../base';

/**
 * #JFW-361
 */
export interface IBrandEmailAddress extends IBaseObject {
    supportEmailAddress: string | null;
    supportTitleEmailAddress: string | null;
    systemEmailAddress: string | null;
    systemTitleEmailAddress: string | null;
    loginNotificationEmailAddress: string | null;
    purchaseNotificationEmailAddress: string | null;
    orderNotificationEmailAddress: string | null;
    chargebackNotificationEmailAddress: string | null;
    refundNotificationEmailAddress: string | null;
    loginNotificationTitleEmailAddress: string | null;
    maintenanceTeamEmailAddress: string | null;
    developerTeamEmailAddress: string | null;
}

//#region API types
/**
 * #JFW-361
 */
export interface IUpdateEmailAddressData {
    /**
     * The support email of the Brand.
     *
     * @remarks string - email
     */
    supportEmail?: string | null;

    /**
     * The support title email of the Brand.
     *
     * @remarks string - email
     */
    supportTitleEmail?: string | null;

    /**
     * The system email of the Brand.
     *
     * @remarks string - email
     */
    systemEmail?: string | null;

    /**
     * The system title email of the Brand.
     *
     * @remarks string - email
     */
    systemTitleEmail?: string | null;

    /**
     * The login notification email of the Brand.
     *
     * @remarks string - email
     */
    loginNotificationEmail?: string | null;

    /**
     * The purchase notification email of the Brand.
     *
     * @remarks string - email
     */
    purchaseNotificationEmail?: string | null;

    /**
     * The order notification email of the Brand.
     *
     * @remarks string - email
     */
    orderNotificationEmail?: string | null;

    /**
     * The chargeback notification email of the Brand.
     *
     * @remarks string - email
     */
    chargebackNotificationEmail?: string | null;

    /**
     * The refund notification email of the Brand.
     *
     * @remarks string - email
     */
    refundNotificationEmail?: string | null;

    /**
     * The login notification title email of the Brand.
     *
     * @remarks string - email
     */
    loginNotificationTitleEmail?: string | null;

    /**
     * The maintenance team email of the Brand.
     *
     * @remarks string - email
     */
    maintenanceTeamEmail?: string | null;

    /**
     * The developer team email of the Brand.
     *
     * @remarks string - email
     */
    developerTeamEmail?: string | null;
}

//#endregion
