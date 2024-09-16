import { axiosInstanceJfw } from '@/config/axios/axiosClient';
import { ICapturePayPalParams } from '@/models/interfaces/payment';

const REST = 'payments';
const CAPTURE_PAYPAL = 'capture/paypal';

export const capturePaypalAPI = async (params: ICapturePayPalParams) => {
    const url = `${REST}/${CAPTURE_PAYPAL}`;
    const response = await axiosInstanceJfw.post<string>(url, null, {
        params,
    });
    return response.data;
};
