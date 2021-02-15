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
  public gridData = SampleDataContainer.samples;
  public mySelection: string[] = [];

  public constructor(private ngxCsvParser: NgxCsvParser, private analysisRequester : AnalysisRequester){}

  public refreshGrid() : void{
    this.gridData = SampleDataContainer.samples;
    console.log("Grid refreshed");
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
        SampleDataContainer.addSample({
          age: parseInt(resultItem.age),
          sex: resultItem.sex,
          creatinine: parseFloat(resultItem.creatinine),
          LYVE1: parseFloat(resultItem.LYVE1),
          REG1B: parseFloat(resultItem.REG1B),
          TFF1: parseFloat(resultItem.TFF1),
          REG1A: parseFloat(resultItem.REG1A),
          diagnosis: resultItem.diagnosis,
          precision: parseFloat(resultItem.precision)}
        );

      }

      this.gridData = SampleDataContainer.samples;

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
    };
    const csvExporter = new ExportToCsv(options);

    const jsonArray : any[] = [];

    for(const sample of SampleDataContainer.samples){
      jsonArray.push(sample.export2Json());
    }

    csvExporter.generateCsv(jsonArray);
  }

  public DeleteSelected() : void{

    this.gridData.splice(1,1);

    for(const selectedIdStringed of this.mySelection){
      const selectedId = parseInt(selectedIdStringed);

      for(let arrayIndex = 0; arrayIndex < SampleDataContainer.samples.length; arrayIndex++){

        if(SampleDataContainer.samples[arrayIndex].id == selectedId){
          SampleDataContainer.samples.splice(arrayIndex, 1);
          arrayIndex--;
        }
      }
    }
  }

}
