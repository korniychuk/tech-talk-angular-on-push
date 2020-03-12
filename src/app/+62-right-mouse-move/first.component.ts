import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, OnDestroy,
  OnInit,
} from '@angular/core';
import { debounceTime, switchMap } from 'rxjs/operators';
import { fromEvent, of, Subscription } from 'rxjs';

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
export class FirstComponent implements OnInit, OnDestroy {

  public x?: number;
  public y?: number;

  private sub?: Subscription;

  public constructor(
    private readonly $appRef: ApplicationRef,
    private readonly $elRef: ElementRef,
    private readonly $cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    // this.sub = of(true).pipe(
    this.sub = this.$appRef.isStable.pipe(
      switchMap(() => fromEvent<MouseEvent>(this.$elRef.nativeElement, 'mousemove')),
      debounceTime(100),
    ).subscribe(({ clientX, clientY }: MouseEvent): void => {
      this.x = clientX;
      this.y = clientY;
      this.$cdr.detectChanges();
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
