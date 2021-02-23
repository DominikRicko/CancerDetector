import { SampleData, SampleDataContainer } from './SampleData';
import { Male } from './Gender';
import { CancerNegative } from './DiagnosisText';
import { AsyncSubject } from 'rxjs';

describe("Sample Data & Container", () => {

  it("should export to proper JSON", () => {

    const jsonResult = {
      age: 22,
      sex: 'M',
      creatinine: 17,
      LYVE1: 21,
      REG1B: 18,
      TFF1: 18,
      REG1A: 19,
      diagnosis: 3,
      precision: 0.68
    };

    const sample = new SampleData(1, 22, Male, 17, 21, 18, 18, 19, CancerNegative ,0.68);
    const json = sample.export2Json();

    expect(json).toEqual(jsonResult);
  });

  it("should add sample", () => {
    SampleDataContainer.samples.splice(0, SampleDataContainer.samples.length);
    SampleDataContainer.addSample({age : 22, sex : "M", creatinine: 17, LYVE1:  21, REG1B: 18, TFF1: 18, REG1A: 19, diagnosis: 2 , precision: 0.68});

    expect(SampleDataContainer.samples.length).toEqual(1);
  });

  it("should add sample from request", () => {
    SampleDataContainer.samples.splice(0, SampleDataContainer.samples.length);
    const mockResponse = {
      "Results": {
        "output1": {
          0: {
            "age": "20",
            "sex": "M",
            "creatinine": "21",
            "LYVE1": "21",
            "TFF1": "21",
            "REG1B": "21",
            "REG1A": "21",
            "Scored Labels": "3",
            "Scored Probabilities": "0.87"
          }
        }
      }
    };

    const mockRequestObservable = new AsyncSubject<any>();
    mockRequestObservable.next(mockResponse);

    SampleDataContainer.addFromRequest(mockRequestObservable);

    mockRequestObservable.complete();
    expect(SampleDataContainer.samples.length).toEqual(1);
  });

});
