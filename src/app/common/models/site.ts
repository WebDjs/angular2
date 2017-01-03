export interface Site {
    id?: string;
    latitude?: number;
    longitude?: number;
    name: string;
    sightings?: Array<string>;
}
