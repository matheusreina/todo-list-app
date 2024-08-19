import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenWindowService {
  private windowSubject = new Subject<void>();
  openWindow$ = this.windowSubject.asObservable();

  openWindowComponent() {
    this.windowSubject.next();
  }

  constructor() {}
}
