import { Component, inject } from '@angular/core';
import { SkillsComponent } from '../models/skills/skills.component';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  mySkills = inject(SkillsComponent);

 
}
