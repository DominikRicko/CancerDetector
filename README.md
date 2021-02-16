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
