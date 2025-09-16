import { REST as REST_ANALYTIC } from '../paths';

const REST_USER = 'users';

export const ANALYTIC_USER_PATH = {
    GET_SUMMARY_USERS: `v1/${REST_ANALYTIC}/${REST_USER}/summary`,
    GET_DAILY_USERS_ANALYTICS: `v1/${REST_ANALYTIC}/${REST_USER}/daily`,
    GET_USER_GEOGRAPHY_ANALYTICS: `v1/${REST_ANALYTIC}/${REST_USER}/geography`,
};
