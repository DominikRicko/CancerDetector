import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { TranslateModule } from '@ngx-translate/core';

import { RouterTestingModule } from '@angular/router/testing';

import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';
import { AppModule } from '../app.module';
import { SampleData, SampleDataContainer } from '../shared/sampleData/SampleData';
import { Female, Male } from '../shared/sampleData/Gender';
import { CancerNegative, CancerPositive } from '../shared/sampleData/DiagnosisText';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeAll(() => {
    SampleDataContainer.samples.splice(0, SampleDataContainer.samples.length);
    SampleDataContainer.samples.push(new SampleData(1, 22, Male, 17, 21, 18, 18, 19, CancerNegative ,0.68));
    SampleDataContainer.samples.push(new SampleData(2, 20, Male, 18, 20, 20, 19, 21, CancerNegative ,0.58));
    SampleDataContainer.samples.push(new SampleData(3, 18, Male, 19, 19, 19, 20, 17, CancerNegative ,0.32));
    SampleDataContainer.samples.push(new SampleData(4, 23, Female, 20, 18, 21, 17, 18, CancerNegative ,0.14));
    SampleDataContainer.samples.push(new SampleData(5, 23, Female, 21, 17, 17, 21, 20, CancerPositive ,0.89));

  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsComponent, LineChartComponent, PieChartComponent ],
      imports: [TranslateModule.forRoot(), RouterTestingModule, AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct precision', () => {

    expect(component.averagePrecision).toEqual(0.522);

  });

});
