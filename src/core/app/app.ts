import { BehaviorSubject } from 'rxjs';
import { RawAxiosRequestHeaders } from 'axios';
import { JfwConfig } from '../types';

class AppService {
    private static _instance: AppService;
    private _appConfig$ = new BehaviorSubject<JfwConfig>(null);
    private _authKey$ = new BehaviorSubject<string>('');
    private _userHeaders$ = new BehaviorSubject<RawAxiosRequestHeaders>(null);

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    getConfig$() {
        return this._appConfig$;
    }

    setConfig(config: JfwConfig) {
        this._appConfig$.next(config);
    }

    getAuthKey$() {
        return this._authKey$;
    }

    setAuthKey(authKey: string) {
        this._authKey$.next(authKey);
    }

    getUserHeaders$(): BehaviorSubject<RawAxiosRequestHeaders | null> {
        return this._userHeaders$;
    }

    setUserHeaders(headers: RawAxiosRequestHeaders) {
        this._userHeaders$.next(headers);
    }
}

export const _AppService = AppService.Instance;
