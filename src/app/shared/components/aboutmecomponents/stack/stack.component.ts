import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Hardware, Playlist, Stack } from '@core/models/aboutme/response-about-me';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  @Input() stack: Stack;
  hardware: Hardware;
  software: Playlist;
  title: string;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      console.log(propName);
    }
    if(this.stack) {
      const { hardware, software  } = this.stack;
      this.hardware = hardware;
      this.software = software;
      // this.title = title;
      console.log(this.stack);
      console.log(this.hardware);
      console.log(this.software);
      // console.log(this.title);
    }
  }
}
