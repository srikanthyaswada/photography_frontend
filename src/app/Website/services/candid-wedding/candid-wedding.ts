import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-candid-wedding',
  imports: [SlickCarouselModule,CommonModule,FormsModule],
  templateUrl: './candid-wedding.html',
  styleUrl: './candid-wedding.scss',
})
export class CandidWedding {
slides = [
    { img: '/wedding-pic1.png', title: 'Slide 1', subtitle: 'Beautiful Nature' },
    { img: '/wedding-pic1.png', title: 'Slide 2', subtitle: 'Calm Waters' },
    { img: '/wedding-pic1.png', title: 'Slide 3', subtitle: 'Mountain Peaks' },
    { img: '/wedding-pic1.png', title: 'Slide 4', subtitle: 'Sunset Glory' }
  ];
}
