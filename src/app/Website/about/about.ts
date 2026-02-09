import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SlickCarouselModule,CommonModule,FormsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent {
  banners = [
  {
    image: '/public/wedding-pic1.png',
    title: 'Welcome to Our Store',
    subtitle: 'Discover amazing products'
  },
  {
    image: '/public/wedding-pic1.png',
    title: 'Big Sale',
    subtitle: 'Up to 50% off'
  },
  {
    image: '/public/wedding-pic1.png',
    title: 'New Arrivals',
    subtitle: 'Latest trends are here'
  }
];

bannerConfig = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  fade: true,
  pauseOnHover: false
};


}
