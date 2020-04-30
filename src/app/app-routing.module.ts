import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicComponent} from './basic/basic.component';
import {RulesComponent} from './rules/rules.component';

const routes: Routes = [
{path:'',component:BasicComponent},
{path:'rules',component:RulesComponent},
{path:'rules/:id',component:RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
