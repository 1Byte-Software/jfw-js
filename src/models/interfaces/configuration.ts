import { IdType } from "../types";

export interface IConfiguration {
    id: IdType;
    value: string;
    name: string;
    code: string;
    groupCode: string;
    description: string;
    _id: string;
}
export interface IGetConfigurationParams {
    code: string;
}
export interface IConfigurationPayload {
    groupCode: string;
    code: string;
    name: string;
    description: string;
    value: string;
}
export interface IUpdateUserConfigurationPath {
    configurationId: string;
}
