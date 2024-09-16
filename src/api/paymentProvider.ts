import { axiosInstanceJfw } from '@/config/axios/axiosClient';
import { IPaymentProvider } from '@/models/interfaces';

const REST = 'payment-providers';

export const getListPaymentProvidersAPI = async (): Promise<IPaymentProvider[]> => {
    const url = `${REST}`;
    const response = await axiosInstanceJfw.get(url);

    return response.data.items;
};
