import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './welcome-header.component.html',
  styleUrl: './welcome-header.component.scss'
})
export class WelcomeHeaderComponent {
  navbarActive: boolean = false;
  currentLang: string = 'EN';
  @ViewChild('navbar') navbar!: ElementRef;

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }

  openWrapper() {
    this.navbarActive = !this.navbarActive;
    if (this.navbarActive) {
      this.navbar.nativeElement.style.display = 'flex';
      this.navbar.nativeElement.classList.add('headerNavbar');
    } else {
      this.navbar.nativeElement.style.display = 'none';
    }
  }

  closeWrapper(){
    this.navbar.nativeElement.style.display = 'none';
  }


  switchLanguage() {
    if (this.currentLang === 'EN') {
      this.currentLang = 'DE';
      this.translate.use('de');
    } else {
      this.currentLang = 'EN';
      this.translate.use('en');
    }
  }

}
