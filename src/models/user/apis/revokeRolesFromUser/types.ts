import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IRevokeRolesFromUserPathParameters {
    /**
     * The id of the user to revoke the roles from.
     */
    id: IdType;
}

export interface IRevokeRolesFromUserQueryParameters {
    /**
     * The role ids to revoke.
     */
    roleIds: IdType[];
}

export interface IRevokeRolesFromUserParameters
    extends Partial<IBaseParameters> {
    pathParameters: IRevokeRolesFromUserPathParameters;
    queryParameters: IRevokeRolesFromUserQueryParameters;
}

export interface IRevokeRolesFromUserOptions
    extends IRevokeRolesFromUserParameters {}
