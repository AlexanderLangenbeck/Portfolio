import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
        window.scrollTo(0, 0);
    });
  }

}
