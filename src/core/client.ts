import { JfwConfig } from '../models';
import { _AppService } from './lifeCycle';

export class AuthClient {
  constructor(config: JfwConfig) {
    _AppService.setConfig(config);
  }
}
