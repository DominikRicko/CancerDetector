import { Component, OnInit, Input } from '@angular/core';
import { SampleData } from '../shared/sampleData/SampleData';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() sampleData : SampleData;

  constructor() { }

  ngOnInit() : void {
  }

}
