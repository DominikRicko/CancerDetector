import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewSample } from './new_sample.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: NewSample;
  let fixture: ComponentFixture<NewSample>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewSample],
      imports: [TranslateModule.forRoot(), RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', waitForAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'PAGES.HOME.TITLE'
    );
  }));
});
