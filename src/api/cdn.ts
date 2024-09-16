import { axiosInstanceJfw } from '@/config/axios/axiosClient';

const REST = 'cdn';
const UPLOAD = 'upload-file';

export const cdnUploadFileAPI = async (payload: FormData) => {
    const url = `${REST}/${UPLOAD}`;
    const response = await axiosInstanceJfw.post(url, payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
