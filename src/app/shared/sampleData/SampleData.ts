import { DiagnosisArray, DiagnosisText } from './DiagnosisText';
import { Gender, GenderList } from './Gender';
import { AsyncSubject, Observable } from 'rxjs';

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
  static nextId = 0;

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

    if(isNaN(data.age) ||
    isNaN(data.creatinine) ||
    isNaN(data.LYVE1) ||
    isNaN(data.REG1B) ||
    isNaN(data.TFF1) ||
    isNaN(data.REG1A) ||
    isNaN(data.diagnosis) ||
    isNaN(data.precision)){
      throw("Invalid data.");
    }

    let correctGender : Gender;
    let correctData = false;

    for(const gender of GenderList){

      if(gender.exportName == data.sex){
        correctGender = gender;
        correctData = true;
      }

    }

    let correctDiagnosis : DiagnosisText;

    if(!correctData) throw("invalid data");

    correctData = false;
    for(const diagnosis of DiagnosisArray){

      if(diagnosis.exportId == data.diagnosis){
        correctDiagnosis = diagnosis;
        correctData = true;
      }

    }

    if(!correctData) throw("invalid data");

    const newSample = new SampleData(
      SampleDataContainer.nextId++,
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

  static addFromRequest(sampleDataRequest : Observable<any>) : Observable<SampleData>{

    const observable = new AsyncSubject<SampleData>();
    sampleDataRequest.subscribe({
      next: (value) => {
        const jsonObject: any = JSON.parse(JSON.stringify(value));

        for(const sampleResult of jsonObject.Results.output1){

          sampleResult.age = parseInt(sampleResult.age);
          sampleResult.creatinine = parseFloat(sampleResult.creatinine);
          sampleResult.LYVE1 = parseFloat(sampleResult.LYVE1);
          sampleResult.TFF1 = parseFloat(sampleResult.TFF1);
          sampleResult.REG1B = parseFloat(sampleResult.REG1B);
          sampleResult.REG1A = parseFloat(sampleResult.REG1A);
          sampleResult.diagnosis = parseInt(sampleResult["Scored Labels"]);
          sampleResult.precision = parseFloat(sampleResult["Scored Probabilities"]);

          observable.next(SampleDataContainer.addSample(sampleResult));

        }

        observable.complete();
      }
    });

    return observable;

  }
}
