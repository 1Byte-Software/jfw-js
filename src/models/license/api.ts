import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { ICountSuccessResponse, IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { LICENSE_PATH } from './paths';
import {
    IApplyLicenseToGivenLoginNameParams,
    IApplyLicenseToGivenUserParams,
    ICreateLicensesParams,
    IGenerateLicenseCodeParams,
    IGetLicensesParams,
    ILicense,
    ILicenseStatisticsReportSummary,
    IPurchaseToAddLicensesByCheckoutLinkParams,
    IPurchaseToAddLicensesByWalletParams,
    IStatisticLicensesMonthlyParams,
    IUpdateLicenseParams,
} from './types';

export class LicenseAPI extends AbstractAPI {
    /**
     * # Activate a license
     *
     * Activate a license
     *
     * This method sets the license's status to Active based on its current state:
     *  - NotStarted: Sets the StartDate to a valid date in the past.
     *  - Expired: Sets the EndDate to a valid date in the future.
     *  - Inactive: Sets both StartDate and EndDate if necessary.
     *
     * If the license has already been Used, the method does nothing.
     *
     * @param id - The id of the license.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/activate-a-license}
     */
    public async activateLicense(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(LICENSE_PATH.ACTIVATE_LICENSE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<ILicense>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Applies a license to the logged user
     *
     * Applies a license to the logged user.
     *
     * After applying the license, the user will be able to use the features of the license.
     * And send the email to the user to notify the license is applied.
     *
     * @param licenseCode - The license code to apply.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-logged-user}
     */
    public async applyLicenseToLoggedUser(
        licenseCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.APPLY_LICENSE_TO_LOGGED_USER;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            {
                params: {
                    licenseCode,
                },
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Applies a license to the given login name
     *
     * Applies a license code for the given login name.
     *
     * After applying the license, the user will be able to use the features of the license.
     * And send the email to the user to notify the license is applied.
     *
     * @param params - The params for applying a license to the given login name.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-login-name}
     */
    public async applyLicenseToGivenLoginName(
        params: IApplyLicenseToGivenLoginNameParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.APPLY_LICENSE_TO_GIVEN_LOGIN_NAME;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Applies a license to the given a user
     *
     * Applies a license code for the given user id.
     *
     * After applying the license, the user will be able to use the features of the license.
     * And send the email to the user to notify the license is applied.
     *
     * @param params - The params for applying a license to the given a user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-a-user}
     */
    public async applyLicenseToGivenUser(
        params: IApplyLicenseToGivenUserParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.APPLY_LICENSE_TO_GIVEN_USER;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Checks a license code
     *
     * Checks the license status for the given license code.
     *
     * @param licenseCode - The license code to check.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/checks-a-license}
     */
    public async checkLicenseCode(
        licenseCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.CHECK_A_LICENSE_CODE;
        const response = await this.axios.get<HttpResponse<boolean>>(url, {
            ...config,
            params: {
                licenseCode,
            },
        });

        return response.data;
    }

    /**
     * # Create the licenses
     *
     * Create a new license.
     *
     * @param params - The params for creating the licenses.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/create-the-licenses}
     */
    public async createLicenses(
        params: ICreateLicensesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.CREATE_LICENSES;
        const response = await this.axios.post<
            HttpResponse<ICountSuccessResponse>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Count licenses created
     *
     * Counts the number of licenses created by each user.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/count-licenses-created}
     */
    public async countLicensesCreated(config?: AxiosRequestConfig) {
        const url = LICENSE_PATH.COUNT_LICENSES_CREATED;
        const response = await this.axios.get<
            HttpResponse<ICountSuccessResponse>
        >(url, config);

        return response.data;
    }

    /**
     * # Deactivate a license
     *
     * Deactivate a license
     *
     * @param id - The id of the license.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/deactivate-a-license}
     */
    public async deactivateLicense(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(LICENSE_PATH.DEACTIVATE_LICENSE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<ILicense>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a license
     *
     * Deletes a license.
     *
     * @param id - The id of the license.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/delete-a-license}
     */
    public async deleteLicense(id: IdType) {
        const url = generatePath(LICENSE_PATH.DELETE_LICENSE, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(url);

        return response.data;
    }

    /**
     * # Get licenses
     *
     * Gets the list of the licenses.
     *
     * @param params - The params for getting the licenses.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/get-licenses}
     */
    public async getLicenses(
        params?: IGetLicensesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.GET_LICENSES;
        const response = await this.axios.get<HttpResponseList<ILicense>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get a license
     *
     * Get a license.
     *
     * @param id - The id of the license.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/get-a-license}
     */
    public async getLicense(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(LICENSE_PATH.GET_LICENSE, {
            id,
        });
        const response = await this.axios.get<HttpResponse<ILicense>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Generate license code
     *
     * Generate the license code
     *
     * The license code is not stored in the system. It is generated by the system.
     *
     * @param params - The params for generating license code.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/generate-code}
     */
    public async generateLicenseCode(
        params: IGenerateLicenseCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.GENERATE_LICENSE_CODE;
        const response = await this.axios.get<HttpResponse<string>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Purchase to add licenses by checkout link
     *
     * Generate the checkout link to purchase the license.
     *
     * @param params - The params for purchasing to add licenses by checkout link.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-checkout-link}
     */
    public async purchaseToAddLicensesByCheckoutLink(
        params: IPurchaseToAddLicensesByCheckoutLinkParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.PURCHASE_TO_ADD_LICENSES_BY_CHECKOUT_LINK;
        const response = await this.axios.post<HttpResponse<string>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Purchase to add licenses by wallet
     *
     * Purchase to add license by the user's wallet.
     *
     * @param params - The params for purchasing to add licenses by wallet.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-user-wallet}
     */
    public async purchaseToAddLicensesByWallet(
        params: IPurchaseToAddLicensesByWalletParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.PURCHASE_TO_ADD_LICENSES_BY_WALLET;
        const { walletId, ...restParams } = params;
        const response = await this.axios.post<HttpResponse<string>>(
            url,
            restParams,
            {
                params: {
                    walletId,
                },
                ...config,
            },
        );
        return response.data;
    }

    /**
     * # Retrieves monthly license usage statistics for reporting and analysis by the user authorized.
     *
     * This endpoint returns a breakdown of license data grouped by date, including
     * totals for licenses created, active, expired, used, unused, and financial details such as
     * total amount, refund, and postpaid billing.
     *
     * Filters can be applied to narrow the result set by package, subscription type,
     * license type (e.g., Prepaid/Postpaid), and license status (e.g., Active, Inactive).
     *
     * @param params - The params for get statistics licenses monthly.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/statistics-licenses-monthly}
     */
    public async statisticsLicensesMonthly(
        params?: IStatisticLicensesMonthlyParams,
        config?: AxiosRequestConfig,
    ) {
        const url = LICENSE_PATH.STATISTICS_MONTHLY_LICENSES;
        const response = await this.axios.get<
            HttpResponse<ILicenseStatisticsReportSummary>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Updates a license
     *
     * Updates a license.
     *
     * @param params - The params for update a license.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/update-a-license}
     */
    public async updateLicense(
        params: IUpdateLicenseParams,
        config?: AxiosRequestConfig,
    ) {
        const { id, ...bodyParams } = params;
        const url = generatePath(LICENSE_PATH.UPDATE_LICENSE, {
            id,
        });

        const response = await this.axios.put<HttpResponse<ILicense>>(
            url,
            bodyParams,
            config,
        );

        return response.data;
    }
}
