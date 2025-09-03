import { IBaseObject } from '../base';
import { ConfigurationStatus } from './constants';

/**
 * This class represents the configuration DTO.
 */
export interface IConfiguration extends IBaseObject {
    /**
     * The group code of the configuration.
     *
     * @remarks min: 1
     */
    groupCode: string;

    /**
     * The code of the configuration.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the configuration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The value of the configuration.
     *
     * @remarks min: 1
     */
    value: string;

    /**
     * The description of the configuration.
     */
    description?: string | null;

    /**
     * The status of the configuration.
     *
     * @remarks enum
     */
    status: ConfigurationStatus;

    /**
     * Is system configuration.
     */
    isSystem: boolean;
}

//#region API types
export interface IGetConfigurationsParams {
    /**
     * Filter by group code
     */
    groupCode?: string;

    /**
     * Filter by code
     */
    code?: string;

    /**
     * Filter by name
     */
    name?: string;

    /**
     * Filter by description
     */
    description?: string;

    /**
     * Filter by value
     */
    value?: string;

    /**
     * Filter by status
     *
     * @remarks enum
     */
    status?: ConfigurationStatus;
}
/**
 * This class represents the configuration data transfer object which is used to create or update a configuration.
 */
export interface ICreateConfigurationParams {
    /**
     * The group code of the configuration.
     *
     * @remarks min: 1
     */
    groupCode: string;

    /**
     * The code of the configuration.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the configuration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the configuration.
     */
    description?: string | null;

    /**
     * The value of the configuration.
     *
     * @remarks min: 1
     */
    value: string;

    /**
     * The status of the configuration.
     *
     * @remarks enum
     */
    status?: ConfigurationStatus;
}

/**
 * This class represents the configuration data transfer object which is used to create or update a configuration.
 */
export type IUpdateConfigurationParams = ICreateConfigurationParams;

//#endregion
