import { Component, OnInit } from '@angular/core';
import {RouterOutlet,Router} from '@angular/router';
import {rollIntro,afterRoll,fader} from '../app-animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
  	rollIntro,
    afterRoll,
    fader
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  coverimg ="assets/midocs/longimg.png";

  curStateIntroImg="contract";
  changeIntroImageState(){
    this.curStateIntroImg= (this.curStateIntroImg=="contract")?"expand":"contract";
  }




}
