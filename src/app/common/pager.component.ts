import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html'
})
export class PagerComponent {
    @Input() numberOfPages: number;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

    onPagerClick(event: number) {
        this.pageChanged.emit(event);
    }

    createRange(number: number) {
        let items: number[] = [];
        for (let i = 1; i <= number; i++) {
            items.push(i);
        }

        return items;
    }
}
