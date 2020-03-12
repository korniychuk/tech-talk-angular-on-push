import { ApplicationRef, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { filter, first, switchMap, tap } from 'rxjs/operators';
import { interval } from 'rxjs';

//
// Warning! There is not .unsubscribe()
//

@Component({
  selector: 'app-first',
  template: `
  Value: {{ value }}
  `,
})
export class FirstComponent {
  public value: any;

  // constructor(appRef: ApplicationRef) {
  //   appRef.isStable.pipe(
  //     filter(stable => stable),
  //   ).subscribe(() => console.log('App is stable now'));
  //
  //   interval(1000).subscribe(counter => console.log(counter));
  // }

  // constructor(appRef: ApplicationRef) {
  //   appRef.isStable.pipe(
  //     first(stable => stable),
  //     tap(stable => console.log('App is stable now')),
  //     switchMap(() => interval(1000)),
  //   ).subscribe(counter => console.log(counter));
  // }

  // constructor(appRef: ApplicationRef, cd: ChangeDetectorRef) {
  //   appRef.isStable.pipe(
  //     first(stable => stable),
  //     switchMap(() => interval(1000)),
  //   ).subscribe(counter => {
  //     this.value = counter;
  //     cd.detectChanges();
  //   });
  // }

  // constructor(appRef: ApplicationRef, zone: NgZone) {
  //   appRef.isStable.pipe(
  //     first(stable => stable),
  //     switchMap(() => interval(1000)),
  //   ).subscribe(counter => zone.run(() => this.value = counter));
  // }

}
