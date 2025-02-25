import { get } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IListResponse, IdType } from '../base';
import { STATE_PATH } from './paths';
import { IQueryStateParams, IState } from './types';

/**
 * #JFW-76: Thiếu tài liệu api/states
 */
export const queryStateAPI = async (
    params?: IQueryStateParams,
): Promise<IListResponse<IState>> => {
    const url = STATE_PATH.QUERY;
    const response = await get(url, {
        params,
    });
    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * #JFW-76: Thiếu tài liệu api/states
 */
export const getStateByIdAPI = async (stateId: IdType): Promise<IState> => {
    const url = generatePath(STATE_PATH.GET_BY_ID, {
        id: stateId,
    });
    const response = await get(url);

    return response.data;
};
