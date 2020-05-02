import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicComponent} from './basic/basic.component';
import {RulesComponent} from './rules/rules.component';

const routes: Routes = [
{path:'',component:BasicComponent,data:{animation:'basicPage'}},
{path:'rules',component:RulesComponent,data:{animation:'rulesPage'}},
{path:'rules/:id',component:RulesComponent,data:{animation:'rulesIdPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
