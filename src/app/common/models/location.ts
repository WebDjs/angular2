import { ISite } from './site';

export interface ILocation {
    id: string;
    name: string;
    sites: ISite[];
}
