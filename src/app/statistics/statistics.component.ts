import { Component, OnInit } from '@angular/core';

import { ChartDisplayableArray } from '../charts/chartDisplayableArray';
import { SampleDataContainer } from '../shared/sampleData/SampleData';

@Component({
  selector: 'app-detail',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  readonly ageChartData : ChartDisplayableArray;
  readonly genderChartData : ChartDisplayableArray;
  readonly creatinineChartData : ChartDisplayableArray;
  readonly lyve1ChartData : ChartDisplayableArray;
  readonly reg1bChartData : ChartDisplayableArray;
  readonly tff1ChartData : ChartDisplayableArray;
  readonly reg1aChartData : ChartDisplayableArray;
  readonly diagnosisChartData : ChartDisplayableArray;

  readonly averagePrecision : number;
  readonly sampleCount : number;
  constructor() {
    this.ageChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'age', 5);
    this.genderChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'sex', 2, {numeric : false});
    this.creatinineChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'creatinine', 5);
    this.lyve1ChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'LYVE1', 5);
    this.reg1bChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'REG1B',5);
    this.tff1ChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'TFF1',5);
    this.reg1aChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'REG1A', 5);
    this.diagnosisChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'diagnosis', 2, {numeric : false});

    this.sampleCount = SampleDataContainer.samples.length;
    this.averagePrecision = 0;

    if(this.sampleCount == 0){
      return;
    }

    for(const sample of SampleDataContainer.samples){
      this.averagePrecision+=sample.precision;
    }

    this.averagePrecision/=this.sampleCount;
  }

  ngOnInit(): void { }

}
