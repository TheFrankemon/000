import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollListenerService } from './scroll-listener.service';

type NavElement = {
  title: string
  fragment?: string
  route?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site000';

  showButtons = false;
  offsetSurpassedSub:Subscription;

  routes: NavElement[] = [
    // {fragment: 'home', title: 'Home'},
    {fragment: 'about', title: 'Why Franco?'},
    {fragment: 'work', title: 'Experience & Skills'},
    {route: 'passport', title: 'Passport'},
  ];

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
