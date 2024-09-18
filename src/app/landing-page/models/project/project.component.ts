import { Component, Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { WelcomeHeaderComponent } from '../../../shared/welcome-header/welcome-header.component';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslateModule, WelcomeHeaderComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

@Injectable({
  providedIn:'root'
})

export class ProjectComponent{
  
  projects = [
    {
      img:'join.png',
      title:'Join',
      skills: 'HTML | CSS | Firebase',
      description: 'PORTFOLIO_DESCRIPTION_0',
      links:{
        github:'https://join.alexanderlangenbeck.de',
        liveTest:'https://github.com/AlexanderLangenbeck/Join'
      }
    },
    {
      img:'polloloco.png',
      title:'El Pollo Loco',
      skills: 'Javascript | HTML | CSS',
      description:'PORTFOLIO_DESCRIPTION_1',
      links:{
        github:'https://ellpolloloco.alexanderlangenbeck.de',
        liveTest:'https://github.com/AlexanderLangenbeck/El-Pollo-Loco'
      }
    }
  ];

  constructor(private translate: TranslateService) {}

  
}
