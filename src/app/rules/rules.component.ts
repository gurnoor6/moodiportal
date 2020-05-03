import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rulesDescription,rulesList} from './rules-interface';
import {CG, cgs_list} from './cgs-list';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import{RegistrationService} from '../registration.service';
import {forbiddenNameValidator} from './form-validators';
import { ScrollTopService } from '../scrolltop.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private _registrationService:RegistrationService,
    private scrollTopService: ScrollTopService
    ) { }

  competitionId;
  competition;
  coverimg;
  name;
  registrationForm:FormGroup;
  cgs_list = cgs_list;
  ngOnInit():void {
    this.scrollTopService.setScrollTop();
  	let id= parseInt(this.route.snapshot.paramMap.get('id'));
  	this.competitionId = id;
    this.competition = rulesList.find(o=>o.id==id);
    this.name = this.competition.name;
    if(window.innerWidth>700)
      this.coverimg= this.competition.coverimg;
    else
      this.coverimg= this.competition.coverimgmobile;

     this.registrationForm = this.fb.group({
      name:['',Validators.required],
      college:['',Validators.required],
      city:['',Validators.required],
      contact:['',[Validators.required,forbiddenNameValidator(/^[6-9]\d{9}$/)]],
      email:['',[Validators.required,forbiddenNameValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      idcard:['',Validators.required],
      checkbox:[false,Validators.pattern('true')]
    })
  }

  
 

  idcardsource;
  onFileChange(event){

    if(event.target.files.length>0){
      const file= event.target.files[0];
      this.registrationForm.get('idcard').setValue(file);
    }


  }

  onSubmit(){
    // const formData = this.registrationForm.value; //this doesn't work
    const formData = new FormData();
    formData.append('name',this.registrationForm.get('name').value);
    formData.append('college',this.registrationForm.get('college').value);
    formData.append('city',this.registrationForm.get('city').value);
    formData.append('email',this.registrationForm.get('email').value);
    formData.append('contact',this.registrationForm.get('contact').value);
    formData.append('idcard',this.registrationForm.get('idcard').value);
    formData.append('competitionname',this.name);
    console.log(formData);
    this._registrationService.register(formData).subscribe(
      response => console.log('success!',response),
      error=> console.log('error',error)

    );
  }



  


}
