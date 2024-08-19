import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  constructor() {}

  private classSource = new BehaviorSubject<boolean>(false);
  classToggled = this.classSource.asObservable();

  toggleDarkMode() {
    this.classSource.next(!this.classSource.value);
  }
}
