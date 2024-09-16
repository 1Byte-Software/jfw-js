import {
    AUTH_KEY,
    BRAND_URL,
    BROWSER_ID,
    DEVICE_TOKEN,
    IP_ADDRESS,
    MODE,
    MODE_VALUES,
} from "@/models/constants";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import queryString from "query-string";
import { Cookies } from "react-cookie";

const JFW_API_PRODUCTION = "https://protocol.jframework.io/api/";
const JFW_API_DEVELOP = "https://protocol.jframework.dev/api/";

const axiosInstance = (baseURL: string) => {
    const axiosClient = axios.create({
        baseURL,
        headers: {
            "content-type": "application/json",
        },
        paramsSerializer: (params) => queryString.stringify(params),
    });
    axiosClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
        const cookies = new Cookies();
        const authKey = cookies.get(AUTH_KEY);
        const IPAdress = cookies.get(IP_ADDRESS);
        const browserId = JSON.parse(localStorage.getItem(BROWSER_ID) as string);
        const deviceToken = JSON.parse(localStorage.getItem(DEVICE_TOKEN) as string);

        config.headers["BrandUrl"] = BRAND_URL;
        if (authKey) {
            config.headers["AuthKey"] = authKey;
        }
        config.headers["IPAddressRemote"] = IPAdress;
        config.headers["UrlRequest"] = window.location.href;
        config.headers["BrowserCodeGenerate"] = browserId;
        config.headers["DeviceToken"] = deviceToken;

        return config;
    });
    axiosClient.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            // Handle errors
            throw error;
        }
    );

    return axiosClient;
};

const baseURL =
    (localStorage.getItem(MODE) as string) === MODE_VALUES.development
        ? JFW_API_DEVELOP
        : JFW_API_PRODUCTION;
const axiosInstanceJfw = axiosInstance(baseURL || "");

export { axiosInstanceJfw };
