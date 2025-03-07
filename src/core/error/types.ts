import { AxiosError } from 'axios';
import { JFWLogLevel } from './constants';
import { HttpResponse } from '../query';

export type JFWError = {
    code: number;
    subcode: number;
    errorCode: number;
    details: string;
    logLevel: JFWLogLevel;
};

export type THttpError = Error | AxiosError<HttpResponse>;
