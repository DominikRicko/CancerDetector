import { DiagnosisText, DiagnosisArray } from './DiagnosisText';
import { Gender, GenderList } from './Gender';

export class SampleData {

  readonly id: number;

  public constructor(
    readonly age: number,
    readonly sex: Gender,
    readonly creatinine: number,
    readonly LYVE1: number,
    readonly REG1B: number,
    readonly TFF1: number,
    readonly REG1A: number,
    readonly diagnosis: number,
    readonly precision: number
  ) {

    this.id = samples.length;
  }

  public getDiagnosisText(): DiagnosisText {

    for (const diagnosisText of DiagnosisArray) {
      if (diagnosisText.exportName == this.diagnosis.toString()) return diagnosisText;
    }

    return null;

  }

  public static ParseJSON(JSONObject: any): SampleData {

    const values = JSONObject.Results.output1[0];

    let correctGender : Gender;

    for(const gender of GenderList){

      if(gender.exportName == values.sex)
        correctGender = gender;

    }

    console.log(values.age,
                correctGender,
                values.creatinine,
                values.LYVE1,
                values.REG1B,
                values.TFF1,
                values.REG1A,
                values["Scored Labels"],
                values["Scored Probabilities"]);


    return new SampleData(
      values.age,
      values.sex,
      values.creatinine,
      values.LYVE1,
      values.REG1B,
      values.TFF1,
      values.REG1A,
      values["Scored Labels"],
      values["Scored Probabilities"]);
  }

}

export const samples: SampleData[] = [];
