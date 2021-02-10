export class DiagnosisText {
  public constructor(
    readonly displayName : string,
    readonly exportName : string
  ){

  }
}

export const CancerPositive = new DiagnosisText('Positive',"2");
export const CancerNegative = new DiagnosisText('Negative',"1");
export const DiagnosisArray : DiagnosisText[] = [CancerPositive, CancerNegative];
