import { Sex } from './SampleData.enum';
import { SampleAnalysisResult } from './SampleAnalysisResult';
import { IWebRequestable } from '../../webService/IWebRequestable';

export class SampleData implements IWebRequestable{

  private analysisResult : SampleAnalysisResult;

  public constructor(
    readonly age : number,
    readonly sex : Sex,
    readonly creatinine : number,
    readonly LYVE1 : number,
    readonly REG1B : number,
    readonly TFF1 : number,
    readonly REG1A : number
  ){

    this.analysisResult = null;
    samples.push(this);
  }
  generateRequest(): string {

    const gender = (this.sex==Sex.M)?('M'):('F');

    const request = {
      "Inputs": {
        "input1":
          [
            {
              'age': `${this.age}`,
              'sex': `${gender}`,
              'creatinine': `${this.creatinine}`,
              'LYVE1': `${this.LYVE1}`,
              'REG1B': `${this.REG1B}`,
              'TFF1': `${this.TFF1}`,
              'REG1A': `${this.REG1A}`
            }
          ]
      },
      "GlobalParameters": {}
    };

    return JSON.stringify(request);
  }

}

export const samples : SampleData[] = [];
