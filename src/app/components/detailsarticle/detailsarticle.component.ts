import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-detailsarticle',
    templateUrl: './detailsarticle.component.html',
    styleUrls: ['./detailsarticle.component.scss']
})
export class DetailsarticleComponent {
    @Input() datePublish: string = "";
    @Input() tags: string[] = [];
    @Input() readingTimeMinutes: number = 0;
    @Input() comments: number = 0;
    @Input() reactions: number = 0;

    constructor() { }
}
