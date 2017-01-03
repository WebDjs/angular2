import { Component, Input, Output } from '@angular/core';
import { Location } from '../common/models/';

@Component({
    selector: '[location-short]',
    templateUrl: './location-short.component.html',
    styleUrls: ['./location-short.component.css']
})
export class LocationShortComponent {
    @Input() location: Location;

    constructor() { }
}
