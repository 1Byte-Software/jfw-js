import { REST as REST_ANALYTIC } from '../paths';

const REST_DEVICE = 'devices';

export const ANALYTIC_DEVICE_PATH = {
    GET_SUMMARY_DEVICES: `v1/${REST_ANALYTIC}/${REST_DEVICE}/summary`,
    GET_DAILY_DEVICES: `v1/${REST_ANALYTIC}/${REST_DEVICE}/daily`,
};
