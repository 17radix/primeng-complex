import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TabsViewContentDirective } from './tabs-view.directive';
import { PCTabInterface, PCTabModelInterface, PCTabsViewInterface } from './tabs.model';

@Component({
  selector: 'pc-tabs-view',
  templateUrl: './tabs-view.component.html'
})
export class PCTabsViewComponent implements OnInit,PCTabsViewInterface {
 //@ViewChild(AdDirective, {static: true}) adHost: AdDirective;
 @ViewChild(TabsViewContentDirective, {static: true}) tabViewContent: TabsViewContentDirective;
 @Input() modelData:PCTabModelInterface;
 @Output() openTabEventEmitter: EventEmitter<PCTabModelInterface> = new EventEmitter<PCTabModelInterface>();
 index: number = 0;
 componentRef: any;
 constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit() {
    //debugger;
    //this.tabViewContent;
    
  }
  ngAfterViewInit(){
    const viewContainerRef  = this.tabViewContent.viewContainerRef
    viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modelData.type);
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<PCTabInterface>this.componentRef.instance).setPCTabModelData(this.modelData);
    (<PCTabInterface>this.componentRef.instance).setPCTabsViewInstance(this);
    this.componentRef.changeDetectorRef.detectChanges();
  }
  public openTab(model:PCTabModelInterface){
    this.openTabEventEmitter.emit(model)
  }
  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.changeDetectorRef.detach();
      //this.validationMessageComponent.destroy();
    }
  }
}
