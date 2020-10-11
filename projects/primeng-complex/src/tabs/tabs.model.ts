export interface PCTabModelInterface{
    label :string 
    key :string 
    type : any
    data:any;
}

export interface PCTabInterface {

    setPCTabModelData(pt:PCTabModelInterface);
    setPCTabsViewInstance(emit:PCTabsViewInterface);
}

export interface PCTabsViewInterface{
    openTab(model:PCTabModelInterface);
}
