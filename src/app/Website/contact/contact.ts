import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebsiteService } from '../website-service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;

  slides = [
    { img: '/wedding-pic1.png', label: 'Slide 1: Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 2: Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 3: Pre-Wedding' },
    { img: '/wedding-pic1.png', label: 'Slide 4: Birthday' },
  ];

  contactImages = {
    main: '/founder.png',
    small: '/foundre2.png',
  };

  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private contactService: WebsiteService) {
   
  }
  ngOnInit(): void {
     this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      eventType: ['', Validators.required],
      message: [''],
    });
  }

 submitForm() {
  if (this.contactForm.invalid) {
    this.errorMessage = 'Please fill all required fields correctly.';
    this.successMessage = '';
    return;
  }

  
  const formData = this.contactForm.value;

  this.contactService.createContact(formData).subscribe({
    next: (res) => {
      this.successMessage = res.message || 'Contact submitted successfully!';
      this.errorMessage = '';

      console.log("Success", formData); 
      this.contactForm.reset();        
    },
    error: (err) => {
      this.errorMessage = err.error?.message || 'Something went wrong.';
      this.successMessage = '';
    },
  });
}
}