import { Sex, Cohort, Origin, Stage, BenignSampleDiagnosis } from './SampleData.enum';
import { SampleAnalysisResult } from './SampleAnalysisResult';

export class SampleData {

  public get ID() : string {
    return this._ID;
  }

  public get age() : number {
    return this._age;
  }

  public get sex() : Sex {
    return this._sex;
  }

  public get cohort() : Cohort {
    return this._cohort;
  }

  public get origin() : Origin {
    return this._origin;
  }

  public get creatine() : number {
    return this._creatine;
  }

  public get plasmaCA19_9() : number {
    return this._plasmaCA19_9;
  }

  public get stage() : Stage {
    return this._stage;
  }

  public get benignSampleDiagnosis() : BenignSampleDiagnosis {
    return this._benignSampleDiagnosis;
  }

  private analysisResult : SampleAnalysisResult;

  public constructor(
    private _ID : string,
    private _age : number,
    private _sex : Sex,
    private _cohort : Cohort,
    private _origin : Origin,
    private _creatine : number,
    private _plasmaCA19_9 : number,
    private _stage : Stage,
    private _benignSampleDiagnosis : BenignSampleDiagnosis){

      this.analysisResult = null;
      samples.push(this);

    }

}

export var samples : SampleData[] = [];
