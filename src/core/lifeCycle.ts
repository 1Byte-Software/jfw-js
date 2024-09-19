import { JfwConfig } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs';

class AppService {
  private static _instance: AppService;
  private _appConfig$ = new BehaviorSubject<JfwConfig | null>(null);

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  getConfig$() {
    return this._appConfig$;
  }

  setConfig(config: JfwConfig) {
    this._appConfig$.next(config);
  }
}

export const _AppService = AppService.Instance;
