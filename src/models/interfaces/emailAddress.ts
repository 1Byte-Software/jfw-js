export interface IEmailing {
  emailSupport?: string;
  emailSupportTitle?: string;
  systemEmail?: string;
  systemEmailTitle?: string;
  loginNotificationEmails?: string;
  purchaseNotificationEmails?: string;
  orderNotificationEmails?: string;
  refundNotificationEmails?: string;
  chargebackNotificationEmails?: string;
  developerTeamEmails?: string;
  maintenanceTeamEmails?: string;
  systemAdminNotificationEmails?: string;
  systemAdminEmails?: string;
  bccNotificationEmails?: string;
}

export type IEditEmailsPayload = Omit<IEmailing, 'brandId'>;
