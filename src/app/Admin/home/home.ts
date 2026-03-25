import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../services/api-services';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadSection } from '../upload-section/upload-section';
import { PackageSection } from '../package-section/package-section';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UploadSection, PackageSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  constructor(private api: ApiServices) {}

  ngOnInit(): void {}
}
