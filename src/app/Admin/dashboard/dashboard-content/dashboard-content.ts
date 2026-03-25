import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-content',
  imports: [CommonModule],
  templateUrl: './dashboard-content.html',
  styleUrl: './dashboard-content.scss',
})
export class DashboardContent implements AfterViewInit {

  totalClients = 1248;
  photographers = 12;
  revenue = '₹8,75,000';
  ongoingShoots = 18;

  
  wedding = 342;
  preWedding = 198;
  events = 256;
  portrait = 145;
  bookings = 324;

  barLabels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  weddingData = [12, 18, 25, 20, 22, 30];
  eventData = [8, 14, 18, 15, 17, 21];
  donutLabels = ['Wedding', 'PreWedding', 'Events', 'Portrait'];
  donutValues = [40, 25, 20, 15];
  lineLabels = ['07am', '09am', '11am', '01pm', '03pm', '05pm'];
  lineValues = [2, 5, 3, 6, 4, 7];

  ngAfterViewInit() {
    this.loadCharts();
  }

  loadCharts() {
    new Chart('barChart', {
      type: 'bar',

      data: {
        labels: this.barLabels,

        datasets: [
          {
            label: 'Weddings',
            data: this.weddingData,
            backgroundColor: '#6c4df6',
          },

          {
            label: 'Events',
            data: this.eventData,
            backgroundColor: '#4dd0e1',
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    new Chart('donutChart', {
      type: 'doughnut',

      data: {
        labels: this.donutLabels,

        datasets: [
          {
            data: this.donutValues,

            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    new Chart('lineChart', {
      type: 'line',

      data: {
        labels: this.lineLabels,

        datasets: [
          {
            label: 'Shoots',

            data: this.lineValues,

            borderColor: '#6c4df6',

            fill: true,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
