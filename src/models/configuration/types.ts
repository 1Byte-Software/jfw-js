import { DateType, IdType } from '../base';
import { ConfigurationStatus } from './constants';

/**
 * #JFW-307
 */
export interface IConfiguration {
    id: IdType;
    name: string;
    groupCode: string;
    code: string;
    value: string | null;
    description: string | null;
    userId: IdType;
    createdDate: DateType;
}

//#region API types

/**
 * #JFW-291
 */
export interface IGetConfigurationsParams {
    groupCode?: string;
    code?: string;
    name?: string;
    description?: string;
    value?: string;
    status?: ConfigurationStatus;
}

/**
 * Configuration data transfer object used for creating or updating configurations
 */
export interface ICreateConfigurationData {
    /**
     * The group code of the configuration
     */
    groupCode?: string | null;

    /**
     * The code of the configuration
     * @min 1
     */
    code: string;

    /**
     * The name of the configuration
     * @min 1
     */
    name: string;

    /**
     * The value of the configuration
     */
    value: string;

    /**
     * The description of the configuration
     */
    description?: string | null;

    /**
     * The status of the configuration (0: Inactive, 1: Active)
     */
    status?: ConfigurationStatus;
}

export type IUpdateConfigurationData = ICreateConfigurationData;

//#endregion
