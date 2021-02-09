import { Diagnosis } from './SampleData.enum';

export class SampleAnalysisResult {

  public get diagnosis() : Diagnosis{
    return this._diagnosis;
  }

  public get precision() : number{
    return this._precision;
  }

  public constructor(
    private _diagnosis : Diagnosis,
    private _precision : number,
  ){
  }

}
