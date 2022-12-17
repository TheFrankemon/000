import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollListenerService } from './scroll-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site000';

  showButtons = false;
  offsetSurpassedSub:Subscription;

  constructor(
    private scrollListener: ScrollListenerService
  ) {
    this.offsetSurpassedSub = this.scrollListener.offsetSurpassed$.subscribe(val => {
      this.showButtons = val;
    });
  }

  ngOnDestroy() {
    this.offsetSurpassedSub?.unsubscribe();
  }
}
