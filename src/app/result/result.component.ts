import { Component, OnInit, Input } from '@angular/core';
import { SampleData } from '../shared/sampleData/SampleData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() sampleData : SampleData;

  constructor(
    private router : Router
  ) {
    this.sampleData = (this.router.getCurrentNavigation().extras.state.sample as SampleData);
  }

  ngOnInit() : void {
    this.sampleData = history.state.sample;
  }

}
