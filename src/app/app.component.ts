import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { WelcomeHeaderComponent } from './shared/welcome-header/welcome-header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeHeaderComponent, MainFooterComponent ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  
  title = 'AlexanderLangenbeck';
}
