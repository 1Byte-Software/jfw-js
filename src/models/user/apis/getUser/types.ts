import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IGetUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface IGetUserParameters extends Partial<IBaseParameters> {
    pathParameters: IGetUserPathParameters;
}

export interface IGetUserOptions extends IGetUserParameters {}
