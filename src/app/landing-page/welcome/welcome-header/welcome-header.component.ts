import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-header.component.html',
  styleUrl: './welcome-header.component.scss'
})
export class WelcomeHeaderComponent {
  navbarActive: boolean = false;
  @ViewChild('navbar') navbar!: ElementRef;

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

}
