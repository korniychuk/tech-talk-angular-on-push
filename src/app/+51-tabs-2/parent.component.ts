import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>5. Changing child component via View Queries</h3>
    <app-tabs>
      <app-tab>hello</app-tab>
    </app-tabs>
  `,
  styles: [ `
    :host {
      margin: 25px;
      display: flex;
      padding: 25px;
      background-color: #cfc;
      border: 1px dashed #333;
    }
  ` ],
})
export class ParentComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
