import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IGetRolesAssignedToUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface IGetRolesAssignedToUserParameters
    extends Partial<IBaseParameters> {
    pathParameters: IGetRolesAssignedToUserPathParameters;
}

export interface IGetRolesAssignedToUserOptions
    extends IGetRolesAssignedToUserParameters {}
