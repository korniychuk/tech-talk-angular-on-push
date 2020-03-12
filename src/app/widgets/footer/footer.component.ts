import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styles: [
    `:host {
      display: block;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 50px;
      line-height: 50px;
    }`
  ],
  template: `
    &copy; <a href="//www.korniychuk.pro" target="_blank">Anton Korniychuk</a> {{ year }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public counter: number = 0;

  public get year(): number {
    console.log('year getter: ', this.counter++);
    return new Date().getFullYear();
  }

}
