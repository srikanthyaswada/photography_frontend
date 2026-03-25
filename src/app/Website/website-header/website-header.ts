import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-website-header',
  standalone: true,   
  imports: [RouterLink],
  templateUrl: './website-header.html',
  styleUrl: './website-header.scss',
})
export class WebsiteHeader {

  sidebarOpen = false;

  toggleSidebar() {
  this.sidebarOpen = !this.sidebarOpen;
}
toggleSubmenu(event: Event) {
  event.preventDefault();
  const target = (event.target as HTMLElement).nextElementSibling;
  if (target) {
    target.classList.toggle('active');
  }
}
}
