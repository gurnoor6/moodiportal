import { Component } from '@angular/core';
import {RouterOutlet,Router} from '@angular/router';
import {rollIntro,slideLeft} from './app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  	rollIntro,
  	slideLeft
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

  getBasePage(event){
  	if (event.totalTime>0){
	  	this.showBasePage=true;
	  	this.curStateIntroImg="moveLeft";
 	 }
  }

}
