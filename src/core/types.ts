export interface JfwConfig {
    mode?: ModeType;
    brandUrl: string;
}

export type ModeType = 'development' | 'production';

export interface IObjectHasKeyAsString<T> {
    [key: string]: T;
}
