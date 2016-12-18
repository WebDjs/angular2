import { Directive, AfterViewChecked } from '@angular/core';
declare let componentHandler: any;

@Directive({
    selector: '[appMdl]'
})
export class MDLUpgradeElementDirective implements AfterViewChecked {
    ngAfterViewChecked() {
        componentHandler.upgradeAllRegistered();
    }
}