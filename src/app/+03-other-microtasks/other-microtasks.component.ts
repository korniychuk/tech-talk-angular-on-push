import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as $ from 'rxjs/operators';

@Component({
  selector: 'app-other-microtasks',
  template: `
    {{ count }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherMicrotasksComponent implements OnInit {
  public count = 0;

  public constructor(
    private http: HttpClient,
  ) {}

  public ngOnInit(): void {
    setTimeout(() => this.count = 5, 0);

    Promise.resolve().then(() => this.count = 5);
    Promise.resolve().then(() => this.count = 50);

    this.http.get('//localhost:4200', {responseType: 'text'}).pipe(
      $.mapTo(10),
    ).subscribe((res: number): void => {
      this.count = res;
    });
  }

}
