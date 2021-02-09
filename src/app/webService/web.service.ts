import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { IWebRequestable } from './IWebRequestable';



@Injectable({
  providedIn: 'root'
})
export class WebService {

  private result = null;
  private requestError = null;

  constructor(private http: HttpClient) { }

  public PostRequest(request: IWebRequestable) : void{

    const url = 'https://ussouthcentral.services.azureml.net/workspaces/d0bb18cf962e41edbe81292d6115cdc4/services/039d79a3eae64923a6b123b12dd26673/execute?api-version=2.0&format=swagger';
    const body = request.generateRequest();
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer d7imqG0K4fRo0qvNhjdl7zXgAsoTAPzF8BuQfjy435ueCbtNCOL/hY/iV/q/vB3F6QT/2aBPneQAGJS8d5nrhg==');

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
        error: (error) => {
          this.requestError = error.json() || error;
          console.log(error.json());
        }
      });
  }

}

