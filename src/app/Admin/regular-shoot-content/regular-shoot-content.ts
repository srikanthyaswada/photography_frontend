import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-regular-shoot-content',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './regular-shoot-content.html',
  styleUrls: ['./regular-shoot-content.scss'],
})
export class RegularShootContent implements OnInit {
  selectedTab = 'images';

  images: string[] = [];
  videos: string[] = [];
  packages: any[] = [];

  newImages: File[] = [];
  newVideos: File[] = [];
  eventTypes: any[] = [];
  eventType: string = '';
  adminId: string = '';

  constructor(private api: ApiServices) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('admin');

    if (storedUser) {
      const admin = JSON.parse(storedUser);
      this.adminId = admin._id;
    }

    this.loadData();
    this.loadEventTypes();
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  loadEventTypes() {
    this.api.getEventTypes().subscribe({
      next: (res: any) => {
        this.eventTypes = res?.data || [];
        console.log('Event Types', res);
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

    this.api.uploadRegular(formData).subscribe({
      next: (res: any) => {
        alert('Files uploaded successfully');
        this.newImages = [];
        this.newVideos = [];
        this.eventType = '';
        this.loadData();
      },
      error: (err: any) => {
        console.error(err);
        alert('Error uploading files');
      },
    });
  }
  loadData() {
    this.api.getAllRegular().subscribe({
      next: (res: any) => {
        const events = res?.data || [];

        this.images = [];
        this.videos = [];
        this.packages = [];

        events.forEach((event: any) => {
          if (event.images?.length) {
            this.images.push(
              ...event.images.map(
                (img: string) => `http://localhost:3007/${img.replace(/\\/g, '/')}`,
              ),
            );
          }

          if (event.videos?.length) {
            this.videos.push(
              ...event.videos.map(
                (video: string) => `http://localhost:3007/${video.replace(/\\/g, '/')}`,
              ),
            );
          }

          if (event.packages?.length) {
            this.packages.push(...event.packages);
          }
        });
      },
      error: (err) => {
        console.error('Error loading regular events:', err);
      },
    });
  }

  edit(index: number, type: string) {
    if (type === 'image') {
      console.log('Edit image:', this.images[index]);
    }

    if (type === 'video') {
      console.log('Edit video:', this.videos[index]);
    }
  }

  deleteItem(index: number, type: string) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');

    if (!confirmDelete) return;

    if (type === 'image') {
      this.images.splice(index, 1);
    }

    if (type === 'video') {
      this.videos.splice(index, 1);
    }
  }
}
