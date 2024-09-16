import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import { AUTH_KEY } from "@/models/constants";
import { IMutateLicenseParams } from "@/models/interfaces";
import { BRAND_URL } from "@/utils/common";
import { Cookies } from "react-cookie";

const REST = "licenses";
const CHECK = "check";
const APPLY = "apply";

export const checkValidLicenseAPI = async (params: IMutateLicenseParams) => {
    const url = `${REST}/${CHECK}`;

    return await axiosInstanceJfw.get(url, {
        params,
    });
};

export const applyLicenseAPI = async (params: IMutateLicenseParams) => {
    const cookies = new Cookies();
    const authKey = cookies.get(AUTH_KEY);
    const { licenseKey } = params;
    const url = `${REST}/${APPLY}`;

    return await axiosInstanceJfw.post(url, null, {
        params: {
            brandUrl: BRAND_URL,
            authKey,
            licenseKey,
        },
    });
};
