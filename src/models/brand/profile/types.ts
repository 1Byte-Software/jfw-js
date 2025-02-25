import { IBaseObject } from '../../base';

export interface IBrandProfile extends IBaseObject {
    description?: string | null;
    faviconUrl?: string | null;
    logoUrl?: string | null;
    name?: string | null;
    slogan?: string | null;
    websiteUrl?: string | null;
    primaryColor?: string | null;
    primaryColorHover?: string | null;
    secondaryColor?: string | null;
    tertiaryColor?: string | null;
}

//#region API types
//#endregion
