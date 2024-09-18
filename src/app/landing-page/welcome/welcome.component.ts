import { Component } from '@angular/core';
import { WelcomeFooterComponent } from './welcome-footer/welcome-footer.component';
import { WelcomeHeaderComponent } from '../../shared/welcome-header/welcome-header.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [WelcomeFooterComponent, WelcomeHeaderComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss', 
})
export class WelcomeComponent {

}
