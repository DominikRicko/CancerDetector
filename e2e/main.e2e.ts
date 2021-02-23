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
