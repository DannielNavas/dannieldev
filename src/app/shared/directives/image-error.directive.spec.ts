import { ElementRef } from '@angular/core';
import { ImageErrorDirective } from './image-error.directive';

describe('ImageErrorDirective', () => {
  it('should create an instance', () => {
    const element: ElementRef = new ElementRef(document.createElement('img'));
    const directive = new ImageErrorDirective(element);
    expect(directive).toBeTruthy();
  });
  it('Should set the src to the default image', () => {
    const element: ElementRef = new ElementRef(document.createElement('img'));
    const directive = new ImageErrorDirective(element);
    directive.onError();
    expect(element.nativeElement.src).toContain('/assets/img/no-image.jpg');
  });
});
