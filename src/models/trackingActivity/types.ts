import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IEvent } from '../event';
import { IBaseUser } from '../user';

/**
 * This class represents the data transfer object for the tracking activity.
 */
export interface ITrackingActivity {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * This class is used to return user information to client.
     */
    user: IBaseUser;

    /**
     * The device id.
     */
    deviceId?: IdType | null;

    /**
     * This class represents the EventDto class.
     */
    event: IEvent;

    /**
     * The url requested.
     *
     * @remarks uri
     */
    url?: string | null;

    /**
     * The ip address of the user.
     *
     * @remarks min: 1
     */
    ipAddress: string;

    /**
     * The operating system of the user.
     */
    os?: string | null;

    /**
     * The browser name.
     */
    browserName?: string | null;

    /**
     * The browser version.
     */
    browserVersion?: string | null;

    /**
     * Flag to indicate if the request is from a mobile device.
     */
    requestFromMobile?: boolean | null;

    /**
     * The user agent.
     *
     * @remarks min: 1
     */
    userAgent: string;

    /**
     * The location of the user.
     */
    location?: string | null;

    /**
     * The latitude of the user request.
     *
     * @remarks double
     */
    latitude?: number | null;

    /**
     * The longitude of the user request.
     *
     * @remarks double
     */
    longitude?: number | null;

    /**
     * The description of the tracking activity.
     */
    description?: string | null;

    /**
     * The tags associated with the tracking activity.
     */
    tags?: string | null;
}

//#region API types
export interface IGetTrackingActivitiesParams extends IPageable, ISortable {
    /**
     * Filter by user id.
     */
    userId?: string;

    /**
     * Filter by device id.
     */
    deviceId?: string;

    /**
     * Filter by tracking event id.
     */
    trackingEventId?: string;

    /**
     * Filter by the URL requested.
     */
    url?: string;

    /**
     * Filter by the ip address.
     */
    ipAddress?: string;

    /**
     * Filter by the os.
     */
    os?: string;

    /**
     * Filter by the browser name.
     */
    browserName?: string;

    /**
     * Filter by the browser version.
     */
    browserVersion?: string;

    /**
     * Filter by the request from mobile.
     */
    requestFromMobile?: boolean;

    /**
     * Filter by the user agent.
     */
    userAgent?: string;

    /**
     * Filter by the location.
     */
    location?: string;

    /**
     * Filter by the latitude.
     *
     * @remarks double
     */
    latitude?: number;

    /**
     * Filter by the longitude.
     *
     * @remarks double
     */
    longitude?: number;

    /**
     * Filter by the description.
     */
    description?: string;

    /**
     * Filter by the tags.
     */
    tags?: string;

    /**
     * Filter by the keywords.
     */
    keywords?: string;
}
//#endregion
