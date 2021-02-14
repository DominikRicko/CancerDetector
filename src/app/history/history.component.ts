import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { DataBindingDirective } from '@progress/kendo-angular-grid';

import { samples, SampleData } from '../shared/sampleData/SampleData';
import { Male, Female } from '../shared/sampleData/Gender';

import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit{
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: any[] = samples;
  public gridView: any[];

  public mySelection: string[] = [];

  private csvRecords: any[] = [];
  private header = true;

  public constructor(private ngxCsvParser: NgxCsvParser){
    samples.push(new SampleData(12, Male,0.15, 1,2,1,4, 1, 0.12));
    samples.push(new SampleData(21, Male,0.10, 4,1,3,2, 2, 0.25));
    samples.push(new SampleData(33, Male,0.10, 2,2,3,2, 2, 0.132));
    samples.push(new SampleData(17, Female,0.13, 1,1,3,4, 2, 0.34));
    samples.push(new SampleData(50, Female,0.12, 3,2,1,4, 1, 0.12));
    samples.push(new SampleData(56, Male,0.11, 5,2,4,1, 1, 0.50));

  }

  @ViewChild('fileInput', { static: false }) fileImportInput;

  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {

        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });

  }

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public ngAfterViewInit() : void{
    console.log(this.fileImportInput);
  }

  public ImportFile(inputType : string) : void{

    this.fileImportInput.nativeElement.setAttribute('accept',inputType);
    this.fileImportInput.nativeElement.click();
  }


  public ImportSamples(): void{
    this.ImportFile('.csv');

    //needs to wait for imported file


  }

  public ImportSamplesAndResults() : void{
    console.log("Import sample&Results called");
    this.ImportFile('.csv');

    //needs to wait for imported file


  }



}
