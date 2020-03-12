import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>@Input() param is a string</h3>
    <app-child [label]="label"></app-child><br>
    <hr>
    <button (click)="updateLabel()">Update Label</button>
    <hr>
    <button (click)="updateNotRelatedNum()">Not related to @Input(): {{ notRelatedNum }}</button>
  `,
})
export class ParentComponent {

  public get label(): string {
    return `Label #${ this.labelNum }`;
  }

  private labelNum: number = 1;

  public notRelatedNum: number = 1;

  public updateLabel(): void {
    this.labelNum++;
  }

  public updateNotRelatedNum(): void {
    this.notRelatedNum++;
  }

}
