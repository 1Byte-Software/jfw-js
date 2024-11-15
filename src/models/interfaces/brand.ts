import { DateType, IdType } from '../types';
import { IFilterDate, IPaginationParams } from './filter';

// Brand Info
export interface IBrandProfile {
  description?: string;
  faviconUrl?: string;
  logoUrl?: string;
  name: string;
  slogan?: string;
  websiteUrl?: string;
  primaryColor?: string;
  tertiaryColor?: string;
  primaryColorHover?: string;
  secondaryColor?: string;
}
export interface IBrandSetting {
  cdnFolder: string;
  cdnUrl: string;
  coinCurrencyCode?: string;
  domainWhiteListUrls?: string;
  googleAnalyticsAccount?: string;
  menuCode?: string;
  productAlias?: string;
  productName?: string;
  productPrefixName?: string;
  productWebsiteUrl?: string;
  websiteAdminTool2Url?: string;
  websiteAdminTool3Url?: string;
  websiteAdminToolUrl?: string;
  websiteCPanelUrl?: string;
  websiteProtocolUrl?: string;
  reCaptchaKey?: string;
}

export interface IGetBrandInfoPath {
  brandUrl: string;
}
export interface IBrandInfo {
  alias: string;
  code: string;
  description: string;
  id: IdType;
  name: string;
  parentId?: string;
  profile: IBrandProfile;
  setting: IBrandSetting;
}
export interface IGetBrandDetailPath {
  brandCode: string;
}

export interface IEditBrandPayload extends IBrandInfo {}
export interface IGetListBrandsParams extends IPaginationParams, IFilterDate {
  brandCode?: string;
}

// Brand Link
export interface IBrandLink {
  createdDate: DateType;
  description: string;
  link: string;
  name: string;
  type: string;
  parentBrandLinkId?: string;
  id: IdType;
  items: IBrandLink[];
  parent?: IBrandLink;
}
export interface IGetListBrandLinksPath {
  id: string;
  type: string;
}
export interface IGetBrandLinksParams extends IPaginationParams, IFilterDate {
  name?: string;
}
export interface IAddBrandLinkPayload {
  name: string;
  link: string;
  parentBrandLinkId?: string;
  description?: string;
  type?: string | null;
}

// Brand Email
export interface IBrandEmail {
  chargebackNotificationEmail?: string;
  developerTeamEmail?: string;
  id: IdType;
  loginNotificationEmail?: string;
  loginNotificationTitleEmail?: string;
  maintenanceTeamEmail?: string;
  orderNotificationEmail?: string;
  purchaseNotificationEmail?: string;
  refundNotificationEmail?: string;
  supportEmail?: string;
  supportTitleEmail?: string;
  systemEmail?: string;
  systemTitleEmail?: string;
}
