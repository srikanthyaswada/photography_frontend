import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-package-section',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './package-section.html',
  styleUrl: './package-section.scss',
})
export class PackageSection implements OnInit {
  packageForm!: FormGroup;
  eventTypes: any[] = [];
  eventType: string = '';

  constructor(
    private api: ApiServices,
    private fb: FormBuilder,
  ) {
    this.packageForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      features: this.fb.array([]),
      newFeature: [''],
    });
  }
  ngOnInit(): void {
    this.loadEventTypes();
  }
  get features() {
    return this.packageForm.get('features') as FormArray;
  }

  addFeature() {
    const value = this.packageForm.get('newFeature')?.value.trim();
    if (value) {
      this.features.push(this.fb.control(value));
      this.packageForm.get('newFeature')?.reset();
    }
  }

  removeFeature(index: number) {
    this.features.removeAt(index);
  }
  // submitPackage() {
  //   if (this.packageForm.valid) {
  //     const payload = {
  //       title: this.packageForm.value.title,
  //       price: this.packageForm.value.price,
  //       features: this.features.value
  //     };
  //     console.log('Submitting package:', payload);

  //     this.api.post('https://your-api.com/packages', payload)
  //       .subscribe({
  //         next: (res) => console.log('Package saved!', res),
  //         error: (err) => console.error('Error saving package', err)
  //       });
  //   }
  // }

  loadEventTypes() {
    this.api.getEventTypes().subscribe({
      next: (res: any) => {
        this.eventTypes = res?.data || [];
      },
      error: (err) => {
        console.error('Error loading event types', err);
      },
    });
  }
}
