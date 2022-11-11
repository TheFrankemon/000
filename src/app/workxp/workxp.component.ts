import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workxp',
  templateUrl: './workxp.component.html',
  styleUrls: ['./workxp.component.scss']
})
export class WorkxpComponent implements OnInit {

  skills = [{
    id: 'angular',
    title: 'Angular 2-14',
    accentColor: '#FF4500',
    skillLine1: [
      'Observables',
      'Subscriptions',
      'Async / Await',
    ],
    skillLine2: [
      'Angular CLI',
      'TypeScript',
      'Strict types',
    ]
  }, {
    id: 'sass',
    title: 'Sass - CSS',
    accentColor: '#C76395',
    skillLine1: [
      'BEM Methodology',
      'Global variables',
      'Mixins',
    ],
    skillLine2: [
      'Media queries (Responsive design)',
      'Flexbox',
    ]
  }, {
    id: 'typescript',
    title: 'TypeScript',
    accentColor: '#3077C6',
    skillLine1: [
      'Template Literal Types',
      'OOP',
      'Optional chaining',
    ],
    skillLine2: [
      'Inheritance',
    ]
  }, {
    id: 'illustrator',
    title: 'Adobe Illustrator',
    accentColor: '#FF9B00',
    skillLine1: [
      'SVG',
      'Logo design',
      'Paths simplification',
    ],
    skillLine2: [
      'Image vectorization',
    ]
  }, {
    id: 'github',
    title: 'Github',
    accentColor: '#333333',
    skillLine1: [
      'Cherry-picking',
      'Interactive rebase',
      'Stashes',
    ],
    skillLine2: [
      'Image vectorization',
    ]
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
