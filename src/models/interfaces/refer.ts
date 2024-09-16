import { DateType } from "../types";

export interface IReferee {
    emailAddress: string;
    firstName: string;
    lastName: string;
    nickName: string;
    createdDate: DateType;
}
export interface ICheckCodePath {
    code: string;
}
export interface IApplyCodeParams {
    referralCode: string;
}
