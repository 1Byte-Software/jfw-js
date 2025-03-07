import { get } from '../../utils/axiosHelper222';
import { WALLET_EARNING_EVENT_PATH } from './paths';
import { IQueryWalletEarningEventParams, IWalletEarningEvent } from './types';

/**
 * Get events
 */
export const queryWalletEarningEventAPI = async (
    params?: IQueryWalletEarningEventParams,
): Promise<IWalletEarningEvent[]> => {
    const url = WALLET_EARNING_EVENT_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    return response.data;
};
