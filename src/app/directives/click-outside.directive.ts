/**
 * Click Outside directive
 */

import {Directive, Output, EventEmitter, HostListener, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {
  }

  private allowClose = true;
  @Input() useDirective: boolean = true;

  @Output()
  public clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('touchstart', ['$event'])
  @HostListener('click', ['$event'])
  public onClickInside(event: MouseEvent): void {
    if (this.useDirective) {
      this.allowClose = false;
    }
  }

  @HostListener('document:touchstart', ['$event'])
  @HostListener('document:click', ['$event'])
  public onClickOutside(event: MouseEvent): void {
    if (this.useDirective) {
      if (!this._elementRef.nativeElement.contains(event.target) && this.allowClose) {
        this.clickOutside.emit(event);
      }
      this.allowClose = true;
    }
  }
}
