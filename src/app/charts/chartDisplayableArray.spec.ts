import { CancerNegative, CancerPositive } from '../shared/sampleData/DiagnosisText';
import { Female, Male } from '../shared/sampleData/Gender';
import { SampleData, SampleDataContainer } from './../shared/sampleData/SampleData';
import { ChartDisplayableArray } from './chartDisplayableArray';

describe('ChartDisplayArray', () => {

  beforeAll(() => {
    SampleDataContainer.samples.splice(0, SampleDataContainer.samples.length);
    SampleDataContainer.samples.push(new SampleData(1, 22, Male, 17, 21, 18, 18, 19, CancerNegative ,0.68));
    SampleDataContainer.samples.push(new SampleData(2, 20, Male, 18, 20, 20, 19, 21, CancerNegative ,0.58));
    SampleDataContainer.samples.push(new SampleData(3, 18, Male, 19, 19, 19, 20, 17, CancerNegative ,0.32));
    SampleDataContainer.samples.push(new SampleData(4, 23, Female, 20, 18, 21, 17, 18, CancerNegative ,0.14));
    SampleDataContainer.samples.push(new SampleData(5, 23, Female, 21, 17, 17, 21, 20, CancerPositive ,0.89));

  });

  const resultGenderData = [
    {value: 3, category: "DATA.MALE"},
    {value: 2, category: "DATA.FEMALE"}
  ];

  const resultAgeData = [
    {value: 1, category: "18"},
    {value: 0, category: "19"},
    {value: 1, category: "20"},
    {value: 0, category: "21"},
    {value: 1, category: "22"},
    {value: 2, category: "23"}];

  it('should create non-numeric data array', () => {
    const chartDisplayableArray = new ChartDisplayableArray(SampleDataContainer.samples,'sex', 2, {numeric: false});

    expect(chartDisplayableArray.dataSeries[0].data).toEqual(resultGenderData);
  });

  it('should create a numeric data array', () => {
    const chartDisplayableArray = new ChartDisplayableArray(SampleDataContainer.samples, 'age', 3, {numeric: true, range: 1});

    expect(chartDisplayableArray.dataSeries[0].data).toEqual(resultAgeData);
  });

  it('should create a numeric data array with step of 1', () => {
    const chartDisplayableArray = new ChartDisplayableArray(SampleDataContainer.samples, 'age', 6, {numeric: true, range: 1});

    expect(chartDisplayableArray.valueAxis.labels.step).toEqual(1);
  });
});
