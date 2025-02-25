import { RawAxiosRequestHeaders } from 'axios';
import { _AppService } from '../app/app';
import { JfwConfig } from '../types';

export class AuthClient {
    constructor(config: JfwConfig) {
        _AppService.setConfig(config);
    }

    setAuthKey(authKey: string) {
        _AppService.setAuthKey(authKey);
    }

    setHeaders(headers: RawAxiosRequestHeaders) {
        _AppService.setUserHeaders(headers);
    }
}
