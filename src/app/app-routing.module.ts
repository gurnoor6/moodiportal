import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicComponent} from './basic/basic.component';
import {RulesComponent} from './rules/rules.component';
import {HomeComponent} from './home/home.component';
import {IntroComponent} from './intro/intro.component';

const routes: Routes = [
{path:'',component:IntroComponent,data:{animation:'p1'}},
{path:'home',component:HomeComponent,data:{animation:'p1'},
children:[
		{path:'',component:BasicComponent},
		{path:'rules',component:RulesComponent},
		{path:'rules/:id',component:RulesComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
