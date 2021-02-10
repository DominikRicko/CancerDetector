import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  public data: any[] = [{
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }, {
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }];


  constructor() { }

  ngOnInit(): void { }

  public labelContent(e: any): string {
    return e.category;
  }

}
