import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dropdownlist',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropDownComponent {
    @Input() collection: any[];
    @Input() collectionType: string;
    @Output() itemSelected = new EventEmitter<string>();
    private selected;

    constructor() { }

    changeSelection(event) {
        this.selected = event;
        this.itemSelected.emit(event);
    }

    toggleDropDown(e) {
        e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    }
}
