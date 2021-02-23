import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisRequester } from '../shared/analysisRequester/analysisRequester.service';
import { HistoryComponent } from './history.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppModule } from '../app.module';
import { SampleData, SampleDataContainer } from '../shared/sampleData/SampleData';
import { Female, Male } from '../shared/sampleData/Gender';
import { CancerNegative, CancerPositive } from '../shared/sampleData/DiagnosisText';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryComponent],
      providers: [AnalysisRequester, HttpClient, HttpHandler],
      imports: [TranslateModule.forRoot(), RouterTestingModule, AppModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove selected', () => {
    SampleDataContainer.samples.splice(0, SampleDataContainer.samples.length);
    SampleDataContainer.samples.push(new SampleData(1, 22, Male, 17, 21, 18, 18, 19, CancerNegative ,0.68));
    SampleDataContainer.samples.push(new SampleData(2, 20, Male, 18, 20, 20, 19, 21, CancerNegative ,0.58));
    SampleDataContainer.samples.push(new SampleData(3, 18, Male, 19, 19, 19, 20, 17, CancerNegative ,0.32));
    SampleDataContainer.samples.push(new SampleData(4, 23, Female, 20, 18, 21, 17, 18, CancerNegative ,0.14));
    SampleDataContainer.samples.push(new SampleData(5, 23, Female, 21, 17, 17, 21, 20, CancerPositive ,0.89));

    component.mySelection.push("0");
    component.DeleteSelected();

    expect(SampleDataContainer.samples.length).toEqual(4);
  });

});
