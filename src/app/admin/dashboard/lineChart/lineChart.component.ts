import { Component, OnInit } from '@angular/core';
import { LineChartService } from './lineChart.service';

import 'style-loader!./lineChart.component.scss';

@Component({
  selector: 'line-chart',
  templateUrl: './lineChart.component.html',
  styleUrls: [
    './lineChart.component.scss'
  ]
})
export class LineChartComponent implements OnInit {
  chartData: Object;

  constructor(private _lineChartService: LineChartService) {
    this.chartData = this._lineChartService.getData();
  }

  ngOnInit() { }

  initChart(chart: any) {
    let zoomChart = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    }

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
