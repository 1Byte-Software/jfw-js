import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface ISuspendUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface ISuspendUserParameters extends Partial<IBaseParameters> {
    pathParameters: ISuspendUserPathParameters;
}

export interface ISuspendUserOptions extends ISuspendUserParameters {
    
}
