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
      img:'html.png',
      name:'HTML',
    },
    {
      img:'css.png',
      name:'CSS',
    },
    {
      img:'javascript.png',
      name:'JavaScript',
    },
    {
      img:'typescript.png',
      name:'TypeScript',
    },
    {
      img:'angular.png',
      name:'Angular',
    },
    {
      img:'firebase.png',
      name:'Firebase',
    },
    {
      img:'git.png',
      name:'GIT',
    },
    {
      img:'api.png',
      name:'Rest-Api',
    },
    {
      img:'scrum.png',
      name:'Scrum',
    },
    {
      img:'materiralDesign.png',
      name:'Material Design',
    },
    {
      img:'containuallyLearning.png',
      name:'Continually learning',
    },
  ]
}
