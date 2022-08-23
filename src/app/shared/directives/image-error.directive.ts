import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageError]',
})
export class ImageErrorDirective {
  constructor(private elment: ElementRef<HTMLImageElement>) {}

  @HostListener('error') onError(): void {
    this.elment.nativeElement.src = 'assets/img/no-image.jpg';
  }
}
