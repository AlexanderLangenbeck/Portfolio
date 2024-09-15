import { Component, inject } from '@angular/core';
import { ProjectComponent } from './../models/project/project.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WelcomeHeaderComponent } from './../welcome/welcome-header/welcome-header.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, WelcomeHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  myProjects = inject(ProjectComponent);
  
  trackByProjectTitle(index: number, project: any): string {
    return project.title;
  }

  

}
