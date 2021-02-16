import { SampleData } from '../shared/sampleData/SampleData';

export class ChartDisplayableArray {

  readonly dataSeries = [{
    field: 'value',
    categoryField: 'category',
    data: [{}]
  }];

  readonly data;
  readonly min : number;
  readonly max : number;
  readonly valueAxis = {
    line: {
      width: 1
    },
    labels: {
      step: 1
    },
    min: 0,
    max: 0,
  };

  readonly categoryAxis = {
    labels: {
      rotation: 'auto',
      format: '{0:0}',
      visible: true,
      step: 0
    },
    majorGridLines: {
      visible: false
    },
    majorTicks: {
      visible: false
    },
    roundToBaseUnit: true
  };

  public constructor(
    samples: SampleData[],
    displayProperty: string,
    maxCategories: number,
    options: { numeric?: boolean, range?: number } = { numeric: true, range: 1 }) {
    this.data = [];
    const counter = [];

    if (samples.length == 0) return;

    if (options.numeric) {

      this.max = samples[0][displayProperty];
      this.min = samples[0][displayProperty];

      for (const sample of samples) {

        if (this.max < sample[displayProperty]) this.max = sample[displayProperty];
        if (this.min > sample[displayProperty]) this.min = sample[displayProperty];

      }

      const offset = this.min%options.range;

      for (let i = this.min; i <= this.max + offset; i += options.range)
        counter[i] = 0;

      for (const sample of samples){

        let value = sample[displayProperty] as number;
        value = value - (value%options.range);
        counter[offset + value]++;
      }

      if (maxCategories < this.max - this.min) {
        this.categoryAxis.labels.step = Math.floor((this.max - this.min) / maxCategories);
      }
      else {
        this.categoryAxis.labels.step = 1;
      }

    }
    else {

      for (const sample of samples)
        counter[sample[displayProperty].displayName] = 0;

      for (const sample of samples)
        counter[sample[displayProperty].displayName]++;

    }

    // eslint-disable-next-line @typescript-eslint/no-for-in-array
    for (const key in counter) {
      this.data.push({ value: counter[key], category: key });
    }

    this.max = 0;
    this.min = Number.MAX_SAFE_INTEGER;

    // eslint-disable-next-line @typescript-eslint/no-for-in-array
    for (const key in counter) {

      if (this.max < counter[key]) this.max = counter[key];
      if (this.min > counter[key]) this.min = counter[key];
    }

    this.valueAxis.max = this.max;
    this.valueAxis.min = this.min;

    this.dataSeries[0].data = this.data;
  }

}
