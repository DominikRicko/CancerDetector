import { Input, Component, OnInit } from '@angular/core';
import { ChartDisplayableArray } from '../chartDisplayableArray';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() readonly data : ChartDisplayableArray;

  constructor() {
  }

  ngOnInit(): void {
  }

  readonly configSeriesDefaults = {
    type: 'line',
    style: 'smooth',
    markers: {
      visible: false
    }
  };

}
