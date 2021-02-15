import { Input, Component, OnInit } from '@angular/core';

import { ChartDisplayableArray } from '../chartDisplayableArray';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() readonly data : ChartDisplayableArray;

  constructor() {
  }

  ngOnInit(): void {
  }

  readonly configSeriesDefaults = {
    type: 'pie',
    style: 'smooth',
    markers: {
      visible: false
    }
  };


}
