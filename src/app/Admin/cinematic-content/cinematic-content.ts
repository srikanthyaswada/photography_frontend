import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiServices } from '../../services/api-services';
import { PackageSection } from '../package-section/package-section';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cinematic-content',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PackageSection],
  templateUrl: './cinematic-content.html',
  styleUrls: ['./cinematic-content.scss'],
})
export class CinematicContent implements OnInit {
  selectedTab = 'images';
  selectedEventId: string = '';
  images: any[] = [];
  videos: any[] = [];
  packages: any[] = [];
  newImages: File[] = [];
  newVideos: File[] = [];
  eventTypes: any[] = [];
  eventType: string = '';
  adminId: string = '';
  showUploadModal = false;
  showPackageModal = false;
  uploadForm!: FormGroup;

  constructor(
    private api: ApiServices,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('admin');
    if (storedUser) {
      const admin = JSON.parse(storedUser);
      this.adminId = admin._id;
    }

    this.uploadForm = this.fb.group({
      eventType_id: ['', Validators.required],
    });

    this.loadData();
    this.loadEventTypes();
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    if (tab === 'packages') {
      this.loadPackages();
    }
  }

  loadEventTypes() {
    this.api.getEventTypes().subscribe({
      next: (res: any) => {
        this.eventTypes = res?.data || [];
      },
      error: () => this.toastr.error('Failed to load event types', 'Error'),
    });
  }

  loadPackages() {
    this.api.getPackagesByEventName('Cinematic Pre-Wedding').subscribe({
      next: (res: any) => {
        this.packages = res.data || [];
      },
      error: () => {
        this.packages = [];
        this.toastr.error('Failed to load packages', 'Error');
      },
    });
  }

  onFileSelected(event: any, type: string) {
    const files: FileList = event.target.files;
    if (type === 'image') this.newImages.push(...Array.from(files));
    if (type === 'video') this.newVideos.push(...Array.from(files));
  }

  saveFiles() {
    if (this.uploadForm.invalid) {
      this.toastr.warning('Please select Event Type', 'Warning');
      return;
    }

    const formData = new FormData();
    formData.append('eventType_id', this.uploadForm.get('eventType_id')?.value);
    formData.append('admin_id', this.adminId);

    this.newImages.forEach((file) => formData.append('images', file));
    this.newVideos.forEach((file) => formData.append('videos', file));

    this.api.uploadCinematic(formData).subscribe({
      next: () => {
        this.toastr.success('Files uploaded successfully', 'Success');
        this.newImages = [];
        this.newVideos = [];
        this.uploadForm.reset();
        this.loadData();
      },
      error: () => this.toastr.error('Upload failed', 'Error'),
    });
  }

  loadData() {
    this.api.getAllCinematic().subscribe({
      next: (res: any) => {
        const events = res?.data || [];
        this.images = [];
        this.videos = [];

        events.forEach((e: any) => {
          (e.images || []).forEach((img: string, i: number) => {
            this.images.push({
              url: `http://localhost:3007/${img.replace(/\\/g, '/')}`,
              eventId: e._id,
              index: i,
            });
          });

          (e.videos || []).forEach((v: string, i: number) => {
            this.videos.push({
              url: `http://localhost:3007/${v.replace(/\\/g, '/')}`,
              eventId: e._id,
              index: i,
            });
          });
        });
      },
      error: () => this.toastr.error('Failed to load data', 'Error'),
    });
  }

  edit(item: any, type: string) {
    if (!item || item.index === undefined || !item.eventId) {
      this.toastr.error('Invalid data', 'Error');
      return;
    }

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = type === 'image' ? 'image/*' : 'video/*';

    fileInput.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      if (type === 'image') formData.append('images', file);
      else formData.append('videos', file);

      formData.append('type', type);
      formData.append('index', String(item.index));

      this.api.updateCinematic(item.eventId, formData).subscribe({
        next: () => {
          this.toastr.success('Updated successfully', 'Success');
          this.loadData();
        },
        error: () => this.toastr.error('Update failed', 'Error'),
      });
    };

    fileInput.click();
  }

  deleteItem(item: any, type: string) {
    if (!confirm('Delete this item?')) return;

    this.api.deleteCinematic(item.eventId, { type, index: item.index }).subscribe({
      next: () => {
        this.toastr.success('Deleted successfully', 'Success');
        this.loadData();
      },
      error: () => this.toastr.error('Delete failed', 'Error'),
    });
  }

  openUpload() {
    this.showUploadModal = true;
  }

  addPackage() {
    this.showPackageModal = true;
  }

  closeModal() {
    this.showUploadModal = false;
    this.showPackageModal = false;
  }
}
