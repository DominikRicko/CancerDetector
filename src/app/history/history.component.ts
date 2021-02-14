import { Component, OnInit, ViewChild } from '@angular/core';

import { DataBindingDirective } from '@progress/kendo-angular-grid';

import { SampleDataContainer} from '../shared/sampleData/SampleData';
import { AnalysisRequester } from '../shared/analysisRequester/analysisRequester.service';

import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: any[] = SampleDataContainer.samples;
  public mySelection: string[] = [];

  public constructor(private ngxCsvParser: NgxCsvParser, private analysisRequester : AnalysisRequester){
    SampleDataContainer.addSample({age: 12, sex:'M', creatinine: 0.15, LYVE1: 1, REG1B: 2, TFF1: 1, REG1A: 4, diagnosis: 3, precision: 0.12});
    SampleDataContainer.addSample({age: 21, sex:'M', creatinine: 0.10, LYVE1: 4, REG1B: 1, TFF1: 3, REG1A: 2, diagnosis: 2, precision: 0.25});
    SampleDataContainer.addSample({age: 33, sex:'M', creatinine: 0.10, LYVE1: 2, REG1B: 2, TFF1: 3, REG1A: 2, diagnosis: 2, precision: 0.13});
    SampleDataContainer.addSample({age: 17, sex:'F', creatinine: 0.13, LYVE1: 1, REG1B: 1, TFF1: 3, REG1A: 4, diagnosis: 2, precision: 0.34});
    SampleDataContainer.addSample({age: 50, sex:'F', creatinine: 0.12, LYVE1: 3, REG1B: 2, TFF1: 1, REG1A: 4, diagnosis: 3, precision: 0.12});
    SampleDataContainer.addSample({age: 56, sex:'M', creatinine: 0.11, LYVE1: 5, REG1B: 2, TFF1: 4, REG1A: 1, diagnosis: 3, precision: 0.50});
  }

  @ViewChild('fileInput', { static: false }) fileImportInput;

  private postParseActions : (result: Array<any>) => void;

  fileChangeListener(files: File[]): void {

    for(const file of files){
      if (file.type != 'application/vnd.ms-excel') continue; //not CSV
      const observer = this.ngxCsvParser.parse(file, { header: true, delimiter: ',' }).pipe();
      observer.subscribe(() => {
        (error: NgxCSVParserError) => {
          console.error(error);
        };
      });
      observer.subscribe(this.postParseActions);
    }

  }

  public ngOnInit(): void {
  }

  public ImportFile(inputType : string) : void{

    this.fileImportInput.nativeElement.setAttribute('accept',inputType);
    this.fileImportInput.nativeElement.click();
  }

  public ImportSamples(): void{

    this.postParseActions = (result: Array<any>) => {

      console.log('Result', result);

      for(const resultItem of result){
        SampleDataContainer.addFromRequest(this.analysisRequester.PostRequest(
          resultItem.age,
          resultItem.sex,
          resultItem.creatinine,
          resultItem.LYVE1,
          resultItem.REG1B,
          resultItem.TFF1,
          resultItem.REG1A));

      }
    };

    this.ImportFile('.csv');
  }

  public ImportSamplesAndResults() : void{

    this.postParseActions = (result: Array<any>) => {

      for(const resultItem of result){
        SampleDataContainer.addFromCSV({
          age: parseInt(resultItem.age),
          sex: resultItem.sex,
          creatinine: parseFloat(resultItem.creatinine),
          LYVE1: parseFloat(resultItem.LYVE1),
          REG1B: parseFloat(resultItem.REG1B),
          TFF1: parseFloat(resultItem.TFF1),
          REG1A: parseFloat(resultItem.REG1A),
          diagnosis: parseInt(resultItem.diagnosis),
          precision: parseFloat(resultItem.precision)}
        );

      }

      console.log(SampleDataContainer.samples);

    };

    this.ImportFile('.csv');

  }

  public ExportData() : void{
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);

    const jsonArray : any[] = [];

    for(const sample of SampleDataContainer.samples){
      jsonArray.push(sample.export2Json());
    }

    csvExporter.generateCsv(jsonArray);
  }

  public RequestCSVExport() : void{

  }

}
