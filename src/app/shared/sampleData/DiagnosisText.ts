export class DiagnosisText {
  public constructor(
    readonly displayName : string,
    readonly exportId : number
  ){}

  public toString() : string{
    return this.displayName;
  }

}

export const CancerPositive = new DiagnosisText('DATA.PANCREATIC_CANCER',2);
export const CancerNegative = new DiagnosisText('DATA.NOT_PANCREATIC_CANCER',3);
export const DiagnosisArray : DiagnosisText[] = [CancerPositive, CancerNegative];
