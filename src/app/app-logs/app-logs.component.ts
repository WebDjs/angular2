import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from 'app/common/services';
import 'rxjs/add/operator/map';
import { Log } from 'app/common/models';

@Component({
    templateUrl: 'app/app-logs/app-logs.template.html'
})
export class AppLogsComponent implements OnInit {
    logs: Log[];
    errorMessage: string;
    locations: any[];

    constructor(private _diveLogsService: DataService) {
    }

    ngOnInit(): void {

            this.logs =[];
            this._diveLogsService.getAllLocations()
                .subscribe(response => {
                    this.locations = response.data;
                    this.locations = this.locations.filter(l => !!l.name.length);
                     this.locations.forEach(l=> this.logs.push(...l.logs));

                });
    }
}