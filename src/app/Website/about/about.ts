import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { WebsiteService } from '../website-service';

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
    founder: { role: 'Founder', img: '/owner2.png' },
    ceo: { role: 'C.E.O', mainImg: '/founder.png', smallImg: '/foundre2.png' },
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

  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private quotationService: WebsiteService,
  ) {}

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      name: [''],
      mobile: [''],
      email: [''],
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
    if (!this.selectedMainType || !this.selectedSubType) {
      this.errorMessage = 'Please select main and sub type';
      this.successMessage = '';
      return;
    }

   const payload = {
  mainType: this.selectedMainType,
  subType: this.selectedSubType,
  name: this.quoteForm.value.name,
  mobile: this.quoteForm.value.mobile,
  email: this.quoteForm.value.email,
  title: this.quoteForm.value.header,
  price: this.quoteForm.value.price,
  items: this.quoteForm.value.features
           .filter((f: string) => f.trim() !== '')
           .map((f: string) => ({ label: f })) 
};

    this.quotationService.createQuotation(payload).subscribe({
      next: (res) => {
        this.successMessage = res.message || 'Quotation submitted successfully!';
        this.errorMessage = '';
        console.log('Saved payload:', payload);

        this.quoteForm.reset();
        this.features.clear();
        this.addFeature();
        this.showForm = false;
        this.showSubOptions = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Something went wrong';
        this.successMessage = '';
      },
    });
  }
}
