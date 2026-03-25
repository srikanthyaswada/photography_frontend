import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent implements OnInit {
  quoteForm!: FormGroup;

  
  slides = [
    { img: '/wedding-pic1.png', label: 'Slide 1: wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 2: wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 3: Pre-Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 4: Birth Day' },
  ];

  
  team = {
    founder: {
      role: 'Founder',
      img: '/owner2.png',
    },
    ceo: {
      role: 'C.E.O',
      mainImg: '/founder.png',
      smallImg: '/foundre2.png',
    },
  };

  
  mainTypes = ['Wedding', 'Pre-Wedding', 'Child', 'Business'];

  subTypeMap: any = {
    Wedding: ['Regular', 'Candid', 'Cinematic'],
    'Pre-Wedding': ['Regular', 'Candid', 'Cinematic'],
    Child: ['Born Shoot', 'Birthday Shoot'],
    Business: ['Product Launch Shoot', 'Business Meet Up Shoot'],
  };

  subTypes: string[] = [];

  showSubOptions = false;
  showForm = false;

  selectedMainType = '';
  selectedSubType = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      header: [''],
      price: [''],
      features: this.fb.array([]),
    });

    this.addFeature();
  }

  get features(): FormArray {
    return this.quoteForm.get('features') as FormArray;
  }

  onMainTypeChange(type: string) {
    this.selectedMainType = type;
    this.subTypes = this.subTypeMap[type] || [];

    this.selectedSubType = '';
    this.showSubOptions = true;
    this.showForm = false;
  }

  onSubTypeChange(sub: string) {
    this.selectedSubType = sub;
    this.showForm = true;
  }

  addFeature() {
    this.features.push(this.fb.control(''));
  }

  removeFeature(index: number) {
    this.features.removeAt(index);
  }

  submit() {
    const payload = {
      mainType: this.selectedMainType,
      subType: this.selectedSubType,
      ...this.quoteForm.value,
    };

    console.log('Final Payload:', payload);

    this.quoteForm.reset();
    this.features.clear();
    this.addFeature();

    this.showForm = false;
    this.showSubOptions = false;
  }
}