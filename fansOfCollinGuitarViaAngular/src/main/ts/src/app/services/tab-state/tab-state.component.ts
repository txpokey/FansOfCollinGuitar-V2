import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-tab-state',
  // templateUrl: './tab-state.component.html',
  // styleUrls: ['./tab-state.component.css']
})
export class TabStateComponent implements OnInit {
  NO_TAB_ACTIVE : number = -1 ;
  tab : number = this.NO_TAB_ACTIVE ;
  activeTab: number = this.tab ;
  constructor() { }

  ngOnInit() {
    console.log("tabbed state machine loaded")
  }

  private privateSetTab(newTabID: number): number {
    return this.activeTab = this.tab = newTabID ; // TODO : nice to return old value, but not needed..
  }

  public tabReset(): number {
    return this.privateSetTab(this.NO_TAB_ACTIVE) ;
  }
  public showTab(checkTab: number): boolean {
    return ( this.isSet(checkTab) || this.tab === this.NO_TAB_ACTIVE ) ;
  }
  public isSet(checkTab: number): boolean {
    return this.tab === checkTab;
  }
  public setTab(candidateTab: number): void {
    this.privateSetTab( this.isSet( candidateTab ) ? this.tabReset() : candidateTab );
  }
}
