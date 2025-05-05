import axios from 'axios';
import { JFWError, THttpError } from './types';
import { HttpResponse } from '../query';

export class HttpError extends Error {
    constructor(message?: string) {
        super(message); // 'Error' phá vỡ chuỗi prototype ở đây
        this.name = 'HttpError';
        Object.setPrototypeOf(this, new.target.prototype); // khôi phục chuỗi prototype
    }
}

export const httpErrorHandler = (error: THttpError) => {
    console.debug('error', error);
    if (error === null) throw new Error('Unrecoverable error!! Error is null!');

    if (axios.isAxiosError<HttpResponse<null>>(error)) {
        // ở đây chúng ta có một kiểm tra bảo vệ kiểu, lỗi bên trong if này sẽ được coi là AxiosError
        const response = error?.response;
        const request = error?.request;
        const config = error?.config; // ở đây chúng ta có quyền truy cập vào cấu hình được sử dụng để thực hiện cuộc gọi API (chúng ta có thể thử lại bằng cách sử dụng cấu hình này)

        if (error.code === 'ERR_NETWORK') {
            console.log('connection problems..');
        } else if (error.code === 'ERR_CANCELED') {
            console.log('connection canceled..');
        }

        if (response.data.errors) {
            console.debug('first', response.data);
            const jfwErrors = response.data.errors;

            jfwErrors.map((jfwError) => {
                console.log(jfwError.details);
            });
        }

        if (response) {
            // Yêu cầu đã được thực hiện và máy chủ đã phản hồi với mã trạng thái nằm ngoài phạm vi 2xx, mã trạng thái HTTP được đề cập ở trên
            const statusCode = response?.status;
            if (statusCode === 404) {
                console.log(
                    'The requested resource does not exist or has been deleted',
                );
            } else if (statusCode === 401) {
                console.log('Please login to access this resource');
                // chuyển hướng người dùng đến trang đăng nhập
            }
        } else if (request) {
            // Yêu cầu đã được thực hiện nhưng không nhận được phản hồi, `error.request` là một instance của XMLHttpRequest trong trình duyệt và một instance của http.ClientRequest trong Node.js
        }
    }
    // Đã xảy ra lỗi khi thiết lập yêu cầu và kích hoạt một lỗi
    console.log(error.message);

    throw error;
};
