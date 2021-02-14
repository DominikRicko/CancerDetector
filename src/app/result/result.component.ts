import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() diagnosis : string;
  @Input() precision : number;

  constructor() {
  }

  ngOnInit() : void {
  }

}
