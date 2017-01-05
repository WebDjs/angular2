import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from 'app/common/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})
export class LocationComponent implements OnInit {
    locations: any[];
    public filterText: string;
    public sortingProp: string;
    public sortingDirection: string;
    public pageSize: number;
    public currentPage: number;
    public numberOfPages: number;

    constructor(
        private _diveLogsService: DataService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .map(params => params['page'])
            .subscribe((page) => {
                this.currentPage = page;
            });
        this.currentPage = this.route.snapshot.params['page'] || 1;
        this.sortingProp = 'name';
        this.sortingDirection = 'asc';
        this.pageSize = 5;
        this.numberOfPages = 4;
        this._diveLogsService.getAllLocations()
            .subscribe(response => {
            this.locations = response.data;
            this.locations = this.locations.filter(l => !!l.name.length);
            this.numberOfPages = Math.ceil(this.locations.length / this.pageSize);
        });
    }

    onInput(e: any) {
        this.filterText = e.target.value;
        this.numberOfPages = Math.ceil(this.locations.filter(
            l => l.name.toLocaleLowerCase().indexOf(
                this.filterText.toLocaleLowerCase()) > -1).length / this.pageSize);
    }

    onPageChange(page: number) {
        this.currentPage = this.route.snapshot.params['page'];
    }
}
