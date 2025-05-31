import { IBaseParameters } from '../../../../core';

export interface IChangePasswordParameters extends Partial<IBaseParameters> {}

/**
 * This is the change password model.
 */
export interface IChangePasswordBody {
    /**
     * The old password of the user.
     * @remarks min: 1
     * @example
     * OldPassword
     */
    oldPassword: string;

    /**
     * The new password of the user.
     * @remarks min: 1
     * @example
     * NewPassword
     */
    newPassword: string;

    /**
     * The confirm password of the user.
     * @remarks min: 1
     * @example
     * NewPassword
     */
    confirmPassword: string;
}

export interface IChangePasswordOptions extends IChangePasswordParameters {
    body: IChangePasswordBody;
}