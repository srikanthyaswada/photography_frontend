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
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
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
      eventType_id: ['', Validators.required],
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

  addFeature() {
    const value = this.packageForm.get('newFeature')?.value?.trim();

    if (value) {
      this.features.push(this.fb.control(value));
      console.log('Features array:', this.features.value);
      this.packageForm.get('newFeature')?.reset();
    }
  }

  removeFeature(index: number) {
    this.features.removeAt(index);
  }
  submitPackage() {
    if (this.packageForm.invalid) {
      this.packageForm.markAllAsTouched();
      return;
    }

    const newFeature = this.packageForm.get('newFeature')?.value?.trim();
    if (newFeature) {
      this.features.push(this.fb.control(newFeature));
    }

    const payload = {
      eventType_id: this.packageForm.value.eventType_id,
      title: this.packageForm.value.title,
      price: this.packageForm.value.price,
      features: this.features.value || [],
    };

    console.log('Submitting:', payload);

    this.api.createPackage(payload).subscribe({
      next: (res: any) => {
        alert('Package created successfully');
        this.packageForm.reset();
        this.features.clear();
      },
      error: (err) => {
        alert('Failed to create package');
      },
    });
  }
}
