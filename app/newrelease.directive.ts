import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwNewRelease]'
})
export class NewReleaseDirective {
  @HostBinding('class.panel panel-success') newRelease = true;
}
