import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-upload-section',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './upload-section.html',
  styleUrl: './upload-section.scss',
})
export class UploadSection implements OnInit {
  eventTypes: any[] = [];
  eventType: string = '';
  adminId: string = '';

  newImages: File[] = [];
  newVideos: File[] = [];

  constructor(private api: ApiServices) {}

  ngOnInit(): void {
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
      this.newImages.push(...Array.from(files));
    }
    if (type === 'video') {
      this.newVideos.push(...Array.from(files));
    }
  }

  saveFiles() {
    if (!this.eventType) {
      alert('Please select Event Type');
      return;
    }

    const admin = JSON.parse(localStorage.getItem('admin') || '{}');

    const formData = new FormData();

    formData.append('eventType_id', this.eventType);
    formData.append('admin_id', admin._id);

    this.newImages.forEach((file) => formData.append('images', file));
    this.newVideos.forEach((file) => formData.append('videos', file));

    this.api.uploadCandid(formData).subscribe({
      next: (res: any) => {
        alert('Files uploaded successfully');
        console.log('Candid', res);
        this.newImages = [];
        this.newVideos = [];
        this.eventType = '';
      },
      error: (err: any) => {
        console.error(err);
        alert('Error uploading files');
      },
    });
  }
}
