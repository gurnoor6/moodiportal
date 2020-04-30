import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rulesDescription,rulesList} from './rules-interface';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  competitionId;
  rulesandregulations;
  competitionRule;
  prizes;

  ngOnInit():void {
  	let id= parseInt(this.route.snapshot.paramMap.get('id'));
  	this.competitionId = id;
  	this.competitionRule = rulesList.find(o=>o.id==id);
  	this.rulesandregulations = this.competitionRule.rulesandregulations;
  	this.prizes = this.competitionRule.prizes;
  }


  


}
