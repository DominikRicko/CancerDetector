export class DiagnosisText {
  public constructor(
    readonly displayName : string,
    readonly exportId : number
  ){}

  public toString() : string{
    return this.displayName;
  }

}

export const CancerPositive = new DiagnosisText('{{ "PANCREATIC_CANCER" | translate }}',2);
export const CancerNegative = new DiagnosisText('{{ "NOT_PANCREATIC_CANCER" | translate }}',3);
export const DiagnosisArray : DiagnosisText[] = [CancerPositive, CancerNegative];
