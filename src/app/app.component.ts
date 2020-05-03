import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { rollIntro, afterRoll, fader, letsGo } from './app-animations';
import { ScrollTopService } from './scrolltop.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  	rollIntro,
    afterRoll,
    fader,
    letsGo
  ]
})

export class AppComponent implements OnInit {

  containerFluid=false;
  introImgWidth="198.75px";
  introImgHeight="120px";
  animationcomplete=false;

  constructor(private scrollTopService: ScrollTopService){
    if(window.innerWidth<700){
      this.containerFluid=true;
      this.introImgWidth="178.875px";
      this.introImgHeight="108px";
    }

  }
  
  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }


  title = 'miapp2';
  showBasePage=false;

  curStateIntroImg="contract";
  changeIntroImageState(){
    this.curStateIntroImg= 'expand';
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
      this.animationcomplete=true;

 	 }
  }

  prepareRoute(outlet: RouterOutlet){
    // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  disableRouteAnimations=false;

  disableRouteAnimation(event){
    this.disableRouteAnimations=true;
  }

}
