import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  public buttonNewSampleIsSelected : boolean;
  public buttonHistoryIsSelected : boolean;
  public buttonStatisticsIsSelected : boolean;
  public languageList : Array<string>;

  public changePrimaryButton(buttonNavigationUrl : string) : void{

    this.buttonHistoryIsSelected = false;
    this.buttonNewSampleIsSelected = false;
    this.buttonStatisticsIsSelected = false;

    switch(buttonNavigationUrl){
      case '/new_sample': this.buttonNewSampleIsSelected = true; break;
      case '/history' : this.buttonHistoryIsSelected = true; break;
      case '/statistics' : this.buttonStatisticsIsSelected = true; break;
    }
    this.languageList = ['HR', 'EN'];
  }

  public selectLanguage(e : string) : void{
    switch(e){
      case 'HR': this.translate.setDefaultLang('hr'); break;
      case 'EN': this.translate.setDefaultLang('en'); break;
    }
  }

  constructor( private router: Router, private translate : TranslateService ){

    this.buttonHistoryIsSelected = false;
    this.buttonNewSampleIsSelected = true;
    this.buttonStatisticsIsSelected = false;

    router.events.pipe(filter((e : RouterEvent)  => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.changePrimaryButton(e.urlAfterRedirects);
      });
  }

  ngOnInit() : void{
  }

}
