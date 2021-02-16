import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SampleDataContainer } from '../shared/sampleData/SampleData';
import { AnalysisRequester } from '../shared/analysisRequester/analysisRequester.service';
import { Gender, GenderList} from '../shared/sampleData/Gender';

@Component({
  selector: 'app-home',
  templateUrl: './new_sample.component.html',
  styleUrls: ['./new_sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  public sampleForm: FormGroup;
  readonly genderList : Array<Gender>;

  public diagnosis = "";
  public precision = 0;

  readonly minValue = 0;
  readonly format = 'n0';

  constructor(private analysisRequester : AnalysisRequester) {
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

      const analysisObserver = this.analysisRequester.PostRequest(
        this.sampleForm.get('age').value,
        (this.sampleForm.get('sex').value as Gender).exportName,
        this.sampleForm.get('creatinine').value,
        this.sampleForm.get('lyve1').value,
        this.sampleForm.get('reg1b').value,
        this.sampleForm.get('tff1').value,
        this.sampleForm.get('reg1a').value
      );

      const sampleDataObservable = SampleDataContainer.addFromRequest(analysisObserver);
      sampleDataObservable.subscribe((sampleData) => {
        this.diagnosis = sampleData.diagnosis.displayName;
        this.precision = sampleData.precision;
      });

    }

  }

  ngOnInit(): void { }

}
