import { DiagnosisText, DiagnosisArray } from './DiagnosisText';

export class SampleAnalysisResult {

  public constructor(
    readonly diagnosis : number,
    readonly precision : number
  ){}

  public getDiagnosisText() : DiagnosisText{

    for(const diagnosisText of DiagnosisArray){
      if (diagnosisText.exportName == 'diagnosis') return diagnosisText;
    }

    return null;

  }

}
