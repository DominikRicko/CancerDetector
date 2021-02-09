import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SampleData } from '../shared/sampleData/SampleData';
import * as SampleEnums from '../shared/sampleData/SampleData.enum';
import { WebService } from '../webService/Web.service';

@Component({
  selector: 'app-home',
  templateUrl: './new_sample.component.html',
  styleUrls: ['./new_sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  public sampleForm: FormGroup;
  readonly genderList : SampleEnums.Sex[] = [];

  public sample : SampleData;

  constructor(private webService : WebService) {

    this.sampleForm = new FormGroup({
      age : new FormControl(),
      sex : new FormControl(),
      creatine : new FormControl(),
      lyve1 : new FormControl(),
      reg1b : new FormControl(),
      tff1 : new FormControl(),
      reg1a : new FormControl()
    });

    for (const enumValue of Object.values(SampleEnums.Sex)) this.genderList.push(enumValue);

  }

  public sendAnalysisRequest() : void {

    this.sample = new SampleData(
      this.sampleForm.get('age').value,
      this.sampleForm.get('sex').value,
      this.sampleForm.get('creatine').value,
      this.sampleForm.get('lyve1').value,
      this.sampleForm.get('reg1b').value,
      this.sampleForm.get('tff1').value,
      this.sampleForm.get('reg1a').value
    );

    this.webService.PostRequest(this.sample);

  }

  ngOnInit(): void { }

}
