import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface ILockUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface ILockUserParameters extends Partial<IBaseParameters> {
    pathParameters: ILockUserPathParameters;
}

export interface ILockUserOptions extends ILockUserParameters {}
