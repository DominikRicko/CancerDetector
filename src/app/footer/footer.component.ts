import { Component, OnInit } from '@angular/core';
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

  constructor(readonly electronService: ElectronService) {

    if(this.electronService.isElectron){
      this.electronVersion = process.versions.electron;
      this.nodeVersion = process.versions.node;
      this.chromeVersion = process.versions.chrome;
    }

    this.angularVersion = '11';

  }

  ngOnInit(): void {
  }

}
