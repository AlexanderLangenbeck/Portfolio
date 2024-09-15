import { Component, inject } from '@angular/core';
import { SkillsComponent } from '../models/skills/skills.component';
import { TranslateModule } from '@ngx-translate/core';
import { WelcomeHeaderComponent } from './../welcome/welcome-header/welcome-header.component';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, WelcomeHeaderComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  mySkills = inject(SkillsComponent);

 
}
