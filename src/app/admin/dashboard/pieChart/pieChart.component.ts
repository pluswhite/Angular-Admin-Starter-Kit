import { Component, OnInit } from '@angular/core';

import { PieChartService } from './pieChart.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import 'style-loader!./pieChart.component.scss'

@Component({
  selector: 'pie-chart',
  templateUrl: 'pieChart.component.html',
  styleUrls: [
    'PieChart.component.scss'
  ]
})
export class PieChartComponent implements OnInit {
  public charts: Array<Object>;
  private _init = false;

  constructor(private _pieChartService: PieChartService) {
    this.charts = this._pieChartService.getData();
  }

  ngOnInit() { }

  ngAfterViewInit () {
    if (!this._init) {
      this._loadPieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts () {
    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        // barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round'
      });
    });
  }
}
