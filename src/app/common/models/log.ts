export interface Log {
    id?: string;
    location: string;
    depth: number;
    site: string;
    time: number;
    sightings: string[];
    divedBy?: string;
}
