import { Component } from '@angular/core';
import { WebsiteHeader } from '../website-header/website-header';
import { RouterOutlet } from '@angular/router';
import { WebsiteFooter } from '../website-footer/website-footer';

@Component({
  selector: 'app-website-main-layout',
  standalone: true,
  imports: [WebsiteHeader, RouterOutlet, WebsiteFooter],
  templateUrl: './website-main-layout.html',
  styleUrl: './website-main-layout.scss',
})
export class WebsiteMainLayout {}
