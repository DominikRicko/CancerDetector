import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

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

  public changePrimaryButton(buttonNavigationUrl : string) : void{

    this.buttonHistoryIsSelected = false;
    this.buttonNewSampleIsSelected = false;
    this.buttonStatisticsIsSelected = false;

    switch(buttonNavigationUrl){
      case '/new_sample': this.buttonNewSampleIsSelected = true; break;
      case '/history' : this.buttonHistoryIsSelected = true; break;
      case '/statistics' : this.buttonStatisticsIsSelected = true; break;
    }
  }

  constructor( private router: Router ){

    this.buttonHistoryIsSelected = false;
    this.buttonNewSampleIsSelected = true;
    this.buttonStatisticsIsSelected = false;

    router.events.pipe(filter((e : RouterEvent)  => e instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        this.changePrimaryButton(e.url);
      });
  }

  ngOnInit() : void{
  }

}
