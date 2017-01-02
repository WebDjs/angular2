import { Pipe, PipeTransform } from '@angular/core';
// import { Model } from './';

@Pipe({
    name: 'collectionPaging'
})

export class PagingPipe implements PipeTransform {
    transform(value: any[], page: number, pageSize: number): any[] {
        if (!value) {
            return [];
        }

        let begin = (page - 1) * pageSize,
            end = begin + pageSize;

        return value.slice(begin, end);
    }
}
