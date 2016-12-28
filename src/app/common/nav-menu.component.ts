import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
    links = {
        items: ['/items'],
        otherItems: ['/otheritems'],
        logs: ['/logs']
    };
}
