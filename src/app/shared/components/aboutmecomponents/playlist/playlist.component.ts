import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Playlist } from '@core/models/aboutme/response-about-me';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  @Input() playlist: Playlist;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      console.log(propName);
    }
    if(this.playlist) {
      console.log(this.playlist);
    }
  }

}
