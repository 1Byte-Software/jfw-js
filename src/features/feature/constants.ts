import { JFWStatus } from '../base';

export enum FeatureType {
    Function = 'Function',
    Limitation = 'Limitation',
}

/**
 * @deprecated use JFWStatus instead
 */
export enum FeatureStatus {
    Inactive = JFWStatus.Inactive,
    Active = JFWStatus.Active,
}
