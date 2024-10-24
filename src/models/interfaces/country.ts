import { DateType, IdType } from '../types';
import { ICommonFilterParams, IFilterDate, IPaginationParams } from './filter';

export interface ICountry {
  id: IdType;
  name: string;
  iso3: string;
  phoneCode: string;
  region: string;
  subregion: string;
  tld: string;
  native: string;
  capital: string;
  numericCode: string;
  iso3166: string;
  currency: string;
  createdDate: DateType;
}
export interface IState {
  id: IdType;
  code: string;
  name: string;
  countryCode: string;
  stateType: string;
  createdDate: DateType;
}
export interface ICity {
  id: IdType;
  name: string;
  countryCode: string;
  stateCode: string;
  createdDate: DateType;
}
export interface IGetListCountriesParams
  extends IPaginationParams,
    IFilterDate,
    ICommonFilterParams {
  name?: string;
  countryCode?: string;
  stateCode?: string;
}
