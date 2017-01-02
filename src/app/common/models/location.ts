import { Site } from './site';

export interface Location {
    id?: string;
    name: string;
    latitude: number;
    longitude: number;
    imageUrls?: Array<string>;
    sites: Array<Site>;
}
