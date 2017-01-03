import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[my-styleplus]'
})

export class MyStylePlusDirective {
    constructor(el: ElementRef) {
      el.nativeElement.style.borderRadius = '15px';
      el.nativeElement.style.border = '3px solid #3f51b5';
      el.nativeElement.style.margin = '10px';
      el.nativeElement.style.padding = '10px';
      el.nativeElement.style.width = '95%';
    }
}