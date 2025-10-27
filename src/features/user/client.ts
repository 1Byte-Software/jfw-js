import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AUTH_COOKIE_NAME } from '../../constants/cookie';
import { HttpResponse } from '../../core';
import { HeaderKey } from '../../core/client/constants';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';
import { IdType } from '../base';
import { UserAPI } from './api';
import {
    IAuthenticateResponse,
    IAuthenticationByPhoneNumberParams,
    IAuthenticationParams,
    IVerifyOTPCodeParams,
} from './types';

export class UserClient extends UserAPI {
    private _authKey: string | null = null;

    constructor(axios: AxiosInstance) {
        super(axios);

        // Initialize auth header from cookie on instance creation (e.g., after F5)
        const authKey = this.getAuthKeyFromCookie();
        if (authKey) {
            this._authKey = authKey;
            this.axios.defaults.headers.common[HeaderKey.AuthKey] = authKey;
        }
    }

    public get authKey(): string | null {
        return this._authKey;
    }

    public set authKey(authKey: string) {
        console.debug('setter', authKey);
        // Default expiry 1 day if use authKey setter.
        const expires = new Date();
        expires.setDate(expires.getDate() + 1);
        this._authKey = authKey;
        setCookie(AUTH_COOKIE_NAME, authKey, expires);
    }

    private getAuthKeyFromCookie(): string | null {
        return getCookie(AUTH_COOKIE_NAME);
    }

    private saveAuthKeyToCookie(
        authenticateResponse: IAuthenticateResponse,
    ): void {
        const { authKey, expiresIn } = authenticateResponse;
        setCookie(AUTH_COOKIE_NAME, authKey, expiresIn);
    }

    private setAuthHeader(authKey: string): void {
        this.axios.defaults.headers.common[HeaderKey.AuthKey] = authKey;
    }

    private handleAuthResponse(
        response: HttpResponse<IAuthenticateResponse>,
    ): HttpResponse<IAuthenticateResponse> {
        if (response?.data?.authKey) {
            this.saveAuthKeyToCookie(response.data);
            this.setAuthHeader(response.data.authKey);
            this._authKey = response.data.authKey;
        }
        return response;
    }

    /**
     * @inheritdoc
     */
    public async authentication(
        params: IAuthenticationParams,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.authentication(params, config);
        return this.handleAuthResponse(response);
    }

    /**
     * @inheritdoc
     */
    public async authenticationByPhoneNumber(
        params: IAuthenticationByPhoneNumberParams,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.authenticationByPhoneNumber(
            params,
            config,
        );
        return this.handleAuthResponse(response);
    }

    /**
     * @inheritdoc
     */
    public async verifyEmailAddressOTPToAuthentication(
        params: IVerifyOTPCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.verifyEmailAddressOTPToAuthentication(
            params,
            config,
        );
        return this.handleAuthResponse(response);
    }

    /**
     * @inheritdoc
     */
    public async verifyPhoneOTPForAuthentication(
        params: IVerifyOTPCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.verifyPhoneOTPForAuthentication(
            params,
            config,
        );
        return this.handleAuthResponse(response);
    }

    /**
     * @inheritdoc
     */
    public async loginUsingApprovedQRCode(
        qrCodeId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.loginUsingApprovedQRCode(qrCodeId, config);
        return this.handleAuthResponse(response);
    }

    /**
     * @inheritdoc
     */
    public async authWithApprovedQRCode(
        qrCodeId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.authWithApprovedQRCode(qrCodeId, config);
        return this.handleAuthResponse(response);
    }

    /**
     * @inheritdoc
     */
    public async loginUsingApprovedOTPCode(
        otpCode: string,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.loginUsingApprovedOTPCode(otpCode, config);
        return this.handleAuthResponse(response);
    }

    /**
     * @inheritdoc
     */
    public async authWithApprovedOTPCode(
        otpCode: string,
        config?: AxiosRequestConfig,
    ) {
        const response = await super.authWithApprovedOTPCode(otpCode, config);
        return this.handleAuthResponse(response);
    }

    /**
     * This is mock API for fake signOut action
     */
    public async signOut() {
        const FAKE_SIGN_OUT_TIMER = 800;

        return new Promise((resolve) => {
            this._authKey = null;
            deleteCookie(AUTH_COOKIE_NAME);
            setTimeout(() => {
                return resolve(true);
            }, FAKE_SIGN_OUT_TIMER);
        });
    }
}
