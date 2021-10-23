import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Playlist } from '@core/models/aboutme/response-about-me';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  @Input() data: Playlist;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      console.log(propName);
    }
    if(this.data) {
      console.log(this.data);
    }
  }

}
