import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SampleData, SampleDataContainer } from '../shared/sampleData/SampleData';
import { AnalysisRequester } from '../shared/analysisRequester/analysisRequester.service';
import { Gender, GenderList} from '../shared/sampleData/Gender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './new_sample.component.html',
  styleUrls: ['./new_sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  public sampleForm: FormGroup;
  readonly genderList : Array<Gender>;

  constructor(
    private analysisRequester : AnalysisRequester,
    private router : Router) {

    this.sampleForm = new FormGroup({
      age : new FormControl(),
      sex : new FormControl(),
      creatinine : new FormControl(),
      lyve1 : new FormControl(),
      reg1b : new FormControl(),
      tff1 : new FormControl(),
      reg1a : new FormControl()
    });

    this.genderList = GenderList;

  }

  public areFormFieldsNotEmpty() : boolean{
    return this.sampleForm.get('age').value != null &&
      this.sampleForm.get('sex').value != null &&
      this.sampleForm.get('creatinine').value !=null &&
      this.sampleForm.get('lyve1').value != null &&
      this.sampleForm.get('reg1b').value != null &&
      this.sampleForm.get('tff1').value != null &&
      this.sampleForm.get('reg1a').value != null;
  }

  public sendAnalysisRequest() : void {

    if( this.areFormFieldsNotEmpty() ){

      // SampleDataContainer.addFromRequest(this.analysisRequester.PostRequest(
      //   this.sampleForm.get('age').value,
      //   (this.sampleForm.get('sex').value as Gender).exportName,
      //   this.sampleForm.get('creatinine').value,
      //   this.sampleForm.get('lyve1').value,
      //   this.sampleForm.get('reg1b').value,
      //   this.sampleForm.get('tff1').value,
      //   this.sampleForm.get('reg1a').value
      // ));

      console.error('Generated a sample sample to workaround CORS policy while Node.js server in background.');

      this.EventOccured(
        SampleDataContainer.addSample({
          age : 23,
          sex: 'M',
          creatinine: 0.15,
          LYVE1 : 0.15,
          REG1B : 0.15,
          TFF1: 0.15,
          REG1A: 0.15,
          diagnosis: 2,
          precision : 0.15}));

    }

  }

  public EventOccured(sample : SampleData) : void{
    this.router.navigateByUrl('/result', { state: { sample: sample } });
  }

  ngOnInit(): void { }

}
