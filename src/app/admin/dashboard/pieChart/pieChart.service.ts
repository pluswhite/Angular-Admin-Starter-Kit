import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider) { }

  getData () {
    let pieColor = this._baConfig.get().colors.custom.dashboardPeiChart;

    let getRndArbitrary = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    return [
      {
        color: pieColor,
        description: "New Visits",
        stats: "57,820",
        percent: getRndArbitrary(55, 90),
        icon: "person"
      },
      {
        color: pieColor,
        description: "Purchases",
        stats: "$ 89,745",
        percent: getRndArbitrary(55, 90),
        icon: "money"
      },
      {
        color: pieColor,
        description: "Active Users",
        stats: "178,391",
        percent: getRndArbitrary(55, 90),
        icon: "face"
      },
      {
        color: pieColor,
        description: "Returned",
        stats: "32,592",
        percent: getRndArbitrary(55, 90),
        icon: "refresh"
      }
    ]
  }
}
