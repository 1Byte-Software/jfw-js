import { HttpResponse } from '../../../core';
import { AbstractAPI } from '../../base/AbstractAPI';
import { ANALYTIC_DEVICE_PATH } from './path';
import { SummaryDevicesResponse } from './types';

export class AnalyticDevicesAPI extends AbstractAPI {
    /**
     * # Retrieves a summary of devices.
     *
     * Provides a high-level overview of devices for the current brand, including total devices and aggregated statistics.
     *
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/analytics/devices}
     */
    public async getSummaryDevices() {
        return this.callAPI<HttpResponse<SummaryDevicesResponse>>({
            method: 'GET',
            path: ANALYTIC_DEVICE_PATH.GET_SUMMARY_DEVICES,
        });
    }
}
