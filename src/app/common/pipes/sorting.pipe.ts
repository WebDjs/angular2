import { Pipe, PipeTransform } from '@angular/core';
// import { Model } from '../core/';

@Pipe({
    name: 'collectionSort'
})

export class SortingPipe implements PipeTransform {
    transform(value: any[], property: string, direction: string): any[] {
        if (!value) {
            return [];
        }

        // properties to sort by, replace as necessary, string field and 2 number fields
        switch (property) {
            case 'Title':
                value.sort((a, b) => {
                    return direction === 'asc' ?
                        a.Title.localeCompare(b.Title) :
                        b.Title.localeCompare(a.Title);
                });
                break;
            case 'Rating':
                value.sort((a, b) => {
                    return direction === 'asc' ?
                        +a.imdbRating - +b.imdbRating :
                        +b.imdbRating - +a.imdbRating;
                });
                break;
            case 'Year':
                value.sort((a, b) => {
                    return direction === 'asc' ?
                        +a.Year - +b.Year :
                        +b.Year - +a.Year;
                });
        }

        return value.slice(0);
    }
}
