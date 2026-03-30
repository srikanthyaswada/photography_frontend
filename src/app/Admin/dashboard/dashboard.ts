import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit,AfterViewInit{
 
 userAvatar = 'founder.png';
  weddingCount = 148;
  preWeddingCount = 94;
  corporateCount = 50;
  customerCount = 40;
  recentAlbums = [
    { title: "Wedding Album", client: "Suresh Kumar", time: "2 days ago" },
    { title: "Birthday Photos", client: "Krishnan", time: "5 days ago" },
    { title: "Puberty Function", client: "Vijay Krishnan", time: "10 days ago" },
    { title: "Haldi Function", client: "Karthick", time: "12 days ago" }
  ];
  creatorStats = [
    { name: 'Nandhini', count: 148, percent: 95 },
    { name: 'Japha', count: 94, percent: 65 },
    { name: 'Sarath', count: 50, percent: 40 },
    { name: 'Harish', count: 26, percent: 20 }
  ];
   isSidebarOpen = false;
  constructor() {}
 
  ngOnInit(): void {
    
  }
   ngAfterViewInit(): void {
   this.initDeliveredChart()
  }
  initDeliveredChart() {
    const ctx = document.getElementById('deliveredChart') as HTMLCanvasElement;
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          data: [12, 45, 15, 35, 10, 50, 25, 30],
          borderColor: '#0d9488', 
          backgroundColor: (context) => {
            const canvas = context.chart.ctx;
            const gradient = canvas.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(13, 148, 136, 0.3)');
            gradient.addColorStop(1, 'rgba(13, 148, 136, 0)');
            return gradient;
          },
          fill: true,
          tension: 0.4, 
          pointRadius: 0,
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: true, grid: { display: false } },
          y: { display: false }
        }
      }
    });
  }
 

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}
}
