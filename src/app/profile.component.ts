import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'profile',
    template: `
    <h2>Profile Name is {{profileName}}!</h2>
    <input type='text' [(ngModel)]='profileName' />
    <button (click)='updateName()'>Update</button>`,
    styles: [``]
})
export class ProfileComponent {

    @Input()
    profileName:string;

    @Output()
    update:EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    updateName(){
        // raising the update event of ProfileComponent
        this.update.emit(this.profileName);
    }
}
