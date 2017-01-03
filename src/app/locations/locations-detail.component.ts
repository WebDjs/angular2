import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/common/services/data.service';
import 'rxjs/add/operator/map';
import { Location } from 'app/common/models';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/locations/locations-detail.template.html',
    styleUrls:['./locations-detail.component.css']
})
export class LocationsDetailComponent implements OnInit, OnDestroy {
    public location: Location;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _dataLocationsService: DataService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getLocation(id);
            });
    }

    getLocation(id: string) {
        this._dataLocationsService.getLocationById(id).subscribe(
            response => {
                this.location = response;

                if (!this.location.imageUrls.length) {
                    this.location
                        .imageUrls
                        .push("assets/images/vector-dive-flag-and-diver-icon.jpg");
                }
            },
            error => this.errorMessage = <any>error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}