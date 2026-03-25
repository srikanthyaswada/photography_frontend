import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  
  slides = [
    { img: '/wedding-pic1.png', label: 'Slide 1: wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 2: wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 3: Pre-Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 4: Birth Day' },
  ];


contactImages = {
  main:  '/founder.png',
  small: '/foundre2.png',
};

  
  

}