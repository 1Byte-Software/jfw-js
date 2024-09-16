import { IdType } from "../types";

export interface ITimezone {
    id: IdType;
    countryCode: string;
    description: string;
    name: string;
    value: string;
    code: string;
}
