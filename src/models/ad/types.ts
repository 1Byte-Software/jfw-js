import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { ICDN } from '../cdnFile';
import { IDomain } from '../domain';
import { AdPosition, AdStatus, AdType } from './constants';

/**
 * Represents a data transfer object (DTO) used to response Ad.
 */
export interface IAd {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: string;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate: DateType;

    type: AdType;

    /**
     * Gets or sets the title of the advertisement.
     *
     * @remarks min: 1
     */
    title: string;

    /**
     * Gets or sets the display position of the advertisement (e.g., homepage-top, sidebar).
     *
     * @remarks min:1
     */
    position: AdPosition;

    /**
     * Gets or sets the target URL that the ad points to when clicked.
     *
     * @remarks uri - min: 1
     */
    targetURL?: string | null;

    /**
     * Gets or sets the description of the advertisement.
     */
    description: string | null;

    /**
     * Gets or sets the tags of the advertisement.
     */
    tags: string | null;

    /**
     * Gets or sets the start date and time when the advertisement becomes active. Format: yyyy-MM-dd HH:mm:ss
     *
     * @remarks date-time
     */
    startDate: DateType;

    /**
     * Gets or sets the end date and time when the advertisement expires. Format: yyyy-MM-dd HH:mm:ss
     */
    endDate: DateType;

    /**
     * The metadata of the advertisement.
     */
    metadata?: string | null;

    /**
     * Gets or sets the list of supported language codes for targeting the advertisement.
     * Uses ISO 639-1 format (e.g., "en", "vi").
     * If null, the advertisement is available for all languages.
     */
    languageCodes?: string[] | null;

    /**
     * Gets or sets the list of supported country codes for targeting the advertisement.
     * Uses ISO 3166-1 alpha-2 format (e.g., "US", "VN").
     * If null, the advertisement is available in all countries.
     */
    countryCodes?: string[] | null;

    status: AdStatus;

    /**
     * Gets or sets the list of image URLs for the advertisement.
     * Allowed formats: JPG, PNG, GIF.
     * Maximum allowed images: 5
     *
     * @remarks max: 5
     */
    images?: ICDN[] | null;

    /**
     * The list of brand domains for the advertisement.
     */
    domains?: IDomain[] | null;
}

//#region API types
export interface IGetAdsParams extends IPageable, ISortable {
    /**
     * The type to filter.
     */
    type?: AdType;

    /**
     * The title to filter.
     */
    title?: string;

    /**
     * The position to filter.
     */
    position?: AdPosition;

    /**
     * The target URL to filter.
     */
    targetURL?: string;

    /**
     * The description to filter.
     */
    description?: string;

    /**
     * The status to filter.
     */
    status?: AdStatus;

    /**
     * The keywords to filter.
     */
    keywords?: string;
}

/**
 * Represents a command request data transfer object (DTO) used to create or update Ads object.
 */
export interface ICreateAdParams {
    type: AdType;

    /**
     * Gets or sets the title of the advertisement.
     *
     * @remarks min: 1
     */
    title: string;

    /**
     * Gets or sets the display position of the advertisement (e.g., homepage-top, sidebar).
     *
     * @remarks min: 1
     */
    position: AdPosition;

    /**
     * Gets or sets the target URL that the ad points to when clicked.
     *
     * @remarks uri - min: 1
     */
    targetURL?: string | null;

    /**
     * Gets or sets the description of the advertisement.
     */
    description?: string | null;

    /**
     * Gets or sets the tags of the advertisement.
     */
    tags?: string | null;

    /**
     * Gets or sets the start date and time when the advertisement becomes active. Format: yyyy-MM-dd HH:mm:ss
     *
     * @remarks date-time
     */
    startDate: DateType;

    /**
     * Gets or sets the end date and time when the advertisement expires. Format: yyyy-MM-dd HH:mm:ss
     *
     * @remarks date-time
     */
    endDate: DateType;

    /**
     * Gets or sets the metadata of the advertisement.
     */
    metadata?: string | null;

    /**
     * Gets or sets the list of supported language codes for targeting the advertisement.
     * Uses ISO 639-1 format (e.g., "en", "vi"). If null, the advertisement is available for all languages.
     */
    languageCodes?: string[] | null;

    /**
     * Gets or sets the list of supported country codes for targeting the advertisement.
     * Uses ISO 3166-1 alpha-2 format (e.g., "US", "VN").
     * If null, the advertisement is available in all countries.
     */
    countryCodes?: string[] | null;

    /**
     *
     */
    status?: AdStatus;

    /**
     * Gets or sets the list of image URLs for the advertisement.
     * Allowed formats: JPG, PNG, GIF. Maximum allowed images: 5.
     */
    imageURLs?: string[] | null;

    /**
     * The list of brand domains for the advertisement.
     */
    brandDomainIds?: IdType[] | null;
}

/**
 * Represents a command request data transfer object (DTO) used to create or update Ads object.
 */
export interface IUpdateAdParams extends ICreateAdParams {
    id: IdType;
}
//#endregion
