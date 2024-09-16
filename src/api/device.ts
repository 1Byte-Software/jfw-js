import { axiosInstanceJfw } from '@/config/axios/axiosClient';
import { ICheckConcurrencyParams, IResponse } from '@/models/interfaces';

const REST = 'devices';
const USER_ACCESS = 'check-user-access';

export const checkConcurrencyAPI = async (
    params: ICheckConcurrencyParams
): Promise<IResponse<boolean>> => {
    const url = `v1/${REST}/${USER_ACCESS}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response;
};
