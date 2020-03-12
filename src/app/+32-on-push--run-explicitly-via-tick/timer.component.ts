import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <h3>3. We run change detection explicitly</h3>
    Count: {{ count }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {

  public count: number = 0;

  public constructor(
    // private readonly $cdr: ChangeDetectorRef,
    private readonly $applicationRef: ApplicationRef,
  ) {}

  public ngOnInit() {
    setTimeout(() => {
      this.count = 5;
      this.$applicationRef.tick();
      // this.$cdr.detectChanges();
      console.log('TICK (doesn\`t work in Angular 9)');
    }, 1000);
  }
}
