import { Component, Input } from '@angular/core';
import { IUser } from '@core/models/devto/user.interace';

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
    @Input() userData!: IUser;
    constructor() { }

}
