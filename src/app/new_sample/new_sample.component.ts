import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './new_sample.component.html',
  styleUrls: ['./new_sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  public sampleForm: FormGroup;
  readonly genderList : Array<string> = ["Male", "Female"];
  readonly patientCohortList : Array<string> = ["Cohort 1", "Cohort 2"];
  readonly sampleOrigin: Array<string> = [
    "Barts Pancreas Tissue Bank, London, UK",
    "Spanish National Cancer Research Centre, Madrid, Spain",
    "Liverpool University, UK",
    "University College London, UK",
  ];
  readonly diagnosedStageList : Array<string> = ["IA", "IB", "IIA", "IIIB", "III", "IV"];
  readonly benignDiagnosisList : Array<string> = [
    "Pancreatitis",
    "Chronic pancreatitis",
    "Galistones",
    "Alchol-chronic pancreatitis",
    "Cholecystitis"
  ];

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


  }

  public sendAnalysisRequest() : void {
    console.log(this.sampleForm.get('age').value);
    console.log(this.sampleForm.get('sampleId').value);
    console.log(this.sampleForm.get('sex').value);
    console.log(this.sampleForm.get('patientCohort').value);
    console.log(this.sampleForm.get('plasmaCA19_9').value);
    console.log(this.sampleForm.get('creatine').value);
    console.log(this.sampleForm.get('stage').value);
    console.log(this.sampleForm.get('benign_sample_diagnosis').value);
  }

  ngOnInit(): void { }

}
