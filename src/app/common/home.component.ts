import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('focusPanel', [
            state('moveOne', style({
                marginLeft: '0px'
            })),
            state('moveTwo', style({
                marginLeft: '-720px'
            })),
            state('moveThree', style({
                marginLeft: '-1440px'
            })),
            state('reset', style({
                marginLeft: '0px'
            })),
            transition('moveOne => moveTwo', animate('1000ms ease-in')),
            transition('moveTwo => moveThree', animate('1000ms ease-in')),
            transition('moveThree => reset', animate('1000ms ease-in')),
            transition('reset => MoveOne', animate('1000ms ease-in')),
        ])
    ]
})
export class HomeComponent implements OnInit {
    constructor() { }

    state: string = 'moveOne';

    ngOnInit() {
            setInterval(() => { this.changeSlide(); }, 3000);       
    }

    changeSlide() {
        console.log(this.state);
        if (this.state === 'moveThree') {
            this.state = 'reset';
        } 

        if (this.state === 'moveTwo') {          
            this.state = 'moveThree';
        } 

        if (this.state === 'moveOne') {
            this.state = 'moveTwo';
        } 

        if (this.state === 'reset') {
            this.state = 'moveOne';
        } 
    }
}
