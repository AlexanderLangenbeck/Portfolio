import { Component, Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { WelcomeHeaderComponent } from './../../welcome/welcome-header/welcome-header.component';


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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and catergories',
    },
    {
      img:'polloloco.png',
      title:'El Pollo Loco',
      skills: 'Javascript | HTML | CSS',
      description:'A simple Jump-and-Run game based on an object-oriented approach. Collect coins and find some bottles to fight against the killer chickens',
    }
  ];

  constructor(private translate: TranslateService) {}

  
}
