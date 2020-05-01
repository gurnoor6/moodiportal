import { Component, OnInit } from '@angular/core';
import {rollIntro,afterRoll} from '../app-animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations:[
  rollIntro,
  afterRoll
  ]
})
export class IntroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  stateIntroImg="contract";
  changeImgState(){
  	this.stateIntroImg="expand";
  }

  navigateHome(event){
  	if(event.totalTime>0){
  		this.router.navigate(['home']);
  	}


  }
}
