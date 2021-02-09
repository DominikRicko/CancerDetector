import { Sex } from './SampleData.enum';
import { SampleAnalysisResult } from './SampleAnalysisResult';
import { IWebRequestable } from '../../webService/IWebRequestable';

export class SampleData implements IWebRequestable{

  private analysisResult : SampleAnalysisResult;

  public constructor(
    readonly age : number,
    readonly sex : Sex,
    readonly creatine : number,
    readonly LYVE1 : number,
    readonly REG1B : number,
    readonly TFF1 : number,
    readonly REG1A : number
  ){

    this.analysisResult = null;
    samples.push(this);
  }
  generateRequest(): string {
    const request = {
      Inputs: {
        input1: {
          ColumnNames: [
            "age",
            "sex",
            "creatine",
            "LYVE1",
            "REG1B",
            "TFF1",
            "REG1A"
          ],
          Values: [
            this.age,
            this.sex,
            this.creatine,
            this.LYVE1,
            this.REG1B,
            this.TFF1,
            this.REG1A
          ]
        }
      },
      globalParameters: {}
    };

    return JSON.stringify(request);
  }

}

export const samples : SampleData[] = [];
