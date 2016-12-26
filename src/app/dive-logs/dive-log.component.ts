import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DiveLogsService } from 'app/common/services/dive-logs.service';
import 'rxjs/add/operator/map';
import { IDiveLog } from 'app/dive-logs/dive-log';

@Component({
   //selector: 'divelog',
    templateUrl: 'app/dive-logs/dive-log.template.html'
})
export class DiveLogComponent implements OnInit {
    diveLogs: IDiveLog[];
    errorMessage: string;

    constructor(private _diveLogsService: DiveLogsService) {
    }

    ngOnInit(): void {
        this._diveLogsService.getAll()
            .subscribe(diveLogs => this.diveLogs = diveLogs,
            error => this.errorMessage = <any>error);
    }
}