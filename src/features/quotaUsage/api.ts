import { HttpResponse } from '../../core';
import { AbstractAPI } from '../base/AbstractAPI';
import { QUOTA_USAGE_PATH } from './paths';
import { QuotaUsage } from './types';

export class QuotaUsageAPI extends AbstractAPI {
    /**
     * # Create a Domain
     *
     * Creates a new domain.
     *
     * @param params - The params for creating a domain.
     * @see {@link }
     *
     * #WAIT_TSDOC
     */
    public async getCurrentQuotaUsageStatus() {
        return this.callAPI<HttpResponse<QuotaUsage[]>>({
            method: 'GET',
            path: QUOTA_USAGE_PATH.GET_CURRENT_QUOTA_USAGE_STATUS,
        });
    }
}
