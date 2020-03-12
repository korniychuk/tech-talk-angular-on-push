import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    Coordinates: [{{ x }}, {{ y }}]<br>
  `,
  styles: [ `
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      width: 300px;
      height: 300px;
      background-color: #bbf;
      border: 2px dashed #333;
    }
  ` ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {

  public x?: number;
  public y?: number;

  @HostListener('mousemove', ['$event'])
  public onMouseMove({ clientX, clientY }: MouseEvent): void {
    this.x = clientX;
    this.y = clientY;
  }

}
