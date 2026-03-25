import { Component, OnInit } from '@angular/core';
import { WebsiteHeader } from '../../Website/website-header/website-header';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServices } from '../../services/api-services';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.scss',
})
export class AdminLogin implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiServices,
    private toastr: ToastrService,
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
       admin_mail: ['', Validators.required],
      admin_password: ['', Validators.required],
    });
  }
  adminLogin() {
    if (this.loginForm.invalid) {
      this.toastr.warning('Please Enter Valid Credentials', 'Warning');
      this.loginForm.markAllAsTouched();
      return;
    }
    this.api.LoginUser(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log('User Login Success Response:', res);
        localStorage.setItem('admin', JSON.stringify(res.data));
        this.toastr.success('User Login Success', 'Success', {
          positionClass: 'toast-top-right',
        });

        this.router.navigate(['/dashboard'], {
          state: { toast: 'Admin login success' },
        });
      },
      error: (err: any) => {
        console.error('Admin login failed', err);

        if (err.status === 401) {
          this.toastr.error('Invalid email or password', 'Login Failed');
        }  else if (err.status === 500) {
          this.toastr.error('Server error! Please try again later.', 'Error');
        } else {
          this.toastr.error('Login failed. Please try again.', 'Error');
        }
      },
    });
  }
}
