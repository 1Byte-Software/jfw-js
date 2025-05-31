import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IUnsuspendUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface IUnsuspendUserParameters extends Partial<IBaseParameters> {
    pathParameters: IUnsuspendUserPathParameters;
}

export interface IUnsuspendUserOptions extends IUnsuspendUserParameters {
    
}
