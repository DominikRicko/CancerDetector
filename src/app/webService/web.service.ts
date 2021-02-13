import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ElectronService } from '../core/services';
import { SampleData, samples } from '../shared/sampleData/SampleData';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private result = null;
  private requestError : HttpErrorResponse = null;
  private subscribers : any[] = [];

  constructor(private http: HttpClient, private electron : ElectronService) { }

  public PostRequest(age: number, sex: string, creatinine: number, LYVE1: number, REG1B: number, TFF1: number, REG1A: number): void {

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

    const url = 'https://ussouthcentral.services.azureml.net/workspaces/d0bb18cf962e41edbe81292d6115cdc4/services/039d79a3eae64923a6b123b12dd26673/execute?api-version=2.0&format=swagger';
    const body = JSON.stringify(request);
    const headers ={
      'Content-Type': 'application/json',
      'Authorization': `Bearer sJPQKwdnXdiLYAFDhbKYRw0atB7NlxdnBTlXIdotmlmAz79sT9omRE40Zjjb3aMqxAWGZQ1wXifmtOnX7+Cz6Q==`
    };

    this.result = null;
    this.requestError = null;

    this.http
      .post(url, body, {headers: headers})
      .subscribe({
        next: (value) => {

          const jsonObject: any = JSON.parse(JSON.stringify(value));

          const sample = SampleData.ParseJSON(jsonObject);
          samples.push( sample );
          this.notify(sample);

        },
        error: (error : HttpErrorResponse) => {
          this.requestError = error;
          console.log(error);
        }
      });
  }

  public subscribe(subscriber : any) : void{
    this.subscribers.push(subscriber);
  }

  public notify(latestSample : SampleData) : void{
    for(const subscriber of this.subscribers){
      subscriber.EventOccured(latestSample);
    }
  }

}

