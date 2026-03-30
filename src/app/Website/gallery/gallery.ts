import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

 
  slides = [
    { img: '/wedding-pic1.png', label: 'Slide 1: Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 2: Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 3: Pre-Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 4: Birth Day' },
  ];

 
  galleryItems = [
    {
      title: 'Wedding Highlight',
      images: [
        '/work1.png',
        '/work2.png',
        '/work3.png',
      ],
    },
    {
      title: 'Pre-wedding Shoot',
      images: [
        '/work2.png',
        '/work4.png',
        '/work5.png',
      ],
    },
    {
      title: 'Maternity Shoot',
      images: [
        '/work3.png',
        '/work6.png',
        '/work7.png',
      ],
    },
    {
      title: 'Child Photography',
      images: [
        '/work4.png',
        '/work8.png',
        '/work1.png',
      ],
    },
    {
      title: 'Engagement Shoot',
      images: [
        '/work5.png',
        '/work6.png',
        '/work7.png',
      ],
    },
    {
      title: 'Event Coverage',
      images: [
        '/work6.png',
        '/work7.png',
        '/work8.png',
      ],
    },
  ];
}