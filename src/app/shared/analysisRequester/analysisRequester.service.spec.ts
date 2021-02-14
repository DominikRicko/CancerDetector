/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnalysisRequester } from './analysisRequester.service';

describe('Service: Config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalysisRequester]
    });
  });

  it('should ...', inject([AnalysisRequester], (service: AnalysisRequester) => {
    expect(service).toBeTruthy();
  }));
});
