import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SampleData } from '../shared/sampleData/SampleData';
import * as SampleEnums from '../shared/sampleData/SampleData.enum';

@Component({
  selector: 'app-home',
  templateUrl: './new_sample.component.html',
  styleUrls: ['./new_sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  public sampleForm: FormGroup;
  readonly genderList : SampleEnums.Sex[] = [];
  readonly patientCohortList : SampleEnums.Cohort[] = [];
  readonly sampleOrigin: SampleEnums.Origin[] = [];
  readonly diagnosedStageList : SampleEnums.Stage[] = [];
  readonly benignDiagnosisList : SampleEnums.BenignSampleDiagnosis[] = [];

  public sample : SampleData;

  constructor() {

    this.sampleForm = new FormGroup({
      sampleId : new FormControl(),
      age : new FormControl(),
      sex : new FormControl(),
      patientCohort : new FormControl(),
      sampleOrigin : new FormControl(),
      plasmaCA19_9 : new FormControl(),
      creatine : new FormControl(),
      stage : new FormControl(),
      benign_sample_diagnosis : new FormControl()
    });

    for (const enumValue of Object.values(SampleEnums.Sex)) this.genderList.push(enumValue);
    for (const enumValue of Object.values(SampleEnums.Cohort)) this.patientCohortList.push(enumValue);
    for (const enumValue of Object.values(SampleEnums.Origin)) this.sampleOrigin.push(enumValue);
    for (const enumValue of Object.values(SampleEnums.Stage)) this.diagnosedStageList.push(enumValue);
    for (const enumValue of Object.values(SampleEnums.BenignSampleDiagnosis)) this.benignDiagnosisList.push(enumValue);

  }

  public sendAnalysisRequest() : void {

    this.sample = new SampleData(
      this.sampleForm.get('sampleId').value,
      this.sampleForm.get('age').value,
      this.sampleForm.get('sex').value,
      this.sampleForm.get('patientCohort').value,
      this.sampleForm.get('sampleOrigin').value,
      this.sampleForm.get('creatine').value,
      this.sampleForm.get('plasmaCA19_9').value,
      this.sampleForm.get('stage').value,
      this.sampleForm.get('benign_sample_diagnosis').value
    );

    console.log(this.sample);
  }

  ngOnInit(): void { }

}
