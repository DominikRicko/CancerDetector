import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisRequester } from '../shared/analysisRequester/analysisRequester.service';
import { HistoryComponent } from './history.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppModule } from '../app.module';

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
});
