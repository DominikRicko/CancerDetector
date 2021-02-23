import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewSampleComponent } from './new_sample.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AnalysisRequester } from '../shared/analysisRequester/analysisRequester.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { AppModule } from '../app.module';

describe('NewSampleComponent', () => {
  let component: NewSampleComponent;
  let fixture: ComponentFixture<NewSampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewSampleComponent],
      providers: [AnalysisRequester, HttpClient, HttpHandler],
      imports: [TranslateModule.forRoot(), RouterTestingModule, AppModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
