import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright-footer',
  templateUrl: './copyright-footer.component.html',
  styleUrls: ['./copyright-footer.component.scss']
})
export class CopyrightFooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
