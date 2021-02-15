import { DiagnosisArray, DiagnosisText } from './DiagnosisText';
import { Gender, GenderList } from './Gender';
import { Observable } from 'rxjs';

export class SampleData {

  public constructor(
    readonly id : number,
    readonly age: number,
    readonly sex: Gender,
    readonly creatinine: number,
    readonly LYVE1: number,
    readonly REG1B: number,
    readonly TFF1: number,
    readonly REG1A: number,
    readonly diagnosis: DiagnosisText,
    readonly precision: number
  ) {}

  public export2Json(): any{
    return {
      age: this.age,
      sex: this.sex.exportName,
      creatinine: this.creatinine,
      LYVE1: this.LYVE1,
      REG1B: this.REG1B,
      TFF1: this.TFF1,
      REG1A: this.REG1A,
      diagnosis: this.diagnosis.exportId,
      precision: this.precision
    };

  }

}

export class SampleDataContainer{

  static readonly samples : SampleData[] = [];

  static addSample(data: {
    age: number,
    sex: string,
    creatinine: number,
    LYVE1: number,
    REG1B: number,
    TFF1: number,
    REG1A: number,
    diagnosis: number,
    precision: number
  }) : SampleData {

    let correctGender : Gender;

    for(const gender of GenderList){

      if(gender.exportName == data.sex)
        correctGender = gender;

    }

    let correctDiagnosis : DiagnosisText;

    for(const diagnosis of DiagnosisArray){

      if(diagnosis.exportId == data.diagnosis)
        correctDiagnosis = diagnosis;

    }

    const newSample = new SampleData(
      SampleDataContainer.samples.length,
      data.age,
      correctGender,
      data.creatinine,
      data.LYVE1,
      data.REG1B,
      data.TFF1,
      data.REG1A,
      correctDiagnosis,
      data.precision
    );
    SampleDataContainer.samples.push(newSample);
    return newSample;
  }

  static addFromRequest(sampleDataRequest : Observable<SampleData>) : void{
    sampleDataRequest.subscribe({
      next: (value) => {
        let jsonObject: any = JSON.parse(JSON.stringify(value));
        jsonObject = jsonObject.Results.output1[0];

        jsonObject.diagnosis = parseInt(jsonObject["Scored Labels"]);
        jsonObject.precision = jsonObject["Scored Probabilities"];

        SampleDataContainer.addSample(jsonObject);

      }
    });
  }
}
