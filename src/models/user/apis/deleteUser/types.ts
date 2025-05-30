import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IDeleteUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface IDeleteUserParameters extends Partial<IBaseParameters> {
    pathParameters: IDeleteUserPathParameters;
}

export interface IDeleteUserOptions extends IDeleteUserParameters {
    
}