export interface JfwConfig {
    mode?: ModeType;
    brandURL: string;
}

export type ModeType = 'development' | 'production';

export interface IObjectHasKeyAsString<T> {
    [key: string]: T;
}
