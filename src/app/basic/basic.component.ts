import { Component, OnInit } from '@angular/core';
import {splitScreen,toggleText} from './basic-animation';
import{Competition,competitionsList} from './competitioninterface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  animations:[
  	splitScreen,
  	toggleText
  ]
})
export class BasicComponent implements OnInit {

  imgstate="s1";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  imgSlide(comp:Competition){
  	this.imgstate= (this.imgstate=="s1")?"s2":"s1";
  	comp.state= (comp.state=="s1")?"s2":"s1";
  }
  competitionslist = competitionsList;

  description="Ignores any animations that are performed when the user first opens or navigates to this page. The filter narrows what is already there, so it assumes that any HTML elements to be animated already exist in the DOM."

  rulesNavigate(comp:Competition){
    this.router.navigate(['/rules',comp.id]);
  }
}
