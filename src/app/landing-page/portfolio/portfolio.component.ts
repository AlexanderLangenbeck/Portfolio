import { AfterViewInit, Component, inject,PLATFORM_ID } from '@angular/core';
import { ProjectComponent } from './../models/project/project.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WelcomeHeaderComponent } from '../../shared/welcome-header/welcome-header.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, WelcomeHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit{


  myProjects = inject(ProjectComponent);
  platform_id = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platform_id)) {
        AOS.init({ once: true, duration: 1000 }); 
      }
  }

  trackByProjectTitle(index: number, project: any): string {
    return project.title;
  }

  

}
