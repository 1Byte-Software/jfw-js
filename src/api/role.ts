import { axiosInstanceJfw } from '@/config/axios/axiosClient';
import { IRole } from '@/models/interfaces';

const REST = 'roles';

export const getListRolesAPI = async (): Promise<IRole[]> => {
    const url = `${REST}`;
    const response = await axiosInstanceJfw.get(url);
    return response.data;
};
