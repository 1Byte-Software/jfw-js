import { IBaseObject } from '../../base';

export interface IBrandProfile extends IBaseObject {
    faviconUrl?: string | null;
    logoUrl?: string | null;
    slogan?: string | null;
    primaryColor?: string | null;
    primaryColorHover?: string | null;
    secondaryColor?: string | null;
    tertiaryColor?: string | null;
}

//#region API types
//#endregion
