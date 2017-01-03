import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from 'app/common/services/data.service';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'app/locations/locations.template.html',
    styleUrls: ['./locations.component.css']
})
export class LocationComponent implements OnInit {
    locations: any[];
    errorMessage: string;
    private filterText: string;
    private sortingProp: string;
    private sortingDirection: string;

    constructor(private _diveLogsService: DataService) {
    }

    
    ngOnInit(): void {
        this.sortingProp = 'name';
        this.sortingDirection = 'asc';
        this._diveLogsService.getAllLocations()
            .subscribe(responce => this.locations = responce.data,
            error => this.errorMessage = <any>error);
    }

    onInput(e: any) {
        this.filterText = e.target.value;
    }
}