import { expect } from 'chai';
import { SpectronClient } from 'spectron';

import commonSetup from './common-setup';

describe('Cancer Detector App', function () {

  commonSetup.apply(this);

  let client: SpectronClient;

  beforeEach(function() {
    client = this.app.client;
  });

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

});
