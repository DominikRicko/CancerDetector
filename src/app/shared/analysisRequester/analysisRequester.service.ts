import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { SampleData } from '../sampleData/SampleData';
import { Observable } from 'rxjs';

const url = 'https://ussouthcentral.services.azureml.net/workspaces/d0bb18cf962e41edbe81292d6115cdc4/services/039d79a3eae64923a6b123b12dd26673/execute?api-version=2.0&format=swagger';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer sJPQKwdnXdiLYAFDhbKYRw0atB7NlxdnBTlXIdotmlmAz79sT9omRE40Zjjb3aMqxAWGZQ1wXifmtOnX7+Cz6Q==`
};

@Injectable({
  providedIn: 'root'
})
export class AnalysisRequester {

  constructor(private http: HttpClient) { }

  public PostRequest(
    age: number,
    sex: string,
    creatinine: number,
    LYVE1: number,
    REG1B: number,
    TFF1: number,
    REG1A: number): Observable<any> {

    const request = {
      "Inputs": {
        "input1":
          [
            {
              'age': `${age}`,
              'sex': `${sex}`,
              'creatinine': `${creatinine}`,
              'LYVE1': `${LYVE1}`,
              'REG1B': `${REG1B}`,
              'TFF1': `${TFF1}`,
              'REG1A': `${REG1A}`
            }
          ]
      },
      "GlobalParameters": {}
    };
    const body = JSON.stringify(request);

    const observer = this.http.post(url, body, { headers: headers });
    observer.subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    });

    return observer;
  }

}
