import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { RulesComponent } from './rules/rules.component';
import {HttpClientModule} from '@angular/common/http';
import { ScrollTopService } from './scrolltop.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ScrollTopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
