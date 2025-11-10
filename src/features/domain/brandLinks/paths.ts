import { REST_DOMAIN } from '../paths';

const REST_BRAND_LINKS = 'links';

export const BRAND_LINK_PATH = {
    CREATE_BRAND_LINK: `v1/${REST_DOMAIN}/{domainId}/${REST_BRAND_LINKS}`,
    DELETE_BRAND_LINK: `v1/${REST_DOMAIN}/{domainId}/${REST_BRAND_LINKS}/{brandLinkId}`,
    GET_BRAND_LINK: `v1/${REST_DOMAIN}/{domainId}/${REST_BRAND_LINKS}/{brandLinkId}`,
    GET_BRAND_LINKS_BY_TYPE: `v1/${REST_DOMAIN}/{domainId}/${REST_BRAND_LINKS}/load-type/{type}`,
    GET_CURRENT_BRAND_LINKS_BY_TYPE: `v1/${REST_DOMAIN}/current/${REST_BRAND_LINKS}/load-type/{type}`,
    GET_BRAND_LINKS: `v1/${REST_DOMAIN}/{domainId}/${REST_BRAND_LINKS}`,
    UPDATE_BRAND_LINK: `v1/${REST_DOMAIN}/{domainId}/${REST_BRAND_LINKS}/{brandLinkId}`,
};
