import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IWebRequestable } from './IWebRequestable';
import { ElectronService } from '../core/services';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  private result = null;
  private requestError : HttpErrorResponse = null;

  constructor(private http: HttpClient, private electron : ElectronService) { }

  public PostRequest(request: IWebRequestable) : void{

    const url = 'https://ussouthcentral.services.azureml.net/workspaces/d0bb18cf962e41edbe81292d6115cdc4/services/039d79a3eae64923a6b123b12dd26673/execute?api-version=2.0&format=swagger';
    const body = request.generateRequest();
    const headers ={
      'Content-Type': 'application/json',
      'Authorization': `Bearer sJPQKwdnXdiLYAFDhbKYRw0atB7NlxdnBTlXIdotmlmAz79sT9omRE40Zjjb3aMqxAWGZQ1wXifmtOnX7+Cz6Q==`
    };

    console.log(url);
    console.log(body);
    console.log(headers);

    this.result = null;
    this.requestError = null;

    this.http
      .post(url, body, {headers: headers})
      .subscribe({
        next: (value) => {
          console.log('-----Response------');
          console.log(JSON.stringify(value, null, 2));
          this.result = value;
        },
        error: (error : HttpErrorResponse) => {
          this.requestError = error;
          console.log(error);
        }
      });
  }

}

