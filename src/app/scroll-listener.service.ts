import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollListenerService {

  offsetSurpassed = new BehaviorSubject(false);
  offsetSurpassed$ = this.offsetSurpassed.asObservable();

  constructor() {
    window.addEventListener('scroll', () => {
      this.offsetSurpassed.next(window.pageYOffset > 700);
    });
  }
}
