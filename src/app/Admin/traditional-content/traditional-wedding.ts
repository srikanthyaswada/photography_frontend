import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-traditional-wedding',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './traditional-wedding.html',
  styleUrl: './traditional-wedding.scss',
})
export class TraditionalWedding implements OnInit {
  ngOnInit(): void {}
}
