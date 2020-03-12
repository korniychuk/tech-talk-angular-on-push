import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `<ng-content></ng-content>`
})
export class TabsComponent implements AfterContentInit {
  @ContentChild(TabComponent)
  public tab!: TabComponent;

  public ngAfterContentInit() {
    setTimeout(() => {
      this.tab.content = 'New Content';
    }, 1000);
  }
}
