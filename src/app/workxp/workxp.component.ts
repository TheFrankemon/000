import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workxp',
  templateUrl: './workxp.component.html',
  styleUrls: ['./workxp.component.scss']
})
export class WorkxpComponent implements OnInit {

  jobs = [{
    id: 'witco',
    title: 'Witco (formerly Monbuilding)',
    dates: 'Sep 2018 - Present',
    detail: [
      'Lead Web UI Developer on Sass + Angular.',
      'Frontend Developer on Angular.'
    ]
  }, {
    id: 'ancestral',
    title: 'Ancestral Gods',
    dates: 'Jan 2018 - Jun 2018',
    detail: [
      'Videogame developer trainee on Unity3D & C# programming.'
    ]
  }, {
    id: 'impeller',
    title: 'Impeller Studios',
    dates: 'Jul 2016 - Jul 2017',
    detail: [
      'Co-leader of local web videogame development team, using Phaser and team training on Git.'
    ]
  }, {
    id: 'assure',
    title: 'AssureSoft',
    dates: 'Jan 2017 - Feb 2017',
    detail: [
      'Research Assistant intern on a CI tools POC.',
      'Angular Material 2 web components development.'
    ]
  }]

  studies = [{
    id: 'upb',
    title: 'Universidad Privada Boliviana',
    dates: 'Feb 2013 - Dec 2018',
    firstElemIsGold: true,
    detail: [
      'Computer Software Engineer.',
      'Honorable mention on directed-work thesis.',
      'Career representative on University\'s 2016 student society.'
    ]
  }, {
    id: 'cba',
    title: 'Centro Boliviano Americano',
    dates: 'Jan 2004 - Feb 2008',
    detail: [
      'Certificate of Intermediate-Superior Program for Teenagers.',
      'Completion Diploma of Children’s English Program.',
    ]
  }]

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
