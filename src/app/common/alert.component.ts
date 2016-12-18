import { Component, OnInit } from '@angular/core';

import { AlertService } from './services/index';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
    message: string;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

    closeAlert(element: HTMLElement) {
        element.classList.remove('in');
        setTimeout(() => this.message = null, 150);
    }
}
