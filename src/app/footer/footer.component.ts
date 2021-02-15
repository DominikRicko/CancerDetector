import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../environments/environment';
import { ElectronService } from '../core/services/electron/electron.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly nodeVersion: string;
  readonly electronVersion: string;
  readonly chromeVersion: string;
  readonly angularVersion: string;
  readonly webApp : boolean;

  constructor(readonly electronService: ElectronService) {

    this.webApp = AppConfig.environment != 'WEB';

    if(this.webApp){
      if (electronService.isElectron) {
        this.electronVersion = process.versions.electron;
      }
      else {
        this.electronVersion = null;
      }

      this.nodeVersion = process.versions.node;
      this.chromeVersion = process.versions.chrome;
    }

    this.angularVersion = '11';

  }

  ngOnInit(): void {
  }

}
