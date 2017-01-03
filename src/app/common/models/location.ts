import { Site } from './site';
import { Log } from './log';

export interface Location {
    _id?: string;
    name: string;
    latitude: number;
    longitude: number;
    imageUrls?: Array<string>;
    sites: Array<Site>;
    logs: Array<Log>;
}
