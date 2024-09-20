import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

@Injectable({
  providedIn:'root'
})
export class SkillsComponent {


  skills = [
    {
      img:'html.svg',
      name:'HTML',
    },
    {
      img:'css.svg',
      name:'CSS',
    },
    {
      img:'javascript.svg',
      name:'JavaScript',
    },
    {
      img:'typescript.svg',
      name:'TypeScript',
    },
    {
      img:'angular.svg',
      name:'Angular',
    },
    {
      img:'firebase.svg',
      name:'Firebase',
    },
    {
      img:'git.svg',
      name:'GIT',
    },
    {
      img:'api.svg',
      name:'Rest-Api',
    },
    {
      img:'scrum.svg',
      name:'Scrum',
    },
    {
      img:'materiralDesign.svg',
      name:'Material Design',
    },
    {
      img:'containuallyLearning.svg',
      name:'Continually learning',
    },
  ]
}
