import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-upload-section',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './upload-section.html',
  styleUrl: './upload-section.scss',
})
export class UploadSection implements OnInit {

  form!: FormGroup;
  eventTypes: any[] = [];

  newImages: File[] = [];
  newVideos: File[] = [];
  adminId: any;

  constructor(private api: ApiServices, private fb: FormBuilder) {}

  ngOnInit(): void {
     const storedUser = localStorage.getItem('admin');
    if (storedUser) this.adminId = JSON.parse(storedUser)._id;
    this.form = this.fb.group({
      eventType_id: ['', Validators.required]
    });

    this.loadEventTypes();
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

 onFileSelected(event: any, type: string) {
  const files: FileList = event.target.files;

  if (type === 'image') {
    this.newImages = Array.from(files); 
  }

  if (type === 'video') {
    this.newVideos = Array.from(files);
  }
}

 saveFiles() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
  
    return;
  }

  if (this.newImages.length === 0 && this.newVideos.length === 0) {
    alert('Please upload at least one file');
    return;
  }

  const formData = new FormData();
  const eventType = this.form.get('eventType_id')?.value;

  formData.append('eventType_id', eventType);
  formData.append('admin_id', this.adminId);

  this.newImages.forEach(file => formData.append('images', file));
  this.newVideos.forEach(file => formData.append('videos', file));

  this.api.uploadCandid(formData).subscribe({
    next: (res: any) => {
      alert('Files uploaded successfully');

      this.form.reset();
      this.newImages = [];
      this.newVideos = [];
    },
    error: (err: any) => {
      console.error(err);
      alert('Error uploading files');
    },
  });
}
}