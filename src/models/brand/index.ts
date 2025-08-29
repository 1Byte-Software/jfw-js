import {
    checkDomainIfExists,
    createBrand,
    generateNewDomain,
    getBrand,
    getBrandByURL,
    getBrands,
    updateBrand,
} from './api';
import {
    createEmailAddress,
    deleteEmailAddress,
    getEmailAddress,
    getEmailAddresses,
    updateEmailAddress,
} from './emailAddress';
import { updateBrandProfile } from './profile';
import { updateBrandSetting } from './setting';

export * from './emailAddress';
export * from './profile';
export * from './setting';

export * from './api';
export * from './constants';
export * from './paths';
export * from './types';

export const brand = {
    checkDomainIfExists,
    createBrand,
    generateNewDomain,
    getBrand,
    getBrandByURL,
    getBrands,
    updateBrand,
    updateBrandProfile,
    updateBrandSetting,

    emailAddress: {
        createEmailAddress,
        deleteEmailAddress,
        getEmailAddress,
        getEmailAddresses,
        updateEmailAddress,
    },
};
