import { ModeType } from "../types";

export interface JfwHeaders {
    brandUrl: string;
    // authKey?: string;
    // iPAddressRemote: string;
    // urlRequest?: string;
    // browserCodeGenerate: string;
    // deviceToken?: string;
}
export interface JfwConfig {
    mode?: ModeType;
    headers: JfwHeaders;
}
