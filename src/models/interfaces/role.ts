import { IdType } from "../types";

export interface IRole {
    id: IdType;
    permissions: string[];
    name: string;
    description: string;
    isSystem: boolean;
    code: string;
}

export interface IPermission {
    id: IdType;
    name: string;
    description: string;
    isSystem: boolean;
}
