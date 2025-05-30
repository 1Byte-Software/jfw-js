import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IAssignRolesToUserPathParameters {
    /**
     * The id of the user to assign the roles to.
     */
    id: IdType;
}

export interface IAssignRolesToUserQueryParameters {
    /**
     * The role ids to assign.
     */
    roleIds: IdType[];
}

export interface IAssignRolesToUserParameters extends Partial<IBaseParameters> {
    pathParameters: IAssignRolesToUserPathParameters;
    queryParameters: IAssignRolesToUserQueryParameters;
}

export interface IAssignRolesToUserOptions
    extends IAssignRolesToUserParameters {}
