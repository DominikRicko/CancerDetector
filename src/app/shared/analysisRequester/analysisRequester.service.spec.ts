
import { TestBed, inject } from '@angular/core/testing';
import { AnalysisRequester } from './analysisRequester.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Service: Config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalysisRequester, HttpClient, HttpHandler]
    });
  });

  it('should ...', inject([AnalysisRequester], (service: AnalysisRequester) => {
    expect(service).toBeTruthy();
  }));
});
