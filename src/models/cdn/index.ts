import {
    deleteFileCDN,
    getFileCDN,
    getFilesCDN,
    uploadFile,
    uploadFileCDN,
} from './api';

export * from './constants';
export * from './types';

export const cdn = {
    deleteFileCDN,
    getFileCDN,
    getFilesCDN,
    uploadFileCDN,

    /**
     * @deprecated use uploadFileCDN instead
     */
    uploadFile,
};
