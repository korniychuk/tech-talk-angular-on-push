import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-no-cd',
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
})
export class FooterNoCdComponent implements OnInit {

  public constructor(
    private readonly $cdr: ChangeDetectorRef,
  ) {
    $cdr.detach();
  }

  public ngOnInit(): void {
    this.$cdr.detectChanges();
  }

  public get year(): number {
    console.log('year getter');
    return new Date().getFullYear();
  }

}
