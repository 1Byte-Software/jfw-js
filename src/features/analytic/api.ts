import { Axios } from 'axios';
import { AbstractAPI } from '../base/AbstractAPI';
import { AnalyticDevicesAPI } from './devices/api';
import { AnalyticIssuesAPI } from './issues/api';
import { AnalyticPaymentsAPI } from './payments/api';
import { AnalyticUsersAPI } from './users/api';

export class AnalyticAPI extends AbstractAPI {
    public devices: AnalyticDevicesAPI;
    public issues: AnalyticIssuesAPI;
    public payments: AnalyticPaymentsAPI;
    public users: AnalyticUsersAPI;

    constructor(axios: Axios) {
        super(axios);

        this.devices = new AnalyticDevicesAPI(axios);
        this.issues = new AnalyticIssuesAPI(axios);
        this.payments = new AnalyticPaymentsAPI(axios);
        this.users = new AnalyticUsersAPI(axios);
    }
}
