import { Component, ComponentFactoryResolver, Input, OnInit, Testability } from '@angular/core';
import { PCTabModelInterface, PCTabsViewInterface } from './tabs.model';
@Component({
  selector: 'pc-tabs',
  templateUrl: './tabs.component.html'
})
export class PCTabsComponent implements OnInit  {
  handleClose(e) {
    //debugger;
    //setTimeout(()=>{this.index=tabindex},0)
   if(e.index = this.index){
     this.index = this.index -1
   }
   console.log(this.tabList)
   console.log(e.index-1)
   this.tabList.splice(e.index-1,1);
   console.log(this.tabList);
    //if (condition)
    //    e.close();
    
 }
 handleChange(e) {
  this.index = e.index;
 }
 @Input() primaryModel :PCTabModelInterface = null
 @Input() primaryLabel : string = "";
 index: number = 0;
 tabList : PCTabModelInterface[] = []
 constructor() { }
  ngOnInit() {
    //modelList 
  }
  openTab(model: PCTabModelInterface) {
        debugger
        let tabindex = -1
        this.tabList.forEach((value, index) => {
           if(value.key === model.key){
            tabindex = index + 1
           }
        });
        if (tabindex< 0){
          tabindex = this.tabList.push(model);
        }
        setTimeout(()=>{this.index=tabindex},0)
        //this.index = tabindex+1
  }

}
