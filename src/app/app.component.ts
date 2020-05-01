import { Component } from '@angular/core';
import {RouterOutlet,Router} from '@angular/router';
import {rollIntro,afterRoll,fader} from './app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  	rollIntro,
    afterRoll,
    fader
  ]
})
export class AppComponent {
  title = 'miapp2';
  coverimg ="assets/midocs/longimg.png";
  showBasePage=false;

  curStateIntroImg="contract";
  changeIntroImageState(){
    this.curStateIntroImg= (this.curStateIntroImg=="contract")?"expand":"contract";
    // this.showBasePage=true;
  }


  positionOnPage="center";
  basePageState="hide";
  stateLetsGo="initialLetsGo";
  getBasePage(event){
  	if (event.totalTime>0){
	  	this.showBasePage=true;
	  	this.curStateIntroImg="moveLeft";
      this.positionOnPage="topLeft";
      this.basePageState="show";
      this.stateLetsGo="finalLetsGo";

 	 }
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  disableRouteAnimations=false;

  disableRouteAnimation(event){
    this.disableRouteAnimations=true;
  }

}
