import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tabs-view-content]',
})
export class TabsViewContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}