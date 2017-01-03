import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UsersService } from 'app/common/services';
import 'rxjs/add/operator/map';
import { Log } from 'app/common/models';

@Component({
    templateUrl: 'app/logs/log.template.html'
})
export class LogComponent implements OnInit {
    logs: Log[];
    errorMessage: string;

    constructor(private _diveLogsService: UsersService) {
    }

    ngOnInit(): void {
        this.logs = this._diveLogsService.loggedUser().logs;
    }
}