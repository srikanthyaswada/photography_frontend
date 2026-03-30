import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from '../../services/api-services';
import { PackageSection } from '../package-section/package-section';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-candid-content',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PackageSection],
  templateUrl: './candid-content.html',
  styleUrls: ['./candid-content.scss'],
})
export class CandidContent implements OnInit {
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
      eventType_id: [''],
    });

    this.loadData();
    this.loadEventTypes();
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    if (tab === 'packages') this.loadPackages();
  }

  loadEventTypes() {
    this.api.getEventTypes().subscribe({
      next: (res: any) => {
        this.eventTypes = res?.data || [];
      },
      error: () => this.toastr.error('Failed to load event types'),
    });
  }

  loadPackages() {
    this.api.getPackagesByEventName('Candid Wedding').subscribe({
      next: (res: any) => {
        this.packages = res.data || [];
      },
      error: () => {
        this.packages = [];
        this.toastr.error('Failed to load packages');
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
      this.toastr.warning('Please select Event Type');
      return;
    }

    const formData = new FormData();
    formData.append('eventType_id', this.uploadForm.get('eventType_id')?.value);
    formData.append('admin_id', this.adminId);

    this.newImages.forEach((file) => formData.append('images', file));
    this.newVideos.forEach((file) => formData.append('videos', file));

    this.api.uploadCandid(formData).subscribe({
      next: () => {
        this.toastr.success('Files uploaded successfully');
        this.newImages = [];
        this.newVideos = [];
        this.uploadForm.reset();
        this.loadData();
      },
      error: () => this.toastr.error('Failed to upload files'),
    });
  }

  loadData() {
    this.api.getAllCandid().subscribe({
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
      error: () => this.toastr.error('Failed to load events'),
    });
  }

  edit(item: any, type: string) {
    if (!item || item.index === undefined || !item.eventId) {
      this.toastr.error('Invalid item. Check console.');
      console.error('Invalid item:', item);
      return;
    }

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = type === 'image' ? 'image/*' : 'video/*';

    fileInput.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      type === 'image' ? formData.append('images', file) : formData.append('videos', file);
      formData.append('type', type);
      formData.append('index', String(item.index));

      this.api.updateCandid(item.eventId, formData).subscribe({
        next: () => {
          this.toastr.success('Updated successfully');
          this.loadData();
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Update failed');
        },
      });
    };

    fileInput.click();
  }

  deleteItem(item: any, type: string) {
    if (!confirm('Delete this item?')) return;
    this.api.deleteCandid(item.eventId, { type, index: item.index }).subscribe({
      next: () => {
        this.toastr.success('Deleted successfully');
        this.loadData();
      },
      error: () => this.toastr.error('Failed to delete item'),
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
