import { Component, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollListenerService } from '../scroll-listener.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @HostBinding('id') id = 'home';
  blurryFranco = false;
  offsetSurpassedSub: Subscription;

  constructor(
    private scrollListener: ScrollListenerService
  ) {
    this.offsetSurpassedSub = this.scrollListener.offsetSurpassed$.subscribe(val => {
      this.blurryFranco = val;
    });
  }

  ngOnDestroy() {
    this.offsetSurpassedSub?.unsubscribe();
  }
}
