import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IUnlockUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface IUnlockUserParameters extends Partial<IBaseParameters> {
    pathParameters: IUnlockUserPathParameters;
}

export interface IUnlockUserOptions extends IUnlockUserParameters {}
