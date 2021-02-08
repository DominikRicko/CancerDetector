import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './new_sample.component.html',
  styleUrls: ['./new_sample.component.scss']
})
export class NewSampleComponent implements OnInit {

  public sampleForm: FormGroup;

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

  public doSomething() : void {
    console.log(this.sampleForm.get('age').value);
  }

  ngOnInit(): void { }

}
