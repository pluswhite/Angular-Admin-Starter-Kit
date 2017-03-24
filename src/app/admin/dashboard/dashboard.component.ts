import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import Chart from 'chart.js/dist/Chart.js';
import { UIChart } from 'primeng/primeng';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ]
})
export class DashboardComponent implements OnInit {
  barData: any;
  barOptions: any;

  lineData: any;
  lineOptions: any;

  doughnutData: any;
  doughnutOptions: any;

  @ViewChild('lineChart') lineChart: UIChart;

  constructor(
    private _titleService: Title,
    private _dashboardService: DashboardService
  ) {
    console.log(Chart);
    this._titleService.setTitle('Dashboard');
  }

  ngOnInit() {
    this.barData = {
      labels: [
      ],
      datasets: [
        {
          label: 'Users',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: []
        },
        {
          label: 'Sales',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: []
        },
        {
          label: 'Revenus',
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56',
          data: []
        }
      ]
    };
    this.barOptions = {
      layout: {
        padding: 15
      },
      legend: {
        position: "bottom"
      }
    };

    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
    this.lineOptions = {
      layout: {
        padding: 15
      },
      legend: {
        position: "bottom"
      }
    };

    this.doughnutData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.doughnutOptions = {
      layout: {
        padding: 15
      },
      legend: {
        position: "bottom"
      }
    };

    // this._dashboardService.getData()
    //   .subscribe(
    //     (data) => {
    //       this.barData = {
    //         labels: data.lines.x,
    //         datasets: [
    //           {
    //             label: 'Users',
    //             backgroundColor: '#42A5F5',
    //             borderColor: '#1E88E5',
    //             data: data.lines.y0
    //           },
    //           {
    //             label: 'Sales',
    //             backgroundColor: '#9CCC65',
    //             borderColor: '#7CB342',
    //             data: data.lines.y1
    //           },
    //           {
    //             label: 'Revenus',
    //             backgroundColor: '#FFCE56',
    //             borderColor: '#FFCE56',
    //             data: data.lines.y2
    //           }
    //         ]
    //       };
    //       console.log(this.lineChart);
    //       setTimeout(function() {
    //         this.lineChart.refresh();
    //       }, 1000);
    //     }
    //   );
  }
}
