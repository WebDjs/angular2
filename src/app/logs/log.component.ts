import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UsersService } from 'app/common/services';
import 'rxjs/add/operator/map';
import { Log } from 'app/common/models';

@Component({
    templateUrl: 'app/logs/log.template.html'
})
export class LogComponent implements OnInit {
    public logs: Log[];

    constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        //TODO: may be request from data base?
        this.logs = this.usersService.loggedUser().logs;
    }
}