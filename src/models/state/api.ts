import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { STATE_PATH } from './paths';
import { IQueryStateParams, IState } from './types';

/**
 * #JFW-76: Thiếu tài liệu api/states
 */
export const queryStateAPI = async (
    params?: IQueryStateParams,
): Promise<HttpResponseList<IState>> => {
    const url = STATE_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        params,
    });

    return response.data
};

/**
 * #JFW-76: Thiếu tài liệu api/states
 */
export const getStateByIdAPI = async (stateId: IdType): Promise<IState> => {
    const url = generatePath(STATE_PATH.GET_BY_ID, {
        id: stateId,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};
