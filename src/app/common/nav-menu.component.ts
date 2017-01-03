import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styles: [
        `.current-route {
            border-bottom: 3px solid deeppink;
            text-transform: uppercase;
            font-weight: bold;
            color: deeppink !important;
        }`
    ]
})
export class NavMenuComponent {
    links = {
        logs: ['/logs'],
        locations: ['/locations']
    };
}
