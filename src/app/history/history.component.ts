import { Component, OnInit, ViewChild } from '@angular/core';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: any[] = [];
  public gridView: any[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: 'full_name',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'job_title',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'budget',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'phone',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'address',
            operator: 'contains',
            value: inputValue
          }
        ],
      }
    }).data;

    this.dataBinding.skip = 0;
  }

}
