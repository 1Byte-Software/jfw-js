import { Axios } from 'axios';

export abstract class AbstractAPI extends AbstractAPI {
    constructor(protected axios: Axios) {}
}
