import { RawAxiosRequestHeaders } from 'axios';
import { JfwConfig } from '../models';
import { _AppService } from './app';

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
