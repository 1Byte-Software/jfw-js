import { axiosInstanceJfw } from '@/config/axios/axiosClient';
import { ILanguage } from '@/models/interfaces';

const REST = 'languages';

export const getListLanguagesAPI = async (): Promise<ILanguage[]> => {
    const url = `${REST}`;
    const response = await axiosInstanceJfw.get(url);
    return response.data;
};
