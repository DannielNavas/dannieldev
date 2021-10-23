import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Principal } from '@core/models/aboutme/response-about-me';

@Component({
  selector: 'app-aboutmeprincipal',
  templateUrl: './aboutmeprincipal.component.html',
  styleUrls: ['./aboutmeprincipal.component.scss']
})
export class AboutmeprincipalComponent  {
  @Input() principalData: Principal;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      console.log(propName);
    }
    if(this.principalData) {
      console.log(this.principalData);
    }
  }

}
