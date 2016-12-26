export interface IDiveLog {
    id: number;
    location: string;
    depth: number;
    site: string;
    time: number;
    sightings: Array<string>;
}