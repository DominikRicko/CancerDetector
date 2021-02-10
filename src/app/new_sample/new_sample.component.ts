import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SampleData } from '../shared/sampleData/SampleData';
import { WebService } from '../webService/Web.service';
import { Gender, GenderList} from '../shared/sampleData/Gender';

@Component({
  selector: 'app-home',
  templateUrl: './new_sample.component.html',
  styleUrls: ['./new_sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  public sampleForm: FormGroup;
  readonly genderList : Gender[];

  public sample : SampleData;

  constructor(private webService : WebService, private translator : TranslateService) {

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
      this.sample = new SampleData(
        this.sampleForm.get('age').value,
        this.sampleForm.get('sex').value,
        this.sampleForm.get('creatinine').value,
        this.sampleForm.get('lyve1').value,
        this.sampleForm.get('reg1b').value,
        this.sampleForm.get('tff1').value,
        this.sampleForm.get('reg1a').value
      );

      this.webService.PostRequest(this.sample);

    }

  }

  ngOnInit(): void { }

}
