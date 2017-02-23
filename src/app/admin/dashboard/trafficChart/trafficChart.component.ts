import { Component, OnInit } from '@angular/core';
import { TrafficChartService } from './trafficChart.service';

import * as Chart from 'chart.js';

import 'style-loader!./trafficChart.component.scss';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.component.html',
  styleUrls: [
    // './trafficChart.component.scss'
  ]
})
export class TrafficChartComponent implements OnInit {
  public doughnutData: Array<Object>;

  constructor(private trafficChartService: TrafficChartService) {
    this.doughnutData = trafficChartService.getData();
  }

  ngOnInit() { }

  ngAfterViewInit () {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts () {
    let el = $('#chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
