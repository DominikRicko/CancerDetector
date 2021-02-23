import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleDataContainer } from '../../shared/sampleData/SampleData';
import { ChartDisplayableArray } from '../chartDisplayableArray';

import { PieChartComponent } from './pie-chart.component';

import { AppModule } from '../../app.module';

describe('PieChartComponent', () => {
  @Component({
    selector: `host-component`,
    template: `<app-pie-chart [data]="this.testData"></app-pie-chart>`
  })
  class HostComponent{
    private testData = new ChartDisplayableArray(SampleDataContainer.samples, 'age', 5);
  }

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartComponent, HostComponent ],
      imports: [AppModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
