import { AxiosError } from 'axios';
import { HttpResponse } from '../query';
import { JFWLogLevel } from './constants';

export type JFWError = {
    /**
     * @remarks int32
     */
    code?: number;

    /**
     * @remarks int32
     */
    subcode?: number;

    /**
     * @remarks int32
     */
    errorCode?: number;

    /**
     * @remarks int32
     * @readonly
     */
    details?: string | null;

    /**
     * @remarks enum
     */
    logLevel?: JFWLogLevel | null;
};

export type THttpError = Error | AxiosError<HttpResponse>;
