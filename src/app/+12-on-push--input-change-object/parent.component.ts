import { Component } from '@angular/core';

// /** Returns false in our case */
// if( oldValue !== newValue ) {
//   runChangeDetection();
// }

@Component({
  selector: 'app-parent',
  template: `
    <h3>@Input() param is a Object</h3>
    <app-child [labelObj]="labelObj"></app-child><br>
    <hr>
    <button (click)="updateLabel()">Update Label</button>
    <hr>
    <button (click)="updateNotRelatedNum()">Not related to @Input(): {{ notRelatedNum }}</button>
  `,
})
export class ParentComponent {

  public labelObj = {
    get label(): string {
      return `Label #${ this.labelNum }`;
    },
    labelNum: 1,
  };


  public notRelatedNum: number = 1;

  public updateLabel(): void {
    this.labelObj.labelNum++;
    console.log('Label Obj updated', this.labelObj);
  }

  public updateNotRelatedNum(): void {
    this.notRelatedNum++;
  }

}
