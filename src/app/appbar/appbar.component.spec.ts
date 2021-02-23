/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AppbarComponent } from './appbar.component';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../app.module';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('AppbarComponent', () => {
  let component: AppbarComponent;
  let fixture: ComponentFixture<AppbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbarComponent ],
      imports: [TranslateModule.forRoot(), RouterTestingModule, AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //unable to test routing in unit testing
  it('should change navigated button to new_sample', () => {
    component.changePrimaryButton('/new_sample');

    expect(component.buttonNewSampleIsSelected).toBeTruthy();
  });

  it('should change navigated button to history', () => {
    component.changePrimaryButton('/history');

    expect(component.buttonHistoryIsSelected).toBeTruthy();
  });

  it('should change navigated button to statistics', () => {
    component.changePrimaryButton('/statistics');

    expect(component.buttonStatisticsIsSelected).toBeTruthy();
  });

  it('should change language to HR',inject([TranslateService], (translateService: TranslateService) => {
    component.selectLanguage('HR');
    expect(translateService.getDefaultLang()).toEqual('hr');
  }));

});
