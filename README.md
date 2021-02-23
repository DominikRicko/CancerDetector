# Cancer Detector

The idea behind this software is to utilize machine learning over a set of sample data in order to predict if a person has pancreatic cancer, based on urine biomarkers such as: TFF1, LYVE1, REG1B, REG1A and Creatinine.

This application is the frontend for the machine learning web service that is hosted by Azure ML Studio and is used to send sample analysis requests, review, export, filter and sort all previously sent requests in current app session, import past request results and to view statistics about currently stored samples.

### Standalone application

Standalone application can be found in the release tab on GitHub repository.

## Workspace

Steps to successfully set up the workspace:

1. Clone the repository `git clone https://github.com/DominikRicko/CancerDetector.git`
2. Install the dependancies `npm install`
3. (Optional) Install Angular CLI in order to be able to generate Angular components. `npm install -g @angular/cli`
   
## Building the workspace

### Browser mode

Maybe you only want to execute the application in the browser with hot reload? Just run `npm run ng:serve:web`.

### Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:build`| Builds your application and creates an app consumable based on your operating system |
|`npm run test`| Executes Angular unit tests. |
|`npm run test:watch`| Executes Angular unit tests after each file change while this command is running. |
|`npm run e2e`| Executes Electron's End-to-End tests. |

## Testing

There are 2 types of testing available on this repository, Unit tests for Angular, and End-to-End testing for Electron.

Angular's unit tests are done using [Jasmin test framework](https://jasmine.github.io/) and [Karma test runner](https://karma-runner.github.io/latest/index.html). Test files for these Angular unit tests are stored [in the same folder where the file that they are testing is at](https://angular.io/guide/testing#place-your-spec-file-next-to-the-file-it-tests) and is named with the `.spec.ts` suffix so that tooling can identify is at a file with tests. Jasmin also offers coverage report which can be found in coverage folder after running the tests. The report of running these tests is written in the console that ran the `npm run test` command. 

Electron's E2E tests are done using [Spectron testing framework](https://www.electronjs.org/spectron) with [Chai as promised](https://github.com/domenic/chai-as-promised) in order to easily handle `Promises` that are a necessity when using WebdriverIO (used by Spectron). E2E tests are found in the e2e folder of this repository. The report of running these tests is written in the console that ran the `npm run e2e` command.

### Example Angular component for unit testing

Statistics component shows different line and pie charts that visually describe variety in values of certain data type
in the stored samples.

```ts
import { Component, OnInit } from '@angular/core';
 
import { ChartDisplayableArray } from '../charts/chartDisplayableArray';
import { SampleDataContainer } from '../shared/sampleData/SampleData';
 
@Component({
  selector: 'app-detail',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
 
  readonly ageChartData : ChartDisplayableArray;
  readonly genderChartData : ChartDisplayableArray;
  readonly creatinineChartData : ChartDisplayableArray;
  readonly lyve1ChartData : ChartDisplayableArray;
  readonly reg1bChartData : ChartDisplayableArray;
  readonly tff1ChartData : ChartDisplayableArray;
  readonly reg1aChartData : ChartDisplayableArray;
  readonly diagnosisChartData : ChartDisplayableArray;
 
  readonly averagePrecision : number;
  readonly sampleCount : number;
  constructor() {
    this.ageChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'age', 5);
    this.genderChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'sex', 2, {numeric : false});
    this.creatinineChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'creatinine', 5);
    this.lyve1ChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'LYVE1', 5);
    this.reg1bChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'REG1B',5);
    this.tff1ChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'TFF1',5);
    this.reg1aChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'REG1A', 5);
    this.diagnosisChartData = new ChartDisplayableArray(SampleDataContainer.samples, 'diagnosis', 2, {numeric : false});
 
    this.sampleCount = SampleDataContainer.samples.length;
    this.averagePrecision = 0;
 
    Iif(this.sampleCount == 0){
      return;
    }
 
    for(const sample of SampleDataContainer.samples){
      this.averagePrecision+=sample.precision;
    }
 
    this.averagePrecision/=this.sampleCount;
  }
 
  ngOnInit(): void { }
 
```

### Example unit test of previous component

There are 2 things to test here, first is if the page will load, and second if it will calculate the average accuracy percentage correctly. This is done in the next fashion:

`describe`, as the name suggests, is used to describe what is currently being tested, tests appropriate for the component/class are written in the describe block, as well as anything else used in these tests.
`beforeAll` is used to perform some actions before the tests start running.
`beforeEach` is used to perform actions before each test.
The way to write a test is by using the function `it`. In `it` it is described what the test is testing for, and what actions does the test perform. By using the function `expect` with methods `toEqual` or `toBeTruthy` it is determined wether the test has passed or failed.

```ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { TranslateModule } from '@ngx-translate/core';

import { RouterTestingModule } from '@angular/router/testing';

import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';
import { AppModule } from '../app.module';
import { SampleData, SampleDataContainer } from '../shared/sampleData/SampleData';
import { Female, Male } from '../shared/sampleData/Gender';
import { CancerNegative, CancerPositive } from '../shared/sampleData/DiagnosisText';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeAll(() => {
    SampleDataContainer.samples.splice(0, SampleDataContainer.samples.length);
    SampleDataContainer.samples.push(new SampleData(1, 22, Male, 17, 21, 18, 18, 19, CancerNegative, 0.68));
    SampleDataContainer.samples.push(new SampleData(2, 20, Male, 18, 20, 20, 19, 21, CancerNegative, 0.58));
    SampleDataContainer.samples.push(new SampleData(3, 18, Male, 19, 19, 19, 20, 17, CancerNegative, 0.32));
    SampleDataContainer.samples.push(new SampleData(4, 23, Female, 20, 18, 21, 17, 18, CancerNegative, 0.14));
    SampleDataContainer.samples.push(new SampleData(5, 23, Female, 21, 17, 17, 21, 20, CancerPositive, 0.89));

  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsComponent, LineChartComponent, PieChartComponent ],
      imports: [TranslateModule.forRoot(), RouterTestingModule, AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct precision', () => {

    expect(component.averagePrecision).toEqual(0.522);

  });

});
```
### Expected output

Anything in these tests that called console.log() method will also be displayed here. This extends to non-test classes and components as well.
```
...
Electron 11.3.0 (Node 12.18.3): Executed 8 of 26 SUCCESS (0 secs / 1.163 secs)
LOG: '
      *****************************************************
      ***      For Custom Software/Web development      ***
      *** Reach out to us at contact@developershive.com ***
      ***  Support us https://patreon.com/tofiqquadri/  ***
      ***     Visit us at https://developershive.com    ***
      *****************************************************
Electron 11.3.0 (Node 12.18.3): Executed 26 of 26 SUCCESS (2.743 secs / 2.253 secs)
TOTAL: 26 SUCCESS
TOTAL: 26 SUCCESS
```

### E2E testing example

E2E tests are performed on completely compiled and loaded apps, therefore there is no need to write mock components or services that may have been required in Angular's unit tests. Using WebdriverIO's API it is possible to fetch webpage elements as you would from a website. Thanks to `Chai as promised`, the test syntax is similar to Jasmin's tests with minor differences of it being `async` functions with `await` keywords.

```ts
import { expect, assert } from 'chai';
import { SpectronClient } from 'spectron';

import commonSetup from './common-setup';

describe('Cancer Detector App', function () {

  commonSetup.apply(this);

  let client: SpectronClient;

  beforeEach(function() {
    client = this.app.client;
  });

  async function navigateButtonCall(buttonName : string) : Promise<boolean>{
    const historyRegEx = new RegExp('\\b' + buttonName + '\\b');
    const buttons = await client.$$('button');
    let btnHistory : WebdriverIO.Element = null;

    for(const element of buttons){
      if(historyRegEx.test((await element.getText()))){
        btnHistory = element;
      }
    }

    if(btnHistory == null) return false;

    btnHistory.click();

    return true;
  }

  it('creates initial windows', async function () {
    const count = await client.getWindowCount();
    expect(count).to.equal(1);
  });

  it('should navigate to new_sample', async function () {
    const url = await client.getUrl();
    const urlParts = url.split('/');

    let result = false;
    for(const urlPart of urlParts){
      if(urlPart == 'new_sample') result = true;
    }

    expect(result).to.equal(true);
  });

  it('should navigate to history', async function() {

    if(!(await navigateButtonCall('History'))) assert.fail("Did not find the button");

    const url = await client.getUrl();
    const urlParts = url.split('/');

    let result = false;
    for(const urlPart of urlParts){
      if(urlPart == 'new_sample') result = true;
    }

    expect(result).to.equal(true);
  });

  it('should navigate to statistics', async function() {

    if(!(await navigateButtonCall('Statistics'))) assert.fail("Did not find the button");

    const url = await client.getUrl();
    const urlParts = url.split('/');

    let result = false;
    for(const urlPart of urlParts){
      if(urlPart == 'new_sample') result = true;
    }

    expect(result).to.equal(true);
  });

  //Can't test file dialogs with WebdriverIO
  //Can't test sending requests to web service because of CORS policy

});

```
### Expected output

```

  Cancer Detector App
    √ creates initial windows
    √ should navigate to new_sample
    √ should navigate to history (193ms)
    √ should navigate to statistics (87ms)


  4 passing (23s)

```
