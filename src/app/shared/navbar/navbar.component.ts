import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] , 
  standalone : false
})
export class NavbarComponent implements OnInit {
  links : String [] = [
    'Home' ,
    'About' ,
    'Services' ,
    'Contact'
  ];
  isMenuOpen = false;
  token: string | null = null;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
      this.token = localStorage.getItem('token'); 
    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

