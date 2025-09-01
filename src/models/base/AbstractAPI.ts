import { Axios } from 'axios';

export abstract class AbstractAPI {
    constructor(protected axios: Axios) {}
}
